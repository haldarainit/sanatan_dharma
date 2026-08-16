import { NextResponse } from 'next/server'
import { isConfigError } from './api-errors'

/* Turning a thrown error into a response the caller can act on.

   A route that dies on a missing environment variable returns a blank 500,
   which tells whoever is setting the site up precisely nothing — the browser
   shows "Could not sign in" and the real cause is buried in a log they may
   not have open. That is a slow, avoidable hour.

   Configuration problems answer 503 with a plain sentence, because they are
   the server's fault and always fixable by the operator. The message never
   names the variable to the public; that detail goes to the server log. */

export function apiError(err: unknown, fallback = 'Something went wrong') {
  const message = err instanceof Error ? err.message : String(err)

  if (isConfigError(err)) {
    console.error('[config] ' + message)
    return NextResponse.json(
      {
        error:
          'The server is not fully set up yet. If you are the administrator, ' +
          'check that the environment variables are configured.',
        code: 'not_configured',
      },
      { status: 503 }
    )
  }

  console.error('[error] ' + message)
  return NextResponse.json({ error: fallback }, { status: 500 })
}

export { ConfigError, isConfigError } from './api-errors'
