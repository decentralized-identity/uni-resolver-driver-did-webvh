import { Elysia } from 'elysia'
import { resolveDID } from 'trustdidweb-ts';
const app = new Elysia()
  .get('/1.0/identifiers/:identifier', async ({ params: { identifier } }: { params: { identifier: string } }) => {
    try {
      const did = await resolveDID(identifier);
      if (did.doc) {
        console.log(`Resolved ${did.doc.id}`);
        return new Response(JSON.stringify(did.doc, null, 2), {
          headers: {
              'Content-Type': 'application/json'
          }
        });
      }
      return new Response('Not Found', {status: 404});
    } catch (e: any) {
      console.error(e.message)
      return new Response('Internal Server Error', {status: 500});
    }
  })
  .listen(Bun.env.PORT || 8080)

console.log(`did:tdw resolver is running on port ${app.server?.port}`)