import emojis from './emojis.reducer';

describe('Test Emoji Reducer', () => {
  it("should return emojis at it's initial state", () => {
    expect(emojis(undefined, {})).toEqual({
      loading: false,
      emojis: {},
      err: null
    });
  });
});
