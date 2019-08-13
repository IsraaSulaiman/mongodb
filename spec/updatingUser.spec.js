const buildDb = require('../database/buildData')

const User = require('../database/models/user');

describe('Updating Record', () => {

  let userId;

  // Functionality to Be Implemented Before Each Test

  beforeEach(async (done) => {
    await buildDb();

    // Add User For Testing

    const newUser = new User({
      name: 'Samah',
      age: 31,
      email: 'samah@gmail.com',
      babyName: 'Leen',
      password: '123456',
    });

    const savedUser = await newUser.save();
    userId = savedUser._id;
    done();
  });

  it('Upadate a user if exists', async (done) => {

    // Upadate a User
    const thisUser = await User.findOneAndUpdate({ _id: userId }, {
      $set: {
        name: 'Samah Sulaiman',
        babyName: 'Aya',
      }
    });
    
    expect(thisUser).toBeDefined();

    const updatedUser = await User.findOne({ _id: userId });

    expect(updatedUser.name).toEqual('Samah Sulaiman');
    expect(updatedUser.babyName).toBe('Aya');
    done();
  });

})