import { Icon } from "@iconify/react"
import { Badge, Button } from "@mantine/core"
import { t } from "i18next"
import { useNavigate } from "react-router-dom"

function ProfileCard() {
    const navigate = useNavigate()
    return (
        <div className='overflow-hidden border my-2 max-sm:mx-2 border-gray-200' style={{ borderRadius: 12 }}>
            <div className='h-56'>
                <img className='object-cover w-full h-full' src='https://rocketexpansion.com/wp-content/uploads/2023/10/Back-cover-of-a-book.jpg' alt='profile picture' />
            </div>
            <div className='flex gap-4 max-sm:flex-col h-44 max-sm:h-auto p-4'>
                <div className="w-32 -mt-20">
                    <img className="w-28 h-28 border-4 border-white" style={{ borderRadius: 100 }} src="https://preview.redd.it/youtube-avatar-advice-v0-nzyfuumjlkjb1.png?width=640&crop=smart&auto=webp&s=58f4301e4bb70d8037467bad72a80c88d5565563" alt="" />
                </div>
                <div className="w-[calc(100%-128px)] max-sm:w-full">
                    <div className="flex justify-between gap-3 items-center">
                        <h2 className="text-[#1f274e] text-xl font-semibold">Dr. Taylor gomez</h2>
                        <Button
                            variant="outline"
                            color="blue"
                            className="flex gap-2 items-center"
                            size="sm"
                            onClick={() => navigate('/profile/edit')}
                        >
                            <Icon className="w-5 h-5" icon={`mage:edit-pen`} /> <span className="max-sm:hidden">{t("Edit Profile")}</span>
                        </Button>
                    </div>
                    <h2 className="text-[#828388] my-3 text-sm font-light">Specialist of skin surgery in Moustafa bacha</h2>
                    <div>
                        <Badge
                            size="lg"
                            color="#192252"
                            bg={'#EFF3FA'}
                            variant="outline"
                            className="py-4 border-0"
                            leftSection={<Icon className="w-5 h-5" icon={'tdesign:location'} />}
                        >
                            Alger, Algeria
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard