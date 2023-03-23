import * as t from 'io-ts';

/**
 * Generate a static type alias from a runtime type.
 */
export type CompileTimeType<RunTimeType extends t.Type<any, any, unknown>> = t.TypeOf<RunTimeType>;

export const RT_Test1 = t.type({
  str: t.string,
  num: t.number
})

export type Test1 = CompileTimeType<typeof RT_Test1>;

export type Test2 = {
  str: string,
  num: number
}

/**
 * The parameter is unreadable.
 * @param param
 */
export function myFunc1(param: Test1) {

}

/**
 * The parameter is fine.
 * @param param
 */
export function myFunc2(param: Test2) {

}