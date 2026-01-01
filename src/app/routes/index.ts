import { Router } from "express";
import { studentRoutes } from "../modules/students/student.routes.js";
import { UserRoutes } from "../modules/users/user.route.js";

const router = Router();

const moduleRoutes = [
  {
    path: "/student",
    route: studentRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
