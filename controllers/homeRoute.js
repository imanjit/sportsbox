const router = require('express').Router();
// const { User } = require('../../models');
const scripts = [
    {script1: 'https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/js/bulma-carousel.min.js'},
    {script2: 'https://code.jquery.com/jquery-3.5.1.min.js'},
]
const styles = [
    {carousel: 'https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css'}
]

router.get('/', async (req, res) => {
    res.render('homepage', { styles: styles, scripts: scripts })
});





module.exports = router;