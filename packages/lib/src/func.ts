import type { LibInt } from "./intf";

export function libFunc(): LibInt {
    console.log("Bar");
    return { bar: true };
}
