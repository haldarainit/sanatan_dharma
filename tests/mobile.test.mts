/* Run: npm run test

   Every accepted case is a way a real person writes their number. The 91xxx
   cases are the ones that matter most: an earlier version stripped a leading
   "91" on sight and turned the valid number 9123456780 into 23456780, which
   is how a donor's phone number gets silently corrupted in the database. */
import { isValidMobile, normaliseMobile } from '../lib/validation/mobile.ts'

let pass = 0
let fail = 0
const eq = (input: string, wantValid: boolean, wantDigits?: string) => {
  const valid = isValidMobile(input)
  const digits = normaliseMobile(input)
  const ok = valid === wantValid && (!wantDigits || digits === wantDigits)
  ok ? pass++ : fail++
  console.log(
    `  ${ok ? 'ok  ' : 'FAIL'} ${JSON.stringify(input).padEnd(22)} -> ${valid ? digits : 'rejected'}` +
      (ok ? '' : `   expected ${wantValid ? wantDigits : 'rejected'}`)
  )
}

console.log('accepted, normalised to ten digits:')
eq('9876543210', true, '9876543210')
eq('09876543210', true, '9876543210')
eq('+919876543210', true, '9876543210')
eq('+91 98765 43210', true, '9876543210')
eq('91 9876543210', true, '9876543210')
eq('0091 9876543210', true, '9876543210')
eq('98765-43210', true, '9876543210')
eq('(98765) 43210', true, '9876543210')
eq('  9876543210  ', true, '9876543210')

console.log('\nnumbers that begin 91 — must not lose their first digits:')
eq('9123456780', true, '9123456780')
eq('+919123456780', true, '9123456780')
eq('919123456780', true, '9123456780')
eq('09123456780', true, '9123456780')

console.log('\nrejected:')
eq('12345', false)
eq('5876543210', false)
eq('98765432101', false)
eq('abcdefghij', false)
eq('', false)

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
