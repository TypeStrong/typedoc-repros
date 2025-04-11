/**
 * This is some class.
 */
export class SomeClass {

	/**
	 * Creates an instance of {@linkcode SomeClass}.
	 *
	 * “SomeClass” in the description above has a `@linkcode` tag and
	 * should:
	 * 1. Link to `SomeClass` (like in the “Returns” section below).
	 * 2. Be rendered as inline code.
	 *
	 * [See](https://typedoc.org/documents/Tags.__link_.html#jsdoc-compatibility):
	 * > TypeDoc will also recognize the `@linkplain` and `@linkcode`
	 * > JSDoc tags and resolve them with the same method as other
	 * > links.
	 *
	 * This is working with TypeDoc v0.27.9, but fails to produce the
	 * same expected output starting with v0.28.0.
	 */
	constructor() { }

}
