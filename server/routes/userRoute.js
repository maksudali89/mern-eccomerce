import {Router} from 'express';
import {HandlerForCreateUserAccount,handlerForLoginUser,HandlerForAuthMiddlerWare,HandlerForUserLogout} from '../controllers/auth/user.js';
  const router =  Router();

router.post('/signup',HandlerForCreateUserAccount);
router.post('/login',handlerForLoginUser);
router.get('/check-auth',HandlerForAuthMiddlerWare,(req,res)=>{
  const user =  req.user;
  // console.log(user); 
  res.status(200).json({success:true,message:"Authenticated User",user})
});



export default router ;