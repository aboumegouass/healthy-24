import { useTranslation } from 'react-i18next'
import { formatCurrencyDZD } from '../../../utils/formats'
import { Icon } from '@iconify/react'
import { Skeleton } from '@mantine/core'

type CompsProps = {
    title: string
    isLoading?: boolean
    icon?: string
    value: number | string
    rotatedText?: string | null
    rotatedTextBgcolor?: string
    currencySymbole?: string
    type?: 'number' | 'currency'
}
function ItemCard({
    title,
    value,
    type = 'number',
    currencySymbole = 'DA',
    icon,
    rotatedText,
    isLoading = false,
    rotatedTextBgcolor = '#494770'
}: CompsProps) {
    const { t } = useTranslation()
    const renderValue = type == 'currency' ? formatCurrencyDZD(Number(value)) : value
    const renderCurrencySymbole = type == 'currency' ? currencySymbole : ''
    const isCurentPeriod = true
    const thisPerdiodText = "since current perdiod"
    const lastPerdiodText = "since last perdiod"
    const rendertext = isCurentPeriod ? thisPerdiodText : lastPerdiodText
    const renderAveragePercentage = () => {
        const averagePercentage = Number((Number(value) / 100).toFixed(2))
        if (averagePercentage > 2) {
            return <p className='flex items-center gap-1 text-xs font-normal'>
                <span className='flex items-center gap-0.5 font-bold text-green-700'><Icon icon={`solar:arrow-right-up-line-duotone`} className='w-4 h-4' /> <span className={`font-semibold`}></span>12%</span> {rendertext}
            </p>
        } else {
            return <p className='flex items-center gap-1 text-xs font-normal'>
                <span className='flex items-center gap-0.5 font-bold text-red-700'><Icon icon={`solar:arrow-left-down-line-duotone`} className='w-4 h-4' /> <span className={`font-semibold`}></span>12%</span> {rendertext}
            </p>
        }
    }
    if (isLoading)
        return <div className="relative h-32 p-4 overflow-hidden bg-white border rounded-md shadow-md dark:bg-slate-800 border-slate-200">
            <Skeleton h={15} w={'40%'} />
            <Skeleton h={22} className='mt-4' w={'70%'} />
            <Skeleton h={13} className='mt-2' />
        </div>
    return (
        <div className="relative h-32 p-3 overflow-hidden bg-white border rounded-md shadow-md dark:bg-slate-800 border-slate-200">
            {rotatedText && <div style={{ backgroundColor: rotatedTextBgcolor }} className={`absolute flex items-center justify-center p-3 py-2 text-xs text-white rotate-45 w-52 -right-16 top-6   `}>{rotatedText}</div>}
            <h3 className='flex items-center gap-1 mb-4 text-xs font-semibold uppercase opacity-75'>
                {icon && <Icon icon={icon} className='w-5 h-5' />} {t(title)}
            </h3>
            <h1 className='text-lg font-extrabold'>{renderValue} {renderCurrencySymbole}</h1>
            {renderAveragePercentage()}
        </div>
    )
}

export default ItemCard