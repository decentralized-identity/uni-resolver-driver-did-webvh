![WebVH Logo](https://raw.githubusercontent.com/decentralized-identity/didwebvh/refs/heads/main/didwebvh.jpg)

# Universal Resolver Driver: webvh

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:webvh** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [did:webvh](https://identity.foundation/didwebvh/)

## Example DIDs

```
did:webvh:QmahiuqDheWp6ZgRC66fsthiALqBFxvYQKk8uTQeqaBUQ2:anywhy.ca:webvh-05-large
did:webvh:QmPEQVM1JPTyrvEgBcDXwjK4TeyLGSX1PxjgyeAisdWM1p:gist.githubusercontent.com:brianorwhatever:9c4633d18eb644f7a47f93a802691626:raw
```

## Build and Run (Docker)

```
docker build --platform linux/amd64 -f ./Dockerfile . -t uni-resolver-driver-did-webvh
docker run -p 8080:8080 uni-resolver-driver-did-webvh
curl -X GET http://localhost:8080/1.0/identifiers/did:webvh:QmPEQVM1JPTyrvEgBcDXwjK4TeyLGSX1PxjgyeAisdWM1p:gist.githubusercontent.com:brianorwhatever:9c4633d18eb644f7a47f93a802691626:raw
```

## Build and Run (Bun)

```
bun index.ts
```


## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `versionId`: The version ID of the DID document.
* `created`: The date and time the DID document was created.
* `updated`: The date and time the DID document was last updated.
* `previousLogEntryHash`: The hash of the previous log entry.
* `scid`: The SCID of the DID document.
* `prerotation`: Whether the DID enforces prerotation.
* `portable`: Whether the DID is portable.
* `nextKeyHashes`: The next key hashes of the DID prerotation keys.
* `deactivated`: Whether the DID is deactivated.
* `updateKeys`: The authorized update keys of the DID.
* `witness`: An object expressing the witnesses of the DID.
  * `witnesses`: The witnesses of the DID.
  * `threshold`: The required threshold of the DID.

```
{
    "versionId": "1-Qmds9CUMtvCTo7FmrTD3RgpKcAj6yjoVq57xh9o8YrZzRP",
    "created": "2024-10-24T09:21:37",
    "updated": "2024-10-24T09:21:37",
    "previousLogEntryHash": "QmbkyrrjFQ3Z2WiDfmesKpmeUhemaiqkWgwemovmVaTJfQ",
    "scid": "QmbkyrrjFQ3Z2WiDfmesKpmeUhemaiqkWgwemovmVaTJfQ",
    "prerotation": false,
    "portable": false,
    "nextKeyHashes": [],
    "deactivated": false,
    "updateKeys": [
      "z6MkphavubMiWGTLX63rfQPGdxsxNU7i2uEuMvEnmpnBT44p"
    ],
    "witness": {
      "witnesses": [],
      "threshold": 0
    }
  }
```