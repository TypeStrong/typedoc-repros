export function foo(
    failed: (
        job: Job | undefined,
        error: Error,
        prev: string,
      ) => void
) {}

export class Bar {
    failed: (
        job: Job | undefined,
        error: Error,
        prev: string,
      ) => void = () => {};
}

export interface Job { job: true }