import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

/* Sanity calls this when a document is published, so edits appear without a
   redeploy.

   The pages also revalidate on their own every 60 seconds (see the root
   layout), so this endpoint is what makes an edit appear immediately rather
   than what makes it appear at all -- if the secret is missing or the
   webhook is not configured, content still updates within the minute. */
export async function POST(req: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET

    /* Without a configured secret we cannot tell a real webhook from a
       stranger, so refuse rather than let anyone force a rebuild. */
    if (!secret) {
      return new NextResponse('SANITY_REVALIDATE_SECRET is not set', { status: 401 })
    }

    const { isValidSignature, body } = await parseBody<{ _type?: string }>(req, secret)

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    /* Tags cover the content fetches; the path sweep catches anything the
       tag did not reach, which matters because the pages are prerendered. */
    revalidateTag('sanity')
    revalidatePath('/', 'layout')

    return NextResponse.json({
      revalidated: true,
      type: body?._type ?? 'unknown',
      now: Date.now(),
    })
  } catch (err) {
    return new NextResponse((err as Error).message, { status: 500 })
  }
}
