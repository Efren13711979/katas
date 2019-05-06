// 24: class - static keyword
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Inside a class you can use the `static` keyword', () => {
    describe('for methods', () => {
      class UnitTest {}
      it('a static method just has the prefix `static`', () => {
        class TestFactory {
         // makeTest() { return new UnitTest(); }
          static makeTest() { return new UnitTest(); }
          // added keyword to makeTest
        }
        assert.ok(TestFactory.makeTest() instanceof UnitTest);
      });
      it('the method name can be dynamic/computed at runtime', () => {
        //const methodName = 'makeTest';
        const methodName = 'createTest';
        //changed makeTest to createTest based off the assert
        class TestFactory {
          static [methodName]() { return new UnitTest(); }
        }
        assert.ok(TestFactory.createTest() instanceof UnitTest);
      });
    });
    describe('for accessors', () => {
      it('a getter name can be static, just prefix it with `static`', () => {
        class UnitTest {
          //get testType() { return 'unit'; }
          static get testType() { return 'unit'; }
          //made the getter static by adding the keyword
        }
        assert.equal(UnitTest.testType, 'unit');
      });
      it('even a static getter name can be dynamic/computed at runtime', () => {
        const type = 'test' + 'Type';
        class IntegrationTest {
          //get type() { return 'integration'; }
         static get [type]() { return 'integration'; }
        }
        assert.ok('testType' in IntegrationTest);
        assert.equal(IntegrationTest.testType, 'integration');
      });
    });
  });
  