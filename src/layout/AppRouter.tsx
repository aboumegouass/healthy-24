import { Routes, Route } from "react-router-dom"
import Home from '../pages/admin'
import LoginPage from '../pages/login'
import AdminLayout from "./AdminLayout"
import LoginLayout from "./LoginLayout"
function AppRouter() {
    return (
        <Routes>
            <Route path="" element={<LoginLayout />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/" element={<AdminLayout />}>
                <Route path={`/home`} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRouter