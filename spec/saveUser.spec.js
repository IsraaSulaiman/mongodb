const buildDb = require('../database/buildData')

const Poem = require('../database/models/poems');
const User = require('../database/models/user');

describe('Saving Records to Mongodb', () => {

  // Functionality to Be Implemented Before Each Test

  beforeEach(async (done) => {
    await buildDb();
    done();
  });

  it('Saving a Poem', async (done) => {

    // Created a new Poem Instance

    const newPoem = new Poem({
      title: 'Hope',
      pages: 1,
    });

    // Save This new Record

    const savedPoem = await newPoem.save();
    expect(savedPoem.title).toEqual('Hope');
    done();
  });

  it('Save New User', async (done) => {

    const newUser = new User({
      name: 'Seham',
      age: 57,
      nickname: 'Sahouma',
      babyName: 'israa',
      email: 'seham@gmail.com',
      password: '123456',
    });

    const savedUser = await newUser.save();
    expect(savedUser.babyName).toBe('israa');
    done();
  });

})