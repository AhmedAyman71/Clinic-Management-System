import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from '../App';
import Home from '../pages/home/Home';
import Loginn from '../pages/Auth/login';
import Signup from '../pages/Auth/Signup';
import PageNotFound from '../pages/errors/pageNotFound';
import Guest from "../Middleware/Guest";
import AuthRoutes from "../Middleware/AuthRoutes";

export const routes = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/"  element={<App/>}>
        <Route index element={
        <Guest to={"/login"}>
            <Home />
        </Guest>}/>
    </Route>
    <Route path="/login" element={<AuthRoutes to={'/'}>
        <Loginn/>
    </AuthRoutes>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="*" element={<PageNotFound/>}></Route>
    </>
))