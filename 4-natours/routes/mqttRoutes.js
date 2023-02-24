const express = require('express');
const axios = require("axios")
const mqttController = require('../controllers/mqttController');


const router = express.Router();

router.post('/a', async (req, res) => {
    try {
        // var jobDetail = req.body.jobDetail
        // console.log(jobDetail.positionCodePath)
        const reqCode = new Date
        const callSubmit = await axios.post("http://172.16.1.35:8181/rcms/services/rest/hikRpcService/genAgvSchedulingTask",
            {
                "reqCode": reqCode.toISOString(),
                "taskCode": reqCode.toISOString(),
                "reqTime": "",
                "clientCode": "",
                "tokenCode": "",
                "taskTyp": "testcb",
                "wbCode": "",
                "ctnrCode": "",
                "positionCodePath": [
                    {
                        "positionCode": "011000AA011000",
                        "type": "00"
                    },
                    {
                        "positionCode": "011000AA013000",
                        "type": "00"
                    },
                    {
                        "positionCode": "011000AA012000",
                        "type": "00"
                    }
                ],
                "podCode": "",
                "podDir": "",
                "podType": "",
                "priority": "",
                "agvCode": ""
            }
        )
        console.log(callSubmit.data)
        res.json(callSubmit.data)
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
});

module.exports = router;
