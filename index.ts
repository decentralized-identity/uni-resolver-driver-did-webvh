import { Elysia } from 'elysia'
import { resolveDID, SigningInput, SigningOutput, Verifier } from 'didwebvh-ts';
import { verify as ed25519Verify } from '@stablelib/ed25519';

class WebVHVerifier implements Verifier {
  constructor() {
  }

  async sign(input: SigningInput): Promise<SigningOutput> {
    throw new Error('Not implemented');
  }

  async verify(signature: Uint8Array, message: Uint8Array, publicKey: Uint8Array): Promise<boolean> {
    try {
      return ed25519Verify(publicKey, message, signature);
    } catch (error) {
      console.error('Ed25519 verification error:', error);
      return false;
    }
  }
}

const app = new Elysia()
  .get('/', () => {
    return new Response('Hello World', {status: 200});
  })
  .get('/1.0/identifiers/:identifier', async ({ params: { identifier } }: { params: { identifier: string } }) => {
    console.log(`Resolving ${identifier}`)
    try {
      const {doc, meta} = await resolveDID(identifier, {
        verifier: new WebVHVerifier()
      });
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