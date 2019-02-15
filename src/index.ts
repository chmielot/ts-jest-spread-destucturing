class A {
  constructor() {
    const myKey = 'a';
    const myObj = { a: 1, b: 2, c: 3 };
    const { [myKey]: value, ...rest } = myObj;
  }
}

export { A };
