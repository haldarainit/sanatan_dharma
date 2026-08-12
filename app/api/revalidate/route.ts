import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

/* Sanity calls this when a document is published, so edits appear without a
   redeploy. Set the same secret here and in the webhook configuration. */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }
    if (!body?._type) {
      return new NextResponse('Bad request', { status: 400 })
    }

    revalidateTag('sanity')
    return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() })
  } catch (err) {
    return new NextResponse((err as Error).message, { status: 500 })
  }
}
