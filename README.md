## Minimal reproduction
For [this](https://github.com/TypeStrong/typedoc/issues/1971#issuecomment-1177511075) issue.

When using `entryPointStrategy: Packages`, TypeDoc errors with:
```
error Unable to find any entry points. Make sure TypeDoc can find your tsconfig
```

To replicate, run:

```
npm install

npm run docs:resolve    //successful build
npm run docs:packages   //build fails
```