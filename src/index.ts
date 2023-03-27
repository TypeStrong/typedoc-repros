import type { LiteralUnion } from "./types";

export class SignatureTest {
  literalUnionParamMethod(value: LiteralUnion<"a" | "b">): string {
    return value;
  }
}
