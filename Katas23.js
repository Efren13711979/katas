// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class accessors (getter and setter)', () => {
    it('a getter is defined like a method prefixed with `get`', () => {
      //class MyAccount {
       //get money() { return Infinity; }
      //}
      class MyAccount {
        get balance() { return Infinity; }
      }
  //the assert is asking for a get 'balance' opposed to the get money.
      assert.equal(new MyAccount().balance, Infinity);
    });
    it('a setter has the prefix `set`', () => {
      class MyAccount {
        get balance() { return this.amount; }
        set balance(amount) { this.amount = amount; }
      }
      const account = new MyAccount();
      //account.balance = 42;
      account.balance = 23;
      // the setter is defined as 23 in the assert so we changed it 
      assert.equal(account.balance, 23);
    });
    
    describe('dynamic accessors', () => {
      it('a dynamic getter name is enclosed in `[]`', function() {
        //const balance = 'yourMoney';
        //class YourAccount {
          //get [getterName]() { return -Infinity; }
        //}
        const balance = 'yourMoney';
        class YourAccount {
          get [balance]() { return -Infinity; }
        }
  // we are changing getterName to balance due to 'const balance'
        
        assert.equal(new YourAccount().yourMoney, -Infinity);
      });
      it('a dynamic setter name as well', function() {
        const propertyName = 'balance';
        class MyAccount {
          get [propertyName]() { return this.amount; }
          //set propertyName(amount) { this.amount = 23; }
          set [propertyName](amount) { this.amount = 23; }
         // needed to call propertyName by adding [ ] 
        }
        const account = new MyAccount();
        account.balance = 42;
        assert.equal(account.balance, 23);
      });
    });
  });
  
  