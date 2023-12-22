const mongoose = require('mongoose');


// creating url schema to store url data in db.
const UrlSchema = new mongoose.Schema({
    urlId: {
      type: String,
      required: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    }
},
    {
        timestamps:true
    }
);

const Url = mongoose.model('Url',UrlSchema);

// exporting the url schema
module.exports = Url;