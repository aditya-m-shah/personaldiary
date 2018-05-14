'use strict';

var Sentiment = require('sentiment');
var sentiment = new Sentiment();

var mongoose = require('mongoose'),
    PersonalDiary = mongoose.model('Diary');

//Posts a new entry
exports.AddDairyEntry = (req, res) => {
   let new_PersonalDiary = new PersonalDiary(req.body);
   console.log(req);
   new_PersonalDiary.save(function(err, Diary) {
     if (err)
       res.send(err);
     res.json(Diary);
   });
   //res.json(sentiment.analyze(req.query.Data));
}

//Gets all entries
exports.GetAllDiaryEntries = (req, res, next) => {
    PersonalDiary.find({}, (err, Diarys) => {
        if(err) res.send(err);
        res.json(Diarys);
    });
}

//Gets the last entry
exports.GetLastEntry = (req, res, next) => {
    PersonalDiary.find({}, (err, Diary) => {
        if(err) res.send(err);
        res.json(Diary);
    }).sort({_id:-1}).limit(1);    
}

//Gets all entries between the dates specified.
exports.GetEntryBetweenDates = (req, res, next) => {
    PersonalDiary.find({}, (err, Diarys) => {
        if(err) res.send(err);
        res.jso
    });
}
