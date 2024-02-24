export interface Struct {
    fields: { [key: string]: Value };
}

export interface Struct_FieldsEntry {
    value: Value | undefined;
}

export interface Value {
    structValue?: Struct | undefined;
    listValue?: ListValue | undefined;
}

export interface ListValue {
    values: Value[];
}

export function fromPartial<I extends Exact<DeepPartial<Struct_FieldsEntry>, I>>(object: I): Struct_FieldsEntry {
    return undefined as any;
};

type Builtin = undefined;

export type DeepPartial<T> = T extends Builtin ? T : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
    ? P
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
