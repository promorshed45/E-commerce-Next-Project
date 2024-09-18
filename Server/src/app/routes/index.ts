import { Router } from "express";
import { AuthRoute } from "../modules/auth/auth.route";
import { OrderRoute } from "../modules/order/order.route";
import { ProductRoute } from "../modules/product/product.router";
import { UserRoute } from "../modules/user/user.route";


const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoute,
    },
    {
        path: '/products',
        route: ProductRoute,
    },
    {
        path: '/orders',
        route: OrderRoute,
    },
    {
        path: '/users',
        route: UserRoute,
    },
  
]

moduleRoutes.forEach(route => router.use(route.path, route.route))


export default router;
