# TypeDoc reproductions

#### Default options for a custom option are overridden then deleted when some, but not all, options are set in typedoc.json

See the ouput from build, or run `npm docs`.

Given a custom option declaration with:
```ts
	name: 'test',
	defaultValue: {
		foo: 'foo',
		bar: 'bar'
	}

```
and given a typdoc.json for the custom options:
```json
    "test": {
        "foo": "other"
    }
```

the post bootstrap custom option is:
```js
{ foo: 'other' }
```

and not, as expected:
```js
{ foo: 'other', bar: 'bar' } 
```
If all the custom definitions from `typedoc.json` are removed, the post bootstrap options will be read as:
```js
{ foo: 'foo', bar: 'bar' } 
```
#### expected behaviour
The default options for a custom option will be overridden and retained, not overridden and deleted.

Forked from the [ts-node-repros](https://github.com/TypeStrong/ts-node-repros) for TypeDoc.
