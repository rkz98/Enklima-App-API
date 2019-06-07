const express = require('express');
const router = express.Router();
const controller = require('../controllers/reportsController')

router.post('/', controller.createReport);
router.get('/get-report', controller.getReport);
router.get('/get-reports-status', controller.getAllReportsByStatus);
router.put('/update-report-status', controller.updateReportStatus);
router.delete('/delete-report', controller.deleteReport)

module.exports = router;