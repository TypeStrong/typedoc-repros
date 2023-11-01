export interface TemplatedTypeBase {
  /**
   * Doc here
   */
  prop?: string[];
}

export interface One extends TemplatedTypeBase {}

export interface Two extends TemplatedTypeBase {}

export type Type = One | Two;

// errors
export function isTemplateInstance(
  type: Type
): type is Type & { prop: string[] } {
  return true;
}

// also error
export function isTemplateInstance2(
  type: Type
): type is Type & Required<TemplatedTypeBase> {
  return true;
}

// this works
export function isTemplateInstance3(
  type: Type
): type is Type & TemplatedTypeBase {
  return true;
}
