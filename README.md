# create-valtren-extension

Shorthand CLI wrapper for scaffolding Valtren AI extensions.

## Install or run directly

Run without installing:

```bash
npx create-valtren-extension my-extension --runtime node-pack
```

Install globally if you prefer:

```bash
npm install -g create-valtren-extension
create-valtren-extension my-extension --runtime node-pack
```

## What this does

This package forwards to the official Valtren AI scaffold logic published in [`@valtren-ai/extension-sdk`](https://www.npmjs.com/package/@valtren-ai/extension-sdk).

Supported runtime templates:

- `node-pack`
- `org-zip-node`
- `org-zip-python`
- `sidecar-python`
- `sidecar-java`
- `sidecar-dotnet`

Example:

```bash
npx create-valtren-extension my-extension --runtime org-zip-python --dir ./extensions/my-extension
```

## Related repositories

- `valtren-ai/extension-sdk`
- `valtren-ai/extension-examples`

## Support

- Report issues: [GitHub Issues](https://github.com/valtren-ai/create-valtren-extension/issues)
- Request templates or CLI improvements: [GitHub Issues](https://github.com/valtren-ai/create-valtren-extension/issues)

## Versioning

- This package follows semantic versioning.
- See [CHANGELOG.md](./CHANGELOG.md) for release notes and upgrade guidance.
