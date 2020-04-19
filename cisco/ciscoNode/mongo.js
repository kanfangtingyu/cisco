const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const srSchema = new Schema({
    name: {
        type: String
    },
    time: {
        type: String
    },
    color: {
        type: String
    },
    head: {
        type: String
    },
    end: {
        type: String
    },
    endIP: {
        type: String
    },
    adType: {
        type: String
    },
    adAtt: {
        type: String
    },
    otherAd: {
        type: Boolean
    },
    adTF: {
        type: Boolean
    },
    allString: {
        type: String
    }
});

module.exports = sr = mongoose.model('sr', srSchema);