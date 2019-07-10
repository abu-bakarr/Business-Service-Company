var nodemailer = require('nodemailer');
var config = require('../data/config.json');

module.exports = {

    me: (req, res) => {
        res.send(`request for ${req.query.name}`);
    },
    name: (req, res) => {
        res.send(`this is name ${req.params.name}`);
    },

    // Do not touch this
    index: (req, res) => {
        res.render('index', {
            pageTitle: "Home Page",
            pageID: "home"
        });
    },

    about: (req, res) => {
        res.render('about', {
            pageTitle: "About Page",
            pageID: "about"
        });
    },
    team: (req, res) => {
        res.render('team', {
            pageTitle: "Our Team Page",
            pageID: "team"
        });
    },
    service: (req, res) => {
        res.render('services', {
            pageTitle: "Service Page",
            pageID: "services"
        });
    },
    sas: (req, res) => {
        res.send("hello from sas ");
    },
    industry: (req, res) => {
        res.render('industry', {
            pageTitle: "Industry Page",
            pageID: "industry"
        });
    },
    client: (req, res) => {
        res.render('client', {
            pageTitle: "Client Page",
            pageID: "client"
        });
    },
    career: (req, res) => {
        res.render('career', {
            pageTitle: "career Page",
            pageID: "career"
        });
    },
    contact: (req, res) => {
        res.render('contact', {
            pageTitle: "Contact Page",
            pageID: "contact"
        });
    },
    contactPost: (req, res) => {
        console.log(req.body);
        const outputData = `
                    <p>You have a new contact message</p>
                    <h3>Contact Details</h3>
                    <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>Email: ${req.body.email}</li>
                        <li>Location: ${req.body.location}</li>
                        <li>Phone: ${req.body.phone}</li>
                    </ul>
                    <h3>Message: ${req.body.message}</h3>
                    `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.email, // generated ethereal user
                pass: config.password // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `"Client" ${req.body.email}`, // sender address
            to: 'info@bsc-sl.ltd', // list of receivers
            subject: 'BSC-VISITOR-CONTACT', // Subject line
            // text: 'Yeah it works', // plain text body
            html: outputData // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });

        res.redirect("/contact"); //redirecting the user
    }

};