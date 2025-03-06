// Auth Route
const express = require("express");
const router = express.Router();
const passport = require("../config/passportConfig.js"); // Import passport setup

router.post("/login", function(req, res, next) {
  passport.authenticate("local", (err, user, info, status) => {
    //does handling based off the returned values from local strategy;
    //info is for returned information added as a third parameter to callback in local strategy
    //status is optional for returned status codes from local strategy as
    if (err) return next(err) //goes to error handler with text of error that occurred in the local strategy

    else {
      req.logIn(user, function() {
        return res.json(user)
      });
    }
  })(req, res, next); // pass in req, res, and next to the passport local strategy function
});

module.exports = router;