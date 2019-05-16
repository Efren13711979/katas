// 51: Generator - Yield Expressions
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generator - `yield` is used to pause and resume a generator function', () => {
    function* generatorFunction() {
      yield 'hello';
      yield 'world';
    }
    let generator;
  
    beforeEach(function() {
      generator = generatorFunction();
    });
    it('converting a generator to an array (using `Array.from`) resumes the generator until all values are received', () => {
      //let values = Array.from(generatorFunction);
      let values = Array.from(generator);
      // converting the generator into the Array.from()
      assert.deepEqual(values, ['hello', 'world']);
    });
    describe('after the first `generator.next()` call', function() {
      it('the value is "hello"', function() {
        //const {value} = generator.next;
        const {value} = generator.next('hello');
        //called 'hello' after the 1st generator.next()
        assert.equal(value, 'hello');
      });
      it('and `done` is false', function() {
        //const {done} = generator;
        const {done} = generator.next();
        //included .next to generator ()
        assert.equal(done, false);
      });
    });
    describe('after the second `next()` call', function() {
      let secondItem;
      beforeEach(function() {
        generator.next();
        //added another generator.next() before the secondItem
        secondItem = generator.next();
      });
      it('`value` is "world"', function() {
        let {value} = secondItem;
        assert.equal(value, 'world');
      });
      it('and `done` is still false', function() {
        //const done = secondItem;
        const {done} = secondItem;
        //done needed to be an object {}
        assert.equal(done, false);
      });
    });
    describe('after stepping past the last element, calling `next()` that often', function() {
      it('`done` property equals true, since there is nothing more to iterator over', function() {
        generator.next();
        generator.next();
       // let done = generator.done;
        let {done} = generator.next();
        //turned done into an {} = generator.next
        assert.equal(done, true);
      });
    });
  });
  
  