/// <reference types="next" />
/// <reference types="next/types/global" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PromiseType<T extends Promise<any>> = T extends Promise<infer P>
  ? P
  : never;
