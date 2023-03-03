import { createBrowserRouter, redirect } from "react-router-dom"
import LoginSection from "../views/Login"
import RegisterSection from "../views/Register"
import HomeSection from "../views/Home"
const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginSection />,
        loader: () => {
            if (localStorage.getItem("acess_Token")) {
                return redirect("/")
            }
            else{
                return null
            }
        }
    },
    {
        path: "/register",
        element: <RegisterSection />,
        loader: () => {
            if (localStorage.getItem("acess_Token")) {
                return redirect("/")
            }
            else{
                return null
            }
        }
    },
    {
        path: "/",
        element: <HomeSection />,
        loader: () => {
            if (!localStorage.getItem("acess_Token")) {
                return redirect("/login")
            }
            else{
                return null
            }
        }
    }
])
export default router