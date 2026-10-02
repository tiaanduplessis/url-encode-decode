declare const urlEncodeDecode: {
  /**
   * Encodes a string, replacing spaces with `+`. Defaults to an empty string.
   * @throws {Error} If the input is not a string.
   * @throws {URIError} If the input contains an unpaired surrogate.
   */
  encode(str?: string): string;

  /**
   * Decodes a string, treating `+` as a space. Defaults to an empty string.
   * @throws {Error} If the input is not a string.
   * @throws {URIError} If the input contains malformed percent-encoded data.
   */
  decode(str?: string): string;
};

export = urlEncodeDecode;
