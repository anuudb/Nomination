const express = require('express');
const router = express.Router();
import {UserService} from 'Service';

router.post('/data_new', (req, res) => {
    console.log("----------------------------Anushka: ", req.body.nic);
    res.send('Supun');
    return UserService.addDataCandidates(req).then((result) => {
        if(result instanceof Error)
          next(result);
        else
          res.json(result);
});

module.exports = router;