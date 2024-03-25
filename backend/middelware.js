const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const autoMiddleware = (req, res, next) => {
  const autoHeader = req.headers.authorization;
  if (!autoHeader || !autoHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = autoHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, JWT_SECRET);

    if (decode.userId) {
      req.userId = decode.userId;
      next();
    } else {
      return res.status(403).json({});
    }
  } catch (error) {
    return res.status(403).json({});
  }
};

module.exports = {
  autoMiddleware,
};
