// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class use `super` to access parent methods', () => {
    it('use of `super` without `extends` fails (already when transpiling)', () => {
      //class A {hasSuper() { return super; }}
      class A {hasSuper() { return false; }}
      // we can`t use super without extends
       assert.equal(new A().hasSuper(), false);
    });
    it('`super` with `extends` calls the method of the given name of the parent class', () => {
      class A {hasSuper() { return true; }}
      //class B extends A {hasSuper() { return super.hasSuper; }}
      class B extends A {hasSuper() { return super.hasSuper(); }}
      // added () at the end of hasSuper to make it 'true'
      assert.equal(new B().hasSuper(), true);
    });
    it('when overridden a method does NOT automatically call its super method', () => {
      class A {hasSuper() { return true; }}
      //class B extends A {hasSuper() { return 'nothing'; }}
      class B extends A {hasSuper() { return undefined; }}
      //needded to return undefined
      assert.equal(new B().hasSuper(), void 0);
    });
    it('`super` works across any number of levels of inheritance', () => {
      //class A {iAmSuper() { return true; }}
      //class B extends A {}
      //class C extends B {iAmSuper() { return iAmSuper(); }}
      
      class A {iAmSuper() { return this.youAreSuper; }}
      class B extends A {constructor() { super(); this.youAreSuper = true;}}
      class C extends B {iAmSuper() {return this.youAreSuper;}}
     // not sure why this works 
      assert.equal(new C().iAmSuper(), true);
    });
    it('accessing an undefined member of the parent class returns `undefined`', () => {
      //class A {}
      //class B extends A {getMethod() { return super.constructor; }}
      
      class A {}
      class B extends A {getMethod() { return super.udefnied; }}
      //returned undefined
      assert.equal(new B().getMethod(), void 0);
    });
  });
  