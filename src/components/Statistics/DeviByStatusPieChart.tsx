import { PieChart } from '@mantine/charts'
import HeaderTitle from '../HeaderTitle';
import { Badge } from '@mantine/core';
import { formatCurrencyDZD } from '../../utils/formats';

function DeviByStatusPieChart() {
    const data = [
        { name: 'Proforma facture', value: 4560, color: '#2C8953' },
        { name: 'Reception voucher', value: 6000, color: '#494770' },
        { name: 'Road bill', value: 3000, color: '#d61b10' },
        { name: 'Other', value: 2000, color: 'gray.8' },
    ];
    return (
        <div className="relative p-3 overflow-hidden bg-white border rounded-md shadow-md dark:bg-slate-800 border-slate-200">
            <div className="mb-4">
                <HeaderTitle
                    size='xs'
                    bordered={false}
                    uppercase
                    title="Document by status"
                />
            </div>
            <div className='flex justify-center w-full'>
                <PieChart
                    withLabels
                    labelsType='percent'
                    labelsPosition='inside'
                    tooltipDataSource="segment"
                    withTooltip
                    size={222}
                    data={data}
                    tooltipAnimationDuration={10000}
                    strokeWidth={1}
                />
            </div>
            <div className='grid grid-cols-2 gap-4 pt-4 mt-4 border-t border-t-slate-100'>
                {data?.map((ele) => (
                    <div className='flex gap-2'>
                        <Badge color={ele.color} />
                        <div className='flex flex-col gap-1'>
                            <span className='text-xs'>{ele.name} </span>
                            <span className='text-xs font-semibold'>{formatCurrencyDZD(ele.value)} DA</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DeviByStatusPieChart