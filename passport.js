const passportFacebook = require('passport-facebook')
const passport = require('passport')
const FACEBOOK_CLIENT_ID = "832465234401241"
const FACEBOOK_CLIENT_SECRET = "927f5f2f01404c7d9d0e84769f5637de"

const FacebookStrategy = passportFacebook.Strategy
passport.use(new FacebookStrategy({
  clientID: '832465234401241',
  clientSecret: '927f5f2f01404c7d9d0e84769f5637de',
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'photos', 'birthday','gender']
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile)
}
));
passport.deserializeUser((user,done)=>{
  done(null,user)
})
passport.serializeUser((user,done)=>{
  done(null,user)
})
