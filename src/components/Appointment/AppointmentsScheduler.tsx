import { Scheduler } from "@aldabil/react-scheduler";

function AppointmentsScheduler() {
    return (
        <div>
            <Scheduler
                events={[
                    {
                        event_id: 1,
                        title: "Event 1",
                        start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
                        end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
                        disabled: true,
                        admin_id: [1, 2, 3, 4],
                    },
                    {
                        event_id: 2,
                        title: "Event 2",
                        start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
                        end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
                        admin_id: 2,
                        color: "#50b500",
                    },
                    {
                        event_id: 3,
                        title: "Event 3",
                        start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
                        end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
                        admin_id: 1,
                        editable: false,
                        deletable: false,
                    },
                ]}
                disableViewer
                onEventClick={() => {
                    console.log("onEventClick");
                }}
                view="month"
            />
        </div>
    )
}

export default AppointmentsScheduler