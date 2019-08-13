const buildDb = require('../database/buildData')
const User = require('../database/models/user');

describe('Deleting Queries', () => {

  let testId;

  // Functionality to Be Implemented Before Each Test

  beforeEach(async (done) => {
    await buildDb();

    // Insert TestUser For Delete Test

    const testUser = new User({
      name: 'Ahmed',
      nickname: 'Hamoud',
      password: '123456',
      email: 'ahmed@gmail.com',
    })

    const savedUser = await testUser.save();
    testId = savedUser._id;
    done();
  });

  it('Removing a user By Id', async (done) => {

    // Remove User By Id

    await User.findByIdAndRemove({ _id: testId });
    const checkUser = await User.findOne({ name: 'Ahmed' });
    expect(checkUser).toBeNull();
    done();
  });

  it('Deleting User', async (done) => {

    // Delete One User 

    await User.deleteOne({ name: 'Ahmed' });
    const IsUserAvailable = await User.findOne({ name: 'Ahmed' });
    expect(IsUserAvailable).toBeNull();
    done();
  });

  it('Deleting User if exists', async (done) => {

    // Delete User if Exists

    await User.findOneAndRemove({ name: 'Ahmed' });
    const StilExists = await User.findOne({ name: 'Ahmed' });
    expect(StilExists).toBeNull();
    done();
    
  });

});