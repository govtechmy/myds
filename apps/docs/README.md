# MYDS Documentation Site

This is the documentation site for the Malaysian Government Design System (MYDS).

## Development

```bash
pnpm dev
```

## Building

```bash
pnpm build
```

## Windows Build Support

The project uses `fumadocs-docgen` as an optional dependency to avoid Playwright-related build failures on Windows. The `remarkInstall` plugin from `fumadocs-docgen` is conditionally loaded in `source.config.ts`:

- If the package is available (macOS/Linux), it will be used to enhance the documentation with install instructions
- If the package is not available or fails to load (Windows), the build will continue without this feature

This ensures that the documentation can be built successfully on all platforms.
