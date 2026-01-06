const isTeacher = () => {
  return localStorage.getItem("role") === "teacher";
};

export default isTeacher;
