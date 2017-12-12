module.exports = function(app, passport) {
    // route for home page
    app.get('/', function(req, res) {
        res.render('Landing.jsx');
    });

    // route for Photobooth
    app.get('/photobooth', isLoggedIn, function(req, res) {
        res.render('PhotoBooth.jsx');
    });

    // route for profile page
    app.get('/gallery', isLoggedIn, function(req, res) {
        res.render('GalleryPage.jsx', {
            user: req.user
        });
    });

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();
    res.redirect('/');
}

};