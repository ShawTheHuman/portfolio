#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DATA_FILE = path.join(__dirname, '..', 'data', 'variants.json')

function loadVariants() {
  try {
    if (!fs.existsSync(DATA_FILE)) return {}
    const raw = fs.readFileSync(DATA_FILE, 'utf8')
    return raw ? JSON.parse(raw) : {}
  } catch (err) {
    console.error('Failed to read variants file:', err)
    process.exit(1)
  }
}

function printStats() {
  const variants = loadVariants()
  const entries = Object.entries(variants)
  if (entries.length === 0) {
    console.log('No variants tracked yet.')
    return
  }

  const total = entries.reduce((s, [, v]) => s + v, 0)
  console.log(`Total variants recorded: ${total}`)
  console.log('Variants:')
  entries.sort((a, b) => b[1] - a[1]).forEach(([k, v]) => {
    console.log(`- ${k}: ${v}`)
  })
}

printStats()
