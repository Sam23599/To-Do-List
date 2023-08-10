const { render } = require('ejs');
const express = require('express');
const router = express.Router();

// 

// router.use('/', require('./home'));
router.use('/', async (req, res)=>{
    console.log('We here');
    try {
        const listItems = await toDoList.find({});
        return res.render('home', {
            title: "To DO List",
            List: listItems
        })
    } catch (err) {
        console.log('Error in fetching data from database');
        return res.redirect('back');
    }
})


module.exports = router;
