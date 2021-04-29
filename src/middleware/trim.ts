export default (req, res, next) => {
  const expection = ["password"];

  Object.keys(req.body).forEach((key) => {
    if (!expection.includes(key) && typeof req.body[key] === "string") {
      req.body[key] = req.body[key].trim();
    }
  });

  next();
};
