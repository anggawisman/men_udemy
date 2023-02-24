const axios = require("axios")
const catchAsync = require('../utils/catchAsync');



exports.testHik = () =>
    async (req, res) => {
        try {
            // var jobDetail = req.body.jobDetail
            // console.log(jobDetail.positionCodePath)
            // var reqCode = new Date
            const callSubmit = await axios.post("http://172.16.1.35:8181/rcms/services/rest/hikRpcService/genAgvSchedulingTask",
                {
                    "reqCode": "request_001vx",
                    "taskCode": "request_001vx",
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
            console.log(callSubmit)
            res.json(callSubmit)
        }
        catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    }
    ;



