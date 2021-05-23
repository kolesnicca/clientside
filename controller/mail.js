const nodeMailer = require('nodemailer')

exports.sendMail = (req, res) => {
    console.log("req body", req.body)
    let userMail = req.body.userEmail
    let userMessage = req.body.message

    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth: {
            user:process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    var message = {
        from: process.env.EMAIL,
        to: userMail,
        subject: "your order",
        text: userMessage
    }

    transporter.sendMail(message,(err,info) => {
        if(err) {
            console.log('error in sending email') 
            return res.stats(500).json({
                message:`error in sending mail ${err}`
            })
        } else {
            console.log('send successfully mail')
            return res.stats(500).json({
                message:info
            })
        }
    })
}