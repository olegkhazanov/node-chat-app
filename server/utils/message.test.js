var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',() =>{
  it('should generate correct message object', () =>{
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});


describe('generateLocationMessage',() =>{
  it('should generate correct location url message object', () =>{
    var from = 'Jen';
    var latitude = '1';
    var longitude = '1'
    var url = 'https://www.google.com/maps?q=1,1';

    var message = generateLocationMessage(from, latitude, longitude);
    //console.log(message.createdAt);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
});
