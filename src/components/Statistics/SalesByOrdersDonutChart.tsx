import { DonutChart } from '@mantine/charts'
import HeaderTitle from '../HeaderTitle';
import { Badge } from '@mantine/core';
import { formatCurrencyDZD } from '../../utils/formats';

function SalesByOrdersDonutChart() {
    const data = [
        { name: 'USA', value: 400, color: '#2C8953' },
        { name: 'India', value: 300, color: '#494770' },
        { name: 'Japan', value: 300, color: '#d61b10' },
        { name: 'Other', value: 200, color: 'gray.6' },
    ];
    return (
        <div className="relative p-3 overflow-hidden bg-white border rounded-md shadow-md dark:bg-slate-800 border-slate-200">
            <div className="mb-4">
                <HeaderTitle
                    size='xs'
                    bordered={false}
                    uppercase
                    title="Sales by orders"
                />
            </div>
            <div className='flex justify-center w-full'>
                <DonutChart
                    withTooltip
                    size={222}
                    withLabels
                    tooltipDataSource="segment"
                    data={data}
                    strokeWidth={1}
                    thickness={40}
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

export default SalesByOrdersDonutChart