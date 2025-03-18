const Web3 = require('web3');
const { abi, evm } = require('../../smart-contracts/build/EHR.json'); // Adjust the path as necessary

let web3;
let contract;

const initWeb3 = (providerUrl) => {
    web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
};

const deployContract = async (fromAddress) => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object })
        .send({ gas: '1000000', from: fromAddress });
    contract = result;
    return contract.options.address;
};

const getContractInstance = (contractAddress) => {
    return new web3.eth.Contract(abi, contractAddress);
};

const getPatientRecord = async (patientId) => {
    return await contract.methods.getPatientRecord(patientId).call();
};

const addPatientRecord = async (patientId, recordData, fromAddress) => {
    return await contract.methods.addPatientRecord(patientId, recordData).send({ from: fromAddress });
};

module.exports = {
    initWeb3,
    deployContract,
    getContractInstance,
    getPatientRecord,
    addPatientRecord,
};