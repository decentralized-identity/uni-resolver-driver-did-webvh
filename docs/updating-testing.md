## Updating and Testing the did:webvh Resolver

This guide explains how to update dependencies and code, run the resolver locally or in Docker, and test resolution requests end-to-end.

### Prerequisites
- **Bun** (recommended for local dev): see `https://bun.sh`
- **Docker** (optional) for containerized runs
- A terminal tool to make HTTP requests: `curl`, `httpie`, or a REST client

### Project Overview
- Entry point: `index.ts` (Elysia HTTP server)
- Resolve endpoint: `GET /1.0/identifiers/:identifier`
- Default port: `8080` (override with `PORT`)

### Run Locally with Bun
1. Install dependencies:
   ```bash
   bun install
   ```
2. Start the server (either command works):
   ```bash
   bun index.ts
   # or
   bun run start
   ```
3. Optional: change port
   ```bash
   PORT=3000 bun index.ts
   ```
4. Optional: hot reload during development
   ```bash
   bun --watch index.ts
   ```

### Build and Run with Docker
1. Build the image (from the repo root):
   ```bash
   docker build -t uni-resolver-driver-did-webvh .
   ```
2. Run the container:
   ```bash
   docker run --rm -p 8080:8080 uni-resolver-driver-did-webvh
   ```
3. Test it (see test commands below). If you update dependencies or code, rebuild the image.

### Updating the Resolver
- Update a dependency (e.g., `didwebvh-ts`) to latest:
  ```bash
  bun add didwebvh-ts@latest
  ```
- Install fresh after editing `package.json` manually:
  ```bash
  bun install
  ```
- Make code changes in `index.ts`. The route `GET /1.0/identifiers/:identifier` calls the resolver and returns:
  - `didDocument`
  - `didResolutionMetadata` (e.g., content type, retrieval time)
  - `didDocumentMetadata` (driver metadata from resolution)

### Testing the Resolver

#### Using curl (local Bun or Docker)
Use one of the example DIDs from the README. For example:
```bash
curl -s http://localhost:8080/1.0/identifiers/did:webvh:QmPEQVM1JPTyrvEgBcDXwjK4TeyLGSX1PxjgyeAisdWM1p:gist.githubusercontent.com:brianorwhatever:9c4633d18eb644f7a47f93a802691626:raw | jq
```

Expected top-level JSON fields:
- `didDocument`
- `didResolutionMetadata`
- `didDocumentMetadata`

#### Using the provided REST file
- File: `test-resolve.http`
- If you use VS Code with the REST Client extension, open the file and click "Send Request".
- Or copy the URL in the file and run with `curl`.

### Troubleshooting
- Port already in use: change port with `PORT=3000 bun index.ts` or stop the other process.
- `404 Not Found`: DID cannot be located by the driver.
- `400` with message: likely an invalid DID or resolution input error.
- Docker changes not reflected: rebuild the image after updating code or `bun.lockb`.
- Missing deps: re-run `bun install`.

### Notes for Contributors
- Keep the public API path aligned with Universal Resolver conventions: `/1.0/identifiers/:identifier`.
- If you add new routes or behavior, document them in `README.md` and update this page as needed.


