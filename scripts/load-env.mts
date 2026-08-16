import fs from 'node:fs'

/* Next.js loads .env and then .env.local, with .env.local winning. The
   scripts in this folder run under plain Node, which loads neither, so they
   read the same two files in the same order — otherwise a value pasted into
   one file works on the site and appears missing to the tooling. */
export function loadEnv(): void {
  for (const file of ['.env', '.env.local']) {
    if (!fs.existsSync(file)) continue
    for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)$/)
      if (!m) continue
      const key = m[1]
      /* strip surrounding quotes -- people paste them without noticing */
      const value = m[2].trim().replace(/^(['"])(.*)\1$/, '$2')
      if (value !== '') process.env[key] = value
    }
  }
}

/** Report which variables are set, without ever printing their values. */
export function reportEnv(keys: string[]): void {
  for (const key of keys) {
    const v = process.env[key]
    console.log(`  ${key.padEnd(26)}${v ? `set (${v.length} chars)` : 'MISSING'}`)
  }
}
