'use strict';
module.exports =function (app){
    var green = require('../controllers/greenController');

    //routes
    app.route('/AddDiaryEntry')
        .post(green.AddDairyEntry);

    app.route('/GetAll')
        .get(green.GetAllDiaryEntries);

    app.route('/GetFirst')
        .get(green.GetFirstEntry);

    app.route('/GetLast')
        .get(green.GetLastEntry);
    
    app.route('/GetBetweenDates')
        .get(green.GetEntryBetweenDates);

};