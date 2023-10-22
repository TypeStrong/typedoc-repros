# Reproduce

```
$ npm install
$ npm run build -w base
$ npm run build -w sub
$ npx typedoc@0.25 --out ./docs
```

# Primary erroneous results:
* Docs for class `Sub` must have a link in comment "Class that implements IBase". However, `IBase` is not a link, just text.
* Docs for class `Sub` must have a link in "Implements - IBase". However, `IBase` is not  link, just text.
* Docs for class `Sub` must have a link in method baz which returns "IBase". However, `IBase` is not  link, just text.
* Docs for interface `IBase` should have in the comment links to `ISub` and `Sub`.

These 4 errors should, IMHO, just work. It is annoying in a monorepo that you cannot link to other packages. There may be other occurrances (like having IBase as part of a method parameter, etc).

# Secondary erroneous result:
These may not be a bug but a related feature request. 

* Docs for `IBase` should mention `Sub` as implementing class and `ISub` as derived interface.

So, subclasses/interfaces in other packages within the monorepo should be listed for the base class, even if it is in another package.
