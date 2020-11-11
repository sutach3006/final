const express = require( 'express'); 
const router = express. Router();
const data = require('../data')



router.get('/',(req,res)=>{
    res.render('index');
});

/*router.get('/',(req, res )=>{
res.send( "<h1>My Portfolio</h1>");
});*/
router.get('/portfolio/about', (req, res )=>{
    res.render('about',{data});
});

router.get('/portfolio/contact', (req, res )=>{
    res.render('contact',{data});
});

router.get('/portfolio/skill', (req,res )=>{
    res.render('skill',{data});
});

router.get('/portfolio/education', (req,res )=>{
    res.render('education',{data});
});



module.exports = router;
