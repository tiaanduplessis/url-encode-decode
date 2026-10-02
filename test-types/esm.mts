import codec from '../index.js';

const encoded: string = codec.encode('hello world');
const decoded: string = codec.decode(encoded);
const emptyEncoded: string = codec.encode();
const undefinedDecoded: string = codec.decode(undefined);

// @ts-expect-error Numbers are not coerced to strings.
codec.encode(42);
// @ts-expect-error Null is not a string.
codec.decode(null);
// @ts-expect-error The result is always a string.
const invalidDecoded: number = codec.decode('hello');
// @ts-expect-error There is no second parameter.
codec.encode('hello', {});
