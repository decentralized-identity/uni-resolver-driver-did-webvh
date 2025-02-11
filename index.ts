import { Elysia } from 'elysia'
import { resolveDID } from 'didwebvh-ts';
const app = new Elysia()
  .get('/', () => {
    return new Response('Hello World', {status: 200});
  })
  .get('/1.0/identifiers/:identifier', async ({ params: { identifier } }: { params: { identifier: string } }) => {
    console.log(`Resolving ${identifier}`)
    try {
      const {doc, meta} = await resolveDID(identifier);
      if (doc) {
        console.log(`Resolved ${doc.id}`);
        return Response.json({
          didDocument: doc,
          didResolutionMetadata: {
            contentType: 'application/did+ld+json',
            retrieved: new Date().toISOString()
          },
          didDocumentMetadata: meta
        }, {
          headers: {
              'Content-Type': 'application/json'
          }
        });
      }
      return new Response('Not Found', {status: 404});
    } catch (e: any) {
      console.log(`Failed to resolve ${identifier}: ${e.message}`)
      return new Response(e.message, {status: 400});
    }
  })
  .listen(Bun.env.PORT || 8080)

console.log(`did:webvh resolver is running on port ${app.server?.port}`)