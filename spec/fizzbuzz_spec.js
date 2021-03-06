describe("FizzBuzz", ()=> {

  test = new FizzBuzz();

  it("returns fizzbuzz if number is divisible by 3 & 5", ()=> {
    expect(test.play(15)).toEqual('fizzbuzz');
  });

  it('returns fizz if number is divisible by 3', ()=> {
    expect(test.play(6)).toEqual('fizz');
  });

  it('returns buzz if number is divisible by 5', ()=> {
    expect(test.play(20)).toEqual('buzz');
  });

  it('returns the number if not divisible by neither 3 nor 5', ()=> {
    expect(test.play(1)).toEqual(1);
  });

  it('returns a message if number is less than zero', ()=> {
    expect(test.play(0)).toEqual('Enter a number greater than zero')
  });
});
