import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

// type CompsProps = {
//     clickableItem: string
//     setClickableItem: (clickableItem: string) => void
// }
function SettingsSidebar() {
    const { t } = useTranslation()
    const location = useLocation()
    const menu = [
        {
            id: 1,
            label: 'Brands',
            href: '/settings/brands'
        },
        {
            id: 2,
            label: 'Attributes',
            href: '/settings/attributes'
        },
        {
            id: 3,
            label: 'Product types',
            href: '/settings/product-types'
        },
    ]
    return (
        <div className="h-full p-4 bg-slate-50">
            <div className="mb-4">
                <h3 className="text-xs font-bold uppercase opacity-50">{t("Products Settings")}</h3>
            </div>
            <ul>
                {menu.map((e, i) => (
                    <li className="mb-3" key={i}>
                        <Link
                            className={`flex w-full text-sm py-0.5 px-3 border-s-2 hover:opacity-100 hover:border-s-slate-800 ${e.href == location.pathname ? 'opacity-100 font-bold border-s-slate-800' : 'opacity-75 border-s-slate-300'}`}
                            to={e.href}
                        >
                            {t(e.label)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SettingsSidebar