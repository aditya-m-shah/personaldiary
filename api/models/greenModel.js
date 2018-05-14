
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiarySchema = new Schema({
    JournalEntry: {
        type: String,
        required: 'Kindly enter a phrase to analyze'
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Diary', DiarySchema);
