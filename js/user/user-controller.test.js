const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add user to userController', () => {    
    let user = new User(12345,"fernando", "fernando@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

  test('remove user to userController', () => {    
    let user = new User(123456,"Juan", "juan@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('Encuentra por email', () => {
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

test('Encuentra por id', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(1234)).toEqual(user);
});


