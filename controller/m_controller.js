const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const homePage = (req,res) =>{
    try {
        return res.status(200).render("home")
    } catch (error) {
        return res.status(500).send('<h2>Something went wrong, Please try again.</h2>')   
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

const contact =  async(req,res) =>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: 'dubemernest23@gmail.com', // Change to your recipient
        from: 'dubyernest14@gmail.com', // Change to your verified sender
        subject: `Email from ${req.body.email}`,
        text: req.body.message,
    }
    

    try {
        await sgMail.send(msg);
        res.json({success:true, msg})
        console.log(msg)
    } catch (error) {
        console.log(error)
        if(error.response){
            console.error(error.response.body)
        }
    }
}


module.exports = {
    homePage,
    aboutPage,
    contactPage,
    contact
}