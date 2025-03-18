const express = require('express');
const router = express.Router();
const ehrController = require('../controllers/ehrController');

// Route to get patient records
router.get('/:patientId/records', ehrController.getPatientRecords);

// Route to create a new patient record
router.post('/:patientId/records', ehrController.createPatientRecord);

// Route to update a patient record
router.put('/:patientId/records/:recordId', ehrController.updatePatientRecord);

// Route to delete a patient record
router.delete('/:patientId/records/:recordId', ehrController.deletePatientRecord);

module.exports = router;