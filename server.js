import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Data file and persistence helpers
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'variants.json');

let variantStore = {};

try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (fs.existsSync(DATA_FILE)) {
        const raw = fs.readFileSync(DATA_FILE, 'utf8');
        variantStore = raw ? JSON.parse(raw) : {};
    } else {
        fs.writeFileSync(DATA_FILE, JSON.stringify(variantStore, null, 2));
    }
} catch (err) {
    console.error('Failed to initialize variant store:', err);
}

function saveVariantStore() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(variantStore, null, 2));
    } catch (err) {
        console.error('Failed to save variant store:', err);
    }
}

// Endpoint to track variants
app.post('/api/track', (req, res) => {
    const { variant } = req.body || {};
    if (!variant || typeof variant !== 'string') {
        return res.status(400).json({ error: 'Invalid variant' });
    }

    const key = variant.trim();
    variantStore[key] = (variantStore[key] || 0) + 1;
    saveVariantStore();

    return res.json({ success: true });
});

// Endpoint to retrieve stats
app.get('/api/stats', (req, res) => {
    return res.json({ variants: variantStore });
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing: serve index.html for all non-static requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
