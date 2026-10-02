import codec = require('..');
import defaultCodec from '..';
import * as namespaceCodec from '..';
import { encode, decode } from '..';

const encoded: string = codec.encode('hello world');
const decoded: string = codec.decode(encoded);
const emptyEncoded: string = codec.encode();
const emptyDecoded: string = codec.decode();
const undefinedEncoded: string = codec.encode(undefined);
const undefinedDecoded: string = codec.decode(undefined);
const maybeString: string | undefined = Math.random() > 0.5 ? decoded : undefined;
const optionalEncoded: string = codec.encode(maybeString);
const optionalDecoded: string = codec.decode(maybeString);

// These ES-style imports are compiled to CommonJS by this test configuration.
const defaultResult: string = defaultCodec.decode(defaultCodec.encode(decoded));
const namespaceResult: string = namespaceCodec.decode(namespaceCodec.encode(decoded));
const namedResult: string = decode(encode(decoded));

// @ts-expect-error Only strings and undefined are supported.
codec.encode(null);
// @ts-expect-error Only strings and undefined are supported.
codec.decode(null);
// @ts-expect-error Numbers are not coerced to strings.
codec.encode(42);
// @ts-expect-error Numbers are not coerced to strings.
codec.decode(42);
// @ts-expect-error Booleans are not coerced to strings.
encode(false);
// @ts-expect-error Booleans are not coerced to strings.
decode(false);
// @ts-expect-error Objects are not coerced to strings.
codec.encode({ toString: () => 'hello' });
// @ts-expect-error Objects are not coerced to strings.
codec.decode({ toString: () => 'hello' });
// @ts-expect-error Arrays are not accepted.
codec.encode(['hello']);
// @ts-expect-error Arrays are not accepted.
codec.decode(['hello']);
// @ts-expect-error Boxed strings are not primitive strings.
codec.encode(new String('hello'));
// @ts-expect-error Boxed strings are not primitive strings.
codec.decode(new String('hello'));
// @ts-expect-error There is no second parameter.
codec.encode('hello', {});
// @ts-expect-error There is no second parameter.
codec.decode('hello', {});
// @ts-expect-error The result is always a string.
const invalidEncoded: number = codec.encode('hello');
// @ts-expect-error The result is always a string.
const invalidDecoded: number = codec.decode('hello');
// @ts-expect-error The exported object is not callable.
codec('hello');
// @ts-expect-error No additional methods are exported.
codec.escape('hello');
