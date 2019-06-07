const Report = require('../model/Report')

exports.createReport = (req, res) => {
    const officer_id = req.body.officer_id;
    const report = req.body.report;
    const place = req.body.place;

    new Report({
        'officer_id': officer_id,
        'report': report,
        'place': place,
        'status': 'DISAPPROVED',
        'created_at': new Date
       }).save(function(err, report) {
           if (err) {
               res.json({
                   error: 'Error to create report.'
                });
           } else {
               res.status(201).send(report);
           }
       });
};

exports.getReport = (req, res) => {
    const id = req.param('id')

    Report.findOne({ 'id': id }, function (err, account) {
        if (err) {
            res.json({
                error: 'Error to get report.'
             });
        }
        res.status(200).send(report);
    });

};

exports.getAllReportsByStatus = (req, res) => {
    const status = req.param('status')

    Report.find({ 'status': status }, function (err, report) {
        if (err) {
            res.json({
                error: 'Error to get reports.'
            });
        }
        res.status(200).send(report);
    });

};

exports.updateReportStatus = (req, res) => {
    const status = req.param('status')
    const id = req.param('id')

    Report.updateOne({ '_id': id }, { $set: { 'status': status } } , function (err, report) {
        if (err) {
            res.json({
                error: 'Error to get reports.'
            });
        }
        res.status(200).send(report);
    });

};

exports.deleteReport = (req, res) => {
    const id = req.param('id')

    Report.deleteOne({ '_id': id }, function (err, report) {
        if (err) {
            res.json({
                error: 'Error to get reports.'
            });
        }
        res.status(200).send(report);
    });

};