![TDW Logo](https://bcgov.github.io/trustdidweb/tdw.jpg)

# Universal Resolver Driver: tdw

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:tdw** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [TrustDID Web](https://bcgov.github.io/trustdidweb/)

## Example DIDs

```
did:tdw:QmbkyrrjFQ3Z2WiDfmesKpmeUhemaiqkWgwemovmVaTJfQ:demo.identifier.me:client:c9dd16b7-e079-43da-b0a9-36515e726c6f
did:tdw:QmbnQXj7DhWFrmgjDPKZCybn8fkKW7Wze57SQHpwsSQ7NZ:gist.githubusercontent.com:brianorwhatever:9c4633d18eb644f7a47f93a802691626:raw
```

## Build and Run (Docker)

```
docker build -f ./Dockerfile . -t brianrichter/uni-resolver-driver-did-tdw
docker run -p 8080:8080 brianrichter/uni-resolver-driver-did-tdw
curl -X GET http://localhost:8080/1.0/identifiers/did:tdw:QmbnQXj7DhWFrmgjDPKZCybn8fkKW7Wze57SQHpwsSQ7NZ:gist.githubusercontent.com:brianorwhatever:9c4633d18eb644f7a47f93a802691626:raw
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
* `witnesses`: The witnesses of the DID.
* `witnessThreshold`: The witness threshold of the DID.

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
    "witnesses": [],
    "witnessThreshold": 0
  }
```