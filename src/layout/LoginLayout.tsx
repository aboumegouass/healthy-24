//import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

function LoginLayout() {
    return (
        <>
            <Notifications />
            <div className="bg-slate-100">
                <div className={'bg-white overflow-hidden'}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LoginLayout