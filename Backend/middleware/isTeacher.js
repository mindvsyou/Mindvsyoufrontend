const isTeacher = (req, res, next) => {
  if (!req.user || req.user.role.toLowerCase() !== "teacher") {
    return res.status(403).json({ message: "Teacher access only" });
  }
  next();
};

export default isTeacher;