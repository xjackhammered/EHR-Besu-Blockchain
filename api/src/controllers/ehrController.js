const express = require('express');
const router = express.Router();
const blockchainUtils = require('../utils/blockchain');

// Endpoint to create a new EHR record
router.post('/ehr', async (req, res) => {
    try {
        const { patientId, doctorId, recordData } = req.body;
        const transactionHash = await blockchainUtils.createEHR(patientId, doctorId, recordData);
        res.status(201).json({ transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to retrieve an EHR record
router.get('/ehr/:patientId', async (req, res) => {
    try {
        const { patientId } = req.params;
        const ehrRecord = await blockchainUtils.getEHR(patientId);
        res.status(200).json(ehrRecord);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to update an EHR record
router.put('/ehr/:patientId', async (req, res) => {
    try {
        const { patientId } = req.params;
        const { doctorId, recordData } = req.body;
        const transactionHash = await blockchainUtils.updateEHR(patientId, doctorId, recordData);
        res.status(200).json({ transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to delete an EHR record
router.delete('/ehr/:patientId', async (req, res) => {
    try {
        const { patientId } = req.params;
        const transactionHash = await blockchainUtils.deleteEHR(patientId);
        res.status(200).json({ transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;