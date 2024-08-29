//import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

function LoginLayout() {
    return (
        <>
            <Notifications />
            <div className="bg-slate-100 flex-col h-[100vh] flex items-center justify-center">
                <div className={'w-[680px] mx-auto bg-white rounded-lg shadow-xl overflow-hidden'}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LoginLayout