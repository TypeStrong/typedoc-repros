/**
 * Some code reproducing a bug.
 */
class MyClass {

  /**
   * Documentation for aMethod()
   *
   * This is OK: {@link anotherMethod}
   *
   * @param aParam But this produces an error: {@link anotherMethod}
   */
  aMethod(aParam: number) {

  }

  /**
   * Documentation for anotherMethod()
   */
  anotherMethod() {

  }
}