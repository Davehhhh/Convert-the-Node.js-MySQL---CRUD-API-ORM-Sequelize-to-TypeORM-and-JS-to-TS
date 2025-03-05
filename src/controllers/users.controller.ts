import { Request, Response, Router } from "express";
import { UserService } from "../services/user.services";

const router = Router();
const userService = new UserService();

router.get("/", async (req: Request, res: Response) => {
    const users = await userService.getAll();
    res.json(users);
});

export default router;
