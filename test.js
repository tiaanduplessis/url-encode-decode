const { encode, decode } = require('./')

test('if it encodes and decodes a string', () => {
  expect(encode('foo bar baz')).toBe('foo+bar+baz')
  expect(encode(`Hi! How? & you person/\\`)).toBe('Hi%21+How%3F+%26+you+person%2F%5C')

  expect(decode('foo+bar+baz')).toBe('foo bar baz')
  expect(decode('Hi%21+How%3F+%26+you+person%2F%5C')).toBe(`Hi! How? & you person/\\`)
})

test('defaults omitted and undefined inputs to an empty string', () => {
  expect(encode()).toBe('')
  expect(decode()).toBe('')
  expect(encode(undefined)).toBe('')
  expect(decode(undefined)).toBe('')
})

test('preserves Unicode and distinguishes literal plus signs from spaces', () => {
  const value = 'caf\u00e9 \u2603 \ud83d\ude00 + %'
  expect(decode(encode(value))).toBe(value)
  expect(encode(' + ')).toBe('+%2B+')
  expect(decode('+%2B+')).toBe(' + ')
  expect(encode("!'()*")).toBe('%21%27%28%29%2A')
})

test.each([null, 42, false, {}, [], Object('hello')].map(value => [value]))('rejects non-string input %p', value => {
  expect(() => encode(value)).toThrow('Please provide string to encode.')
  expect(() => decode(value)).toThrow('Please provide string to decode')
})

test('throws URIError for malformed Unicode or percent-encoded input', () => {
  expect(() => encode('\ud800')).toThrow(URIError)
  expect(() => decode('%')).toThrow(URIError)
  expect(() => decode('%E0%A4')).toThrow(URIError)
})
