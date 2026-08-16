'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get('next') || '/admin'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(body.error || 'Could not sign in')
        setBusy(false)
        return
      }
      router.push(next)
      router.refresh()
    } catch {
      setError('Could not reach the server — check your connection')
      setBusy(false)
    }
  }

  const field =
    'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 ' +
    'transition-colors duration-150 placeholder:text-slate-400 ' +
    'focus:border-[#c44800] focus:outline-none focus:ring-2 focus:ring-orange-100'

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="username"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={field}
        />
      </div>

      {/* announced to screen readers, and sitting with the fields rather than
          stranded at the top of the page */}
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-[#b91c1c]"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-lg bg-[#c44800] px-4 py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#a83d00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c44800] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-[380px]">
        <div className="mb-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.jpeg"
            alt="Sanatan Dharm Manav Kalyan Foundation"
            className="mx-auto h-14 w-auto object-contain mix-blend-multiply"
          />
          <h1 className="mt-3 font-serif text-xl font-bold text-slate-900">Admin</h1>
          <p className="mt-1 text-xs text-slate-500">Staff access only</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-slate-400">
          This panel holds donor records and identity documents.
          <br />
          Do not share your password.
        </p>
      </div>
    </div>
  )
}
