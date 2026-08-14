# Editing the website

Everything on the site — every heading, paragraph, button label and photo — is
edited in the Sanity Studio. No developer is needed and nothing has to be
redeployed.

**Studio:** https://sanatan-dharma.sanity.studio
**Website:** https://sanatan-dharma-2-five.vercel.app

---

## How to change text

1. Open the Studio and sign in.
2. Click **Pages** in the left column.
3. Pick the page you want, e.g. `/about`. The homepage is split into its
   sections — `Home — Hero`, `Home — Active Fundraisers`, and so on — so you
   are not scrolling one enormous list.
4. Each row under **Content** shows the text as it appears on the site. Click
   a row, change the **Text** field, and press **Publish**.

The change is live within a minute. (With the webhook configured — see below —
it is immediate.)

### The Key field

Every row has a read-only **Key** such as `k12` or `active-fundraisers-k3`.
That is how the website finds the text. **Do not change it.** If a key is
wrong the site quietly falls back to the wording it shipped with, so a mistake
here shows up as "my edit did nothing" rather than as an error.

### Emptying a field

Clearing a text field restores the original wording rather than leaving a
blank space on the page. To genuinely show nothing, type a space.

---

## How to change a photo

Same place — the **Pages** section. Image rows show a thumbnail.

1. Click the row.
2. Upload a file into the **Image** field.
3. Press **Publish**.

**Current file** on each row tells you which picture is showing while the
Image field is empty. Some rows start empty because the picture is a stock
photo hosted elsewhere; uploading your own replaces it.

**Alt text** is the description read aloud by screen readers and shown if the
image fails to load. Worth filling in.

---

## Things that live outside Pages

Some content appears in many places at once, so it is edited in one place:

| What | Where in the Studio |
| --- | --- |
| Logo, site name, Donate button label, helplines, emails, WhatsApp, CIN, footer text, social links | **Site settings** |
| **UPI ID for donations** | **Site settings** |
| Homepage slider images and headlines | **Home hero slides** |
| Upcoming mission cards and their detail pages | **Upcoming missions** |
| Founder / inspiration figures | **Inspiration figures** |
| Membership tiers, fees, form fields | **Membership categories** |
| Suggested donation amounts | **Donation amounts** |
| FAQ entries | **FAQs** |
| Status tables on Need Help / Raise a Complaint | **Status rows** |

### About the UPI ID

Changing **UPI ID for donations** in Site settings updates the QR codes, the
"Open Google Pay / UPI App" links and the printed ID on both the homepage and
the donate page at the same time. There is deliberately no way to change one
without the others — that used to be possible and would have sent donations to
the wrong account.

---

## Making edits appear instantly

Published edits appear within 60 seconds on their own. To make them appear
immediately, set the environment variable `SANITY_REVALIDATE_SECRET` in Vercel
to the same value used by the Sanity webhook that points at
`https://<the site>/api/revalidate`.

Until that is set the endpoint refuses requests (it cannot tell a real webhook
from a stranger), and edits simply take up to a minute instead.

---

## If an edit does not show up

Work through these in order:

1. Did you press **Publish**? Saving a draft alone changes nothing.
2. Wait a full minute and reload.
3. Check you edited the right row — the **Section** label on each row says
   which part of the page it belongs to.
4. Confirm the **Key** was not modified.

---

## For developers

```bash
npm run dev              # local site on :3000
npm run build            # production build
npm run sanity:dev       # Studio locally
npm run sanity:deploy    # publish the Studio

npm run cms:extract      # lift new text/images out of the code into block files
npm run sanity:seed      # publish the typed documents (hero, missions, people…)
npm run sanity:seed:pages# publish the per-page text and image blocks
npm run cms:verify       # check every published block reaches the rendered page
```

`cms:verify` runs against `http://localhost:3100` by default; pass a URL to
check a deployed site. It reports the percentage of text blocks found in the
HTML and whether each image resolves.

Re-running the seeders never overwrites text that has been edited in the
Studio — a block already carrying text keeps it.

### Content lookup

Pages read their content through two helpers:

```tsx
t(text, 'k12', "the wording the site shipped with")
img(images, 'i4', "/img/example.jpg")
```

Both fall back to the second argument, so the site renders correctly even with
an empty dataset or with Sanity unreachable.

A route may be spread over several `page` documents that share the same
`path`; `getPageContent` merges them by key. That is how the homepage is split
into sections.
