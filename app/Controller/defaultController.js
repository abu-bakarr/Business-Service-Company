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
        // res.json({
        //     confirm: "success",
        //     data: req.body,
        //     msg: "Hello"
        // });

    }

};