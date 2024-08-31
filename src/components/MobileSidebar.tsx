import { sidebarMenu } from "../lib/menu";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

type CompsProps = {
    showMenu: boolean
    setShowMenu: (showMenu: boolean) => void
}

function MobileSidebar({ showMenu, setShowMenu }: CompsProps) {
    const { t } = useTranslation()
    const location = useLocation();
    return (
        <div className={`p-2 bg-white fixed z-[900] left-0 right-0 bottom-0 top-[76px]`}>
            {sidebarMenu.map((elm) => (
                <Link
                    key={elm.id}
                    to={elm.href}
                    style={{
                        borderRadius: 8
                    }}
                    onClick={() => setShowMenu(false)}
                    className={`rounded-lg text-sm flex items-center gap-2 p-4 ${elm.href == location.pathname ? "font-bold bg-[#EFF3FA] opacity-100 text-[#192252]" : "opacity-75"}`}
                    color={elm.href == location.pathname ? "dark" : ""}
                >
                    <Icon icon={elm.icon} className="w-5 h-5" /> {t(elm.label)}
                </Link>
            ))}
        </div>
    )
}

export default MobileSidebar