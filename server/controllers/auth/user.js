import "dotenv/config";
import User from "../../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export async function HandlerForCreateUserAccount(req, res) {
  const { name, email, password } = await req.body;
  const exitsUser = await User.findOne({ email });
  if (exitsUser) {
    res.json({ success: false, message: "this email already exits" });
  } else {
    const hashPassword = await bcryptjs.hash(password, 12);
    console.log(hashPassword);
    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({
      success: true,
      message: "user registration successfully",
      user: user,
    });
  }
}

export async function handlerForLoginUser(req, res) {
  const { email, password } = req.body;
  // console.log(password);
  const user = await User.findOne({ email });
  // console.log(user)
  if (user) {
    bcryptjs.compare(password, user.password, async (err, result) => {
      if (err) throw err;
      // console.log(result);
      if (result) {
        const token = jwt.sign(
          { email: user.email, role: user.role, id: user._id },
          process.env.CLIENT_SECRET_KEY,
          { expiresIn: "60m" }
        );
        res.cookie("token", token, { httpOnly: true, secure: false }).json({
          success: true,
          message: "user Logged In Successfully",
          token: token,
          user: {
            email: user.email,
            role: user.role,
            id: user._id,
          },
        });
      } else {
        res.json({ success: false, message: "InValid Password" });
      }
    });
  } else {
    res.json({ success: false, message: "InValid User" });
  }
}

export async function HandlerForAuthMiddlerWare(req, res, next) {
  const token = await req.cookies?.token;
  // console.log(token)
  try {
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthrorised User" });
    }
    const decodedToken = jwt.verify(token, process.env.CLIENT_SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({
        success: false,
        message: "Invalid or Expired Token",
        error: error.message,
      });
  }
}

export async function HandlerForUserLogout(req, res) {
  return res
    .clearCookie("token")
    .json({ success: true, message: "User LogOut Successfully" });
}
