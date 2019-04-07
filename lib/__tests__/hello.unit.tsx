const add = (a:number, b:number) => {
  return a + b
}
describe('first', () => {
  it('a+b', () => {
    expect(add(1,2)).toEqual(3)
  })
})