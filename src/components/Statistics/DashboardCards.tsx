import ItemCard from './Cards/ItemCard'

function DashboardCards() {
    return (
        <div className="grid grid-cols-4 gap-4 mt-3 max-sm:grid-cols-1">
            <div>
                <ItemCard
                    rotatedText="New"
                    title="Documents"
                    icon='solar:document-bold-duotone'
                    value="100"
                />
            </div>
            <div>
                <ItemCard
                    title="Turnovers"
                    value="148450000"
                    icon='solar:money-bag-bold-duotone'
                    type="currency"
                />
            </div>
            <div>
                <ItemCard
                    title="Orders"
                    icon='solar:box-bold-duotone'
                    value="980"
                />
            </div>
            <div>
                <ItemCard
                    title="Delivery"
                    value="720000"
                    icon='solar:delivery-bold-duotone'
                    rotatedText={"Closed"}
                    rotatedTextBgcolor='#C73232'
                    type="currency"
                />
            </div>
        </div>
    )
}

export default DashboardCards