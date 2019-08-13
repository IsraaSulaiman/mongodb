const User = require('../database/models/user');
const buildDb = require('../database/buildData');

describe('User Model', () => {

  // Functionality to Be Implemented Before Each Test

  beforeEach(async (done) => {
    await buildDb();
    done();

  });

  it('Adding User', async (done) => {
    const newUser = {
      name: 'Belal',
      nickname: 'Bulbul',
      email: 'belal@gmail.com',
      password: '123456',
    }
    const insertedUser = await User.insertMany([newUser]);
    expect(insertedUser).toBeDefined();
    done();
  });

  // Functionality to Be Implemented After Tests Finish

})