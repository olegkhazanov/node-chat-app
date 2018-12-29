const expect = require('expect');

const {Users} = require('./users');

describe('Users', () =>{

  beforeEach(() =>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Oleg',
      room: 'Room1'
    },{
      id: '2',
      name: 'Mike',
      room: 'Room2'
    },{
      id: '3',
      name: 'John',
      room: 'Room1'
    }
  ]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Oleg',
      room: 'Super chat room'
    };

    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should get user list', () =>{
    var locUsers = users.getUserList('Room1');
    expect(locUsers).toEqual(['Oleg','John']);
  });

  it('should get user list', () =>{
    var locUsers = users.getUserList('Room2');
    expect(locUsers).toEqual(['Mike']);
  });

  it('should find user', () =>{
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find user', () =>{
    var userId = '5';
    var user = users.getUser(userId);
    expect(user).toBe(undefined);
  });

  it('should remove user', () =>{
    var user = {
      id: '1',
      name: 'Oleg',
      room: 'Room1'
    };
    var userLoc = users.removeUser(user.id);
    expect(userLoc).toEqual(user);
    expect(users.users.length).toBe(2);
  });

  it('should not find user', () =>{
    var user = {
      id: '1',
      name: 'Oleg',
      room: 'Room1'
    };
    var userLoc = users.getUser('5');
    expect(userLoc).toBe(undefined);
    expect(users.users.length).toBe(3);
  });
});
