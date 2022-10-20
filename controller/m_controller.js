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

const contact =  (req,res) =>{
    console.log(req.body)
    try {
        const transporter =  nodemailer.createTransport({
            host: "smtp.google.com",
            secure: true,
            port: 587,
            auth:{
                user: '',
                pass: ''
            },
        });

        const mailOptions = {
            from: req.body.email,
            to: "",
            text: req.body.message
        }

        transporter.sendMail(mailOptions, (err,info) =>{
            if (err) {
                console.log(err)
            } else {
                console.log('Email sent: ' + info.response)
            }
        });

    } catch (error) {
        res.status(500).send('<h3>Something went wrong, please tryagain later..</h3>')
    }
}


module.exports = {
    homePage,
    aboutPage,
    contactPage,
    contact
}