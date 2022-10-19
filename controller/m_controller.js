const nodemailer = require('nodemailer');

const homePage = (req,res) =>{
    try {
        return res.status(200).render("home")
    } catch (error) {
        res.status(500).send('<h2>Something went wrong, Please try again.</h2>')   
    }
}

const aboutPage =  (req,res) =>{
    try {
        return res.status(200).render("about")
    } catch (error) {
        res.status(500).send('<h2>Something went wrong, Please try again.</h2>')
    }
}

const contactPage = (req,res) =>{
    try{
        return res.status(200).render('contact')
    }catch(error){
        res.status(500).send('<h2>Something went wrong, Please try again.</h2>')
    }
}

const contact = (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    homePage,
    aboutPage,
    contactPage,
    contact
}