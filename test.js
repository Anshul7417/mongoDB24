const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/anshuldb');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'knaknkanr' });
kitty.save().then(() => console.log('meow'));