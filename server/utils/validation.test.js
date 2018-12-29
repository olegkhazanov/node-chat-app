var expect = require('expect');

var {isRealString} = require('./validation');

describe('validateInput',() =>{
  it('should reject non string values', () =>{
    var text = 121;

    var isReal = isRealString(text);

    expect(isReal).toBe(false);
  });

  it('should reject strings with only spaces', () =>{
    var text = '    ';


    var isReal = isRealString(text);

    expect(isReal).toBe(false);
  });

  it('should allow strings with non-space characters', () =>{
    var text = 'room 1 ';


    var isReal = isRealString(text);

    expect(isReal).toBe(true);
  });
});
