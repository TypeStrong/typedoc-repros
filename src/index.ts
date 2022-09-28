/**
 * A class to be documented.
 */
export class Test
{
	/**
	 * A private field.
	 */
	private privateField: string = "";

	/**
	 * A protected field.
	 */
	protected protectedField: string = "";

	/**
	 * A public field.
	 */
	public publicField: string = "";

	constructor(
		/**
		 * A private field declared in a constructor assignment.
		 */
		private anotherPrivateField: string,

		/**
		 * A protected field declared in a constructor assignment.
		 */
		protected anotherProtectedField: string,

		/**
		 * A public field declared in a constructor assignment.
		 */
		public anotherPublicField: string
	)
	{ }
}
