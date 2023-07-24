import { LoginPage } from "../../pages/auth/login/ui/LoginPage"
import { RegistrationPage } from "../../pages/auth/registration/ui/RegistrationPage"
import { CartPage } from "../../pages/cart/ui/CartPage"
import { CatalogPage } from "../../pages/catalog/ui/CatalogPage"

import config from "./config"


export default [
    {path: config.catalog, element: <CatalogPage />},
    {path: config.cart, element: <CartPage />},
    {path: config.login, element: <LoginPage />},
    {path: config.registration, element: <RegistrationPage />},
    {path: config.missing, element: <CatalogPage/>},
]