describe('jasmine', () => {
  it('presents misleading errors', function() {
    // The base path component seems to mess this up.  Why?
    // I get:
    //   Expected '' to equal ''
    expect('http://www.google.com/base/').toEqual('http://www.example.com/base/');
  });
});
