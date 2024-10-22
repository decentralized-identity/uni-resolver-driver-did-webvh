![TDW Logo](https://bcgov.github.io/trustdidweb/tdw.jpg)

# Universal Resolver Driver: tdw

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:tdw** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [TrustDID Web](https://bcgov.github.io/trustdidweb/)

## Example DIDs

```
did:example:0000000000123456
did:example:0000000000456789
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t bcgov/uni-resolver-driver-did-tdw
docker run -p 8080:8080 bcgov/uni-resolver-driver-did-tdw
curl -X GET http://localhost:8080/1.0/identifiers/did:example:0000000000123456
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `uniresolver_driver_did_example_exampleSetting`

 * An example setting for the driver.
 * Default value: (empty string)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `exampleMetadata`: Example metadata
