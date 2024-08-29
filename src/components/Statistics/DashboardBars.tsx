import HeaderTitle from '../HeaderTitle';
import { AreaChart, BarChart } from '@mantine/charts';

function DashboardBars() {
    const data = [
        {
            date: '01',
            facturedSale: 10,
        },
        {
            date: '02',
            facturedSale: 50,
        },
        {
            date: '03',
            facturedSale: 19
        },
        {
            date: '04',
            facturedSale: 30,
        },
        {
            date: '05',
            facturedSale: 43,
        },
        {
            date: '06',
            facturedSale: 3,
        },
        {
            date: '07',
            facturedSale: 12,
        },
    ];
    return (
        <div className="p-3 bg-white dark:bg-slate-800">
            <div className='p-5 border border-gray-200 rounded-lg'>
                <div className="mb-4">
                    <HeaderTitle
                        size='xs'
                        bordered={false}
                        uppercase
                        title="Visits This month"
                    />
                </div>
                <BarChart
                    h={377}
                    data={data}
                    barProps={{ radius: 6 }}
                    dataKey="date"
                    classNames={{
                        bar: 'w-2',
                        tooltipItemData: 'text-xs font-semibold'
                    }}
                    series={[
                        { name: 'facturedSale', color: '#0F5B74' },
                    ]}
                />
            </div>
        </div>
    )
}

export default DashboardBars