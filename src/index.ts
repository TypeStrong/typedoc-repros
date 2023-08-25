/**
 * A class.
 */
class MyClass {
  /**
   * My summary documentation, which is duplicated.
   * @param digits - must be a non-negative integer
   * @returns a function that converts a string to a string without so many decimals
   * @see See string is also duplicated.
   */
  public static stringifyFixed(digits: number): (val: string) => string {
    return (val: string) => parseFloat(val).toFixed(digits).toString();
  }
}
