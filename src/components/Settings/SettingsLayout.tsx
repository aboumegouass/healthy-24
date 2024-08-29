import SettingsSidebar from './SettingsSidebar'
import { Outlet } from 'react-router-dom'

function SettingsLayout() {
    return (
        <div className="overflow-hidden bg-white border border-gray-300 rounded-s-xl">
            <div className={'flex max-md:flex-col'}>
                <div className={`w-64 h-[calc(100vh-66px)]`}>
                    <SettingsSidebar />
                </div>
                <div className={`w-[calc(100%-256px)] max-md:w-full`}>
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsLayout