/* Classifying a thrown error, with no framework import, so it can be tested
   directly. lib/api.ts turns the verdict into an HTTP response. */

export class ConfigError extends Error {}

/**
 * Is this the server being unconfigured rather than the request being wrong?
 *
 * Worth distinguishing: a missing connection string is the operator's problem
 * and always fixable, whereas a blank 500 sends whoever is setting the site up
 * hunting through logs. These are the shapes that actually occur — the message
 * thrown by lib/env.ts, and the Mongo driver's own complaints about a URI that
 * is absent, malformed or points nowhere.
 */
export function isConfigError(err: unknown): boolean {
  if (err instanceof ConfigError) return true
  const message = err instanceof Error ? err.message : ''
  return (
    /is not set in \.env/.test(message) ||
    /Invalid scheme/.test(message) ||
    /Invalid connection string/.test(message) ||
    /querySrv ENOTFOUND/.test(message) ||
    /ENOTFOUND/.test(message) ||
    /option .* is not supported/i.test(message) ||
    /Server selection timed out/i.test(message) ||
    /ReplicaSetNoPrimary/i.test(message) ||
    /Authentication failed/i.test(message) ||
    /tlsv1 alert internal error|SSL alert number 80/i.test(message)
  )
}
