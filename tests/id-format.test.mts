/* Run: npm run test

   These are pure functions, so they need no database and no environment.
   The financial-year cases are the point of this file: the boundary is
   00:00 IST on 1 April, which falls on the previous day in UTC. */
import { financialYear, identify, normaliseId, receiptNo, memberNo, ticketNo } from '../lib/id-format.ts'

let pass = 0, fail = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = got === want
  ok ? pass++ : fail++
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${ok ? '' : `\n         got ${got}  want ${want}`}`)
}

console.log('financial year (the April boundary, evaluated in IST):')
eq('15 Aug 2026            ', financialYear(new Date('2026-08-15T12:00:00Z')), 2026)
eq('1 Jan 2027 (still FY26)', financialYear(new Date('2027-01-01T12:00:00Z')), 2026)
eq('31 Mar 2027 23:40 IST  ', financialYear(new Date('2027-03-31T18:10:00Z')), 2026)
eq('1 Apr 2027 00:30 IST   ', financialYear(new Date('2027-03-31T19:00:00Z')), 2027)
eq('1 Apr 2027 05:00 IST   ', financialYear(new Date('2027-03-31T23:30:00Z')), 2027)

console.log('\nformatting (must match the client artwork):')
eq('receipt ', receiptNo(2026, 125), 'SDMKF/2026/000125')
eq('member  ', memberNo('MH', 125), 'SDMKF-MH-000125')
eq('ticket  ', ticketNo(1), '10000001')
eq('ticket 8 digits', ticketNo(9469352).length, 8)

console.log('\nrecognising what a visitor types:')
eq('receipt      ', identify('SDMKF/2026/000125'), 'receipt')
eq('member       ', identify('SDMKF-MH-000125'), 'member')
eq('ticket       ', identify('19469352'), 'ticket')
eq('appointment  ', identify('SDMKF/APT/2026/00012'), 'appointment')
eq('lower + spaces', identify('  sdmkf-mh-000125 '), 'member')
eq('garbage      ', identify('hello'), null)
eq('old fake id  ', identify('SDMKF-VOL-8942'), null)
eq('normalise    ', normaliseId(' sdmkf/2026/000125 '), 'SDMKF/2026/000125')

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
