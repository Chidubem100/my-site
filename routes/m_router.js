const express = require('express');
const {
    homePage,
    contactPage,
    aboutPage,
    contact
} = require('../controller/m_controller');

const router = express.Router();

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/contact', contactPage)
router.post('/contact', contact)




module.exports = router;