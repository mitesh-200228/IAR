const router = require('express').Router();
const DataControllers = require('./controllers/DataControllers');
const DemoControllers = require('./controllers/DemoController');

router.get('/',DemoControllers.Testing);
router.get('/getdata',DataControllers.GetData);
router.post('/senddata',DataControllers.SendData);
router.post('/editdata',DataControllers.EditData);
router.post('/deletedata',DataControllers.DeleteData);
router.post('/deleteall',DataControllers.DeleteData1);

module.exports = router;