// 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', function(){
    describe('scalar values', function() {
      it('1 is the same as 1', function() {
        //const areSame = Object.is(1, '???');
        const areSame = Object.is();
        //object.is () will show 1 is the same as 1
        assert(areSame);
      });
      it('int 1 is different to string "1"', function() {
        //const areSame = Object.___(1, '1');
        const areSame = Object.is(1, '1');
        // Object.is will produce = false
        assert(areSame === false);
      });
      it('strings just have to match', function() {
        //const areSame = Object.is('one', 'two');
        const areSame = Object.is('one', 'one');
      //changed the return to 'one'
        assert(areSame);
      });
      it('+0 is not the same as -0', function() {
        //const areSame = -1;
        const areSame = -0;
        //changed const areSame = -0
        assert.equal(Object.is(+0, -0), areSame);
      });
      it('NaN is the same as NaN', function() {
        //const number = 0;
        const number = NaN;
        //changed const number to = NaN
        assert.equal(Object.is(NaN, number), true);
      });
    });
    describe('coercion, as in `==` and `===`, does NOT apply', function() {
      it('+0 != -0', function() {
        //const coerced = +0 === -0;
        const coerced = +0 != -0;
        //made it not equal 
        const isSame = Object.is(+0, -0);
        
        assert.equal(isSame, coerced);
      });
      it('empty string and `false` are not the same', function() {
        //const emptyString = '';
        const emptyString = 'z';
        // adding something to the string is all thats needed
        const isSame = Object.is(emptyString, false);
        
        assert.equal(isSame, emptyString == false);
      });
      it('NaN', function() {
        //const coerced = NaN == NaN;
        const coerced = NaN != NaN;
        // added !=
        const isSame = Object.is(NaN, NaN);
        assert.equal(isSame, coerced);
      });
      it('NaN 0/0', function() {
        //const isSame = Object.ISSSSS(NaN, 0/0);
        const isSame = Object.is(NaN, 0/0);
        // Object needed to be changed to Object.is
        assert.equal(isSame, true);
      });
    });
    describe('complex values', function() {
      it('`{}` is just not the same as `{}`', function() {
        //const areSame = '???';
        const areSame = false;
         assert(Object.is({}, {}) === areSame);
      });
      it('Map', function() {
        let map1 = new Map([[1, 'one']]);
        let map2 = new Map([[1, 'one']]);
        //const areSame = Object.is(map1, map1);
        const areSame = Object.is(map1, map2);
      // the const areSome needed to have the Object.is return map2 and
      //not map 1
        assert.equal(areSame, false);
      });
    });
  });
  