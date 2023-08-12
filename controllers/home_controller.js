const toDoList = require('../models/toDoList');

module.exports.homePage = async function(req, res){

    try {
        const listItems = await toDoList.find({});
        return res.render('home', {
            title: "To DO List",
            List: listItems
        })
    } catch (err) {
        console.log('Error in fetching data from database', err);
        return res.redirect('back');
    }
}
