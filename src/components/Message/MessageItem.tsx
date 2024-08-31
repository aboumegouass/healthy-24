
function MessageItem({ item }: { item: Message }) {
    if (item.sender)
        return (
            <div className="w-2/3 max-sm:w-full my-4">
                <div className="flex gap-2">
                    <div>
                        <img className="w-10 h-10" style={{ borderRadius: 100 }} src="https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
                    </div>
                    <div className="w-[calc(100%-40px)]">
                        <div className="bg-[#EFF3FA] p-4" style={{ borderRadius: '0 10px 10px 10px' }}>
                            <p className="text-sm text-[#101c30]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis illum? Consectetur, rem soluta! Porro, veritatis laudantium</p>
                        </div>
                        <p className="text-xs mt-1 opacity-80 text-[#101c30]">12:10 PM</p>
                    </div>
                </div>
            </div>
        )
    return (
        <div className="flex flex-row-reverse my-4">
            <div className="w-2/3 max-sm:w-full">
                <div className="gap-2">
                    <div className="bg-[#103F74] p-4" style={{ borderRadius: '10px 0 10px 10px' }}>
                        <p className="text-sm text-[#cdd6e7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facilis illum? Consectetur, rem soluta! Porro, veritatis laudantium</p>
                    </div>
                    <p className="text-xs mt-1 opacity-80 text-[#101c30]">12:10 PM</p>
                </div>
            </div>
        </div>
    )
}

export default MessageItem