## Minimal configuration for a Typescript MonoREPO and TypeDocs

This implements:
- TypeDoc with a 'Packages' strategy
- NPM with a 'workspace' strategy
- Typescript compiling with a 'Project References' --build strategy

From the root dir, do `npm install`

### To build code
```
npm run build
```
Builds to the `dist` folder

### To build documents
```
npm run docs
```
Builds to the `docs` folder