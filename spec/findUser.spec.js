const User = require('../database/models/user');
const buildDb = require('../database/buildData');

describe('User Model', () => {

  // Functionality to Be Implemented Before Each Test

  beforeEach(async (done) => {
    await buildDb();
    done();

  });

  it('Find Users', async (done) => {
    const users = await User.find();
    expect(users).toBeDefined();
    expect(users[0].name).toEqual('khuloud');
    done();
  });

  it('Find User; Find User By Id', async (done) => {
    const user = await User.findOne({ name: 'khuloud' });
    const id = user._id;
    const selectedUser = await User.findById(id);
    expect(selectedUser).not.toBeNull();
    done();
  })

  // Functionality to Be Implemented After Tests Finish

})