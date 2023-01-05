# Enveloop API Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/enveloop)](https://www.npmjs.com/package/@fern-api/enveloop)

The Enveloop Node.js library provides access to the Enveloop API from JavaScript/TypeScript.

## Documentation

API documentation is available at <https://docs.enveloop.com/enveloop-api/introduction-to-the-api>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-i3fwkb?file=app.ts&view=editor)

```typescript
import { EnveloopApiClient } from '@fern-api/enveloop';
import { Environment } from "@fern-api/enveloop/environments";

const client = new EnveloopApiClient({
  environment: Environment.Production,
  token: 'YOUR_TOKEN'
});

const response = await client.messages.send({
    "template": "user-welcome",
    "to": "bob@test.com",
    "from": "Northwind App <app@northwind.com>",
    "subject": "Welcome to Northwind",
    "templateVariables": {
      "name": "Bob Vance"
    }
});

console.log('Received response from Enveloop!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-{company}/{company}-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
