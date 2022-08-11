/**
 * Some code reproducing a bug.
 */
declare namespace SameNameClassNamespace {
  /**
   * This causes an error even though it's relatively correct: {@link AnotherInterface}
   */
  export interface AnInterface {

  }

  /**
   * Some documentation
   */
  export interface AnotherInterface {

  }
}

/*
 * The error goes away in three ways:
 * - Comment out the below class
 * - Comment out the below interface
 * - Even stranger: Make this comment a TSDoc comment (add extra * to beggining of comment),
 *   which will apply to the class.
 *     - This may be a workable workaround
 */


declare class SameNameClassNamespace {

}

/**
 * This interface is used to augment additional keys (from AnInterface) onto SameNameClassNamespace
 */
interface SameNameClassNamespace extends SameNameClassNamespace.AnInterface {

}

export {
  SameNameClassNamespace
};
