import { Routes, Route } from "react-router-dom"
import Home from '../pages/admin'
import LoginPage from '../pages/login'
import AdminLayout from "./AdminLayout"
import PatientsList from '../pages/patients-list'
import PatientsDetails from '../pages/patients-list/patient'
import MessagesPage from '../pages/messages'
import MessageDetailsPage from '../pages/messages/message'
import MedicalHistoryPage from '../pages/medical-history'
import LoginLayout from "./LoginLayout"
import MessagesLayout from "./MessagesLayout"
function AppRouter() {
    return (
        <Routes>
            <Route path="" element={<LoginLayout />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route path="/" element={<AdminLayout />}>
                <Route path={`/home`} element={<Home />} />
                <Route path={`/patients-list`} element={<PatientsList />} />
                <Route element={<MessagesLayout />}>
                    <Route path={`/messages`} element={<MessagesPage />} />
                    <Route path={`/messages/:id`} element={<MessageDetailsPage />} />
                </Route>
                <Route path={`/medical-history`} element={<MedicalHistoryPage />} />
                <Route path={`/patients-list/:id`} element={<PatientsDetails />} />
            </Route>
        </Routes>
    )
}

export default AppRouter