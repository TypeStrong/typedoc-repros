const obj = {
    /** function-docs */
    fn(x: unknown) {}
}

/**
 * exported-docs
 * @param x param-docs
 */
export const bug = obj.fn;
