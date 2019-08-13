const Poem = require('../../database/models/poems');

module.exports = () => Poem.create({
  title: 'Tyger',
  pages: 12,
});


