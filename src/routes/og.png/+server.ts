import { type RequestHandler } from './$types'
import { ImageResponse } from '@ethercorps/sveltekit-og'

export const GET = (async () => {
	const html = `
    <div tw="bg-neutral-200 p-4 rounded-2xl">
      <p>Hello world</p>
    </div>
  `
	return new ImageResponse(html)
}) satisfies RequestHandler
