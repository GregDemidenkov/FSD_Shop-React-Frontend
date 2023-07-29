import { LoginPage } from "@pages/login"
import { RegistrationPage } from "@pages/registration"
import { CartPage } from "@pages/cart"
import { CatalogPage } from "@pages/catalog"

import config from "@shared/routes/config"


export default [
    {path: config.catalog, element: <CatalogPage />},
    {path: config.cart, element: <CartPage />},
    {path: config.login, element: <LoginPage />},
    {path: config.registration, element: <RegistrationPage />},
    {path: config.missing, element: <CatalogPage/>},
]