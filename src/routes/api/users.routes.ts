import { Router } from "express";
import * as controllers from "../../controllers/user.controller"


const routes = Router();

routes.route('/').post(controllers.create); 



export default routes;