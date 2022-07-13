const router = require('express').Router();
const passport = require('passport')

const CLIENT_URL = 'https://localhost:3000/'

router.get('/facebook',
  passport.authenticate('facebook'));

router.get('/facebook/callback',
  passport.authenticate('facebook', { 
    // failureRedirect: '/login/failed',
    // successRedirect:CLIENT_URL,
}),
    (req,res)=>{
        router.get('/login/success',(req1,res1)=>{
            const autoLogin = JSON.parse(req1.query.autoLogin)
                res1.status(200).json({
                    message:'successfull',success:true,user:autoLogin?req.user:null
                })
        })
        res.redirect(CLIENT_URL)
    }
);

//   router.get('/login/failed',(req,res)=>{
//     res.status(401).json({message:'failed',success:false})
//   })
  router.get('/logout',(req,res)=>{
    req.logout(function(err){
        if(err) return err;
    });
    res.redirect(CLIENT_URL)
  })

module.exports = router
