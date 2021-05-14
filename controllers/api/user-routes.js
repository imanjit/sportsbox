const { User } = require('../../models');
const router = require('express').Router();


//this creates a new user 
router.post('/',async (req,res) => {
    try {
        const dbUserData = await User.create({
            email: req.body.email,
            password: req.body.password,
        });
//once a user is created it saves them and logs them in
        req.session.save(() => {
            req.session.loggedIn = true;
            
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }   
});

//login 
router.post('/login', async (req,res) =>{
    try {
        const dbUserData = await User.findOne({
            where: {
                email:req.body.email,
            },
        });

        if(!dbUserData) {
            res.status(400).json({ message:'Incorrect email or password. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({user:dbUserData, message:'Welcome to sportsbox'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//this destroys the session the user was logged in as
router.post('/logout',(req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy();
    } else {
        res.status(404).end();
    };
    res.status(200).render('homepage');
});

module.exports = router;