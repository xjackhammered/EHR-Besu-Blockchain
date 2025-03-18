const express = require('express');
const router = express.Router();
const ehrController = require('../controllers/ehrController');

// Route to get all doctors
router.get('/', ehrController.getAllDoctors);

// Route to get a specific doctor by ID
router.get('/:id', ehrController.getDoctorById);

// Route to create a new doctor
router.post('/', ehrController.createDoctor);

// Route to update a doctor's information
router.put('/:id', ehrController.updateDoctor);

// Route to delete a doctor
router.delete('/:id', ehrController.deleteDoctor);

module.exports = router;