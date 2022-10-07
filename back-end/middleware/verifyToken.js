const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  //access Authorization from req header
  const Authorization = req.header("authorization");
  if (!Authorization) {
    //Error: unauthorized
    const err = new Error("unauthorized");
    err.statusCode = 401;
    return next(err);
  }
  // get token
  const token = Authorization.replace("Bearer ", "");
  //verify token
  const { userId } = jwt.verify(token, process.env.APP_SECRET);
  //assign req
  req.user = { userId };
  next();
};
