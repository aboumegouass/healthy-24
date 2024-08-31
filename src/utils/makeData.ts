import { faker } from '@faker-js/faker'
export const generateFakeMedicalHistories = (count: number): MedicalHistory[] => {
    const medicalHistories: MedicalHistory[] = [];
    for (let i = 0; i < count; i++) {
        medicalHistories.push({
            id: faker.number.int(),
            patient: {
                id: faker.number.int(),
                avatar: faker.image.avatar(),
                full_name: faker.person.fullName(),
                code: faker.string.alphanumeric(10),
            },
            appointment: faker.location.street(), // Future date for appointment
            created_at: faker.date.future().toISOString(), // Past date for record creation
            time: faker.date.future().getTime().toString(), // Past date for record creation
            status: faker.helpers.arrayElement(['success', 'pending', 'canceled']),
        });
    }
    return medicalHistories;
}
export const generateFakedAppointments = () => {
    return [
        {
            date: 'Jan 16, 2023',
            data: [
                {
                    id: 1,
                    full_name: 'John Doe',
                    avatar: 'https://www.upwork.com/mc/documents/designelementsavatar2.png',
                    startTime: '09:00 AM',
                    endTime: '09:30 AM',
                    text: 'I have been experiencing frequent headaches for the past week. It\'s becoming unbearable, and I\'m worried.'
                },
                {
                    id: 2,
                    full_name: 'Jane Smith',
                    avatar: 'https://avatars.akamai.steamstatic.com/105dc42f3a01411b908beabf4e01a3376236835e_full.jpg',
                    startTime: '10:00 AM',
                    endTime: '10:30 AM',
                    text: 'I have been feeling dizzy and lightheaded lately. I need to get it checked.'
                },
                {
                    id: 3,
                    full_name: 'Alice Johnson',
                    avatar: 'data:image/jpeg;base64,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',
                    startTime: '11:00 AM',
                    endTime: '11:30 AM',
                    text: 'I have persistent chest pain that won\'t go away. I need a thorough examination.'
                }
            ]
        },
        {
            date: 'Jan 17, 2023',
            data: [
                {
                    id: 4,
                    full_name: 'Michael Brown',
                    avatar: 'https://preview.redd.it/trying-to-come-up-with-a-new-avatar-for-my-various-social-v0-i3kyoe6e1lsb1.jpg?width=519&format=pjpg&auto=webp&s=af4100e59c80d5e8847b64f0ca68fa76e36547e5',
                    startTime: '09:30 AM',
                    endTime: '10:00 AM',
                    text: 'My asthma has been acting up, and I need to refill my prescription.'
                },
                {
                    id: 5,
                    full_name: 'Emily Davis',
                    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/007/278/435/small/gamer-mascot-logo-design-free-vector.jpg',
                    startTime: '10:30 AM',
                    endTime: '11:00 AM',
                    text: 'I have a rash on my arm that is spreading. It\'s very itchy and painful.'
                }
            ]
        },
        {
            date: 'Jan 18, 2023',
            data: [
                {
                    id: 6,
                    full_name: 'Chris Lee',
                    avatar: 'data:image/jpeg;base64,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',
                    startTime: '09:00 AM',
                    endTime: '09:30 AM',
                    text: 'I need to discuss my recent blood test results with a doctor.'
                },
                {
                    id: 7,
                    full_name: 'Anna Wilson',
                    avatar: 'https://preview.redd.it/trying-to-come-up-with-a-new-avatar-for-my-various-social-v0-wby69l6e1lsb1.jpg?width=519&format=pjpg&auto=webp&s=61341c3ce447f8356da3146c1903395fc43d28dc',
                    startTime: '10:00 AM',
                    endTime: '10:30 AM',
                    text: 'I have been having trouble sleeping and would like to get some advice.'
                }
            ]
        },
        {
            date: 'Jan 19, 2023',
            data: [
                {
                    id: 8,
                    full_name: 'David Martinez',
                    avatar: 'https://avatarfiles.alphacoders.com/148/148344.jpg',
                    startTime: '09:00 AM',
                    endTime: '09:30 AM',
                    text: 'I have severe back pain that has been worsening over the past few days.'
                },
                {
                    id: 9,
                    full_name: 'Sophia Taylor',
                    avatar: 'https://i.pinimg.com/236x/df/72/d5/df72d51685e99a265ad186bada408e27.jpg',
                    startTime: '10:00 AM',
                    endTime: '10:30 AM',
                    text: 'I need to follow up on my recent surgery and check the healing process.'
                },
                {
                    id: 10,
                    full_name: 'James Anderson',
                    avatar: 'https://i.pinimg.com/474x/08/27/23/082723ad570164eb39b670dbad5ee92a.jpg',
                    startTime: '11:00 AM',
                    endTime: '11:30 AM',
                    text: 'I have been feeling unusually fatigued and need to get a full checkup.'
                }
            ]
        }
    ]
}
export const generateFakeMessageItems = (count: number): MessageItem[] => {
    const messageItems: MessageItem[] = [
        {
            "id": 4437575490076672,
            "text": "Aveho tergum depono totus animi verto thermae corrigo abstergo.",
            "sender": "Pietro_Pfeffer24@gmail.com",
            "full_name": "Delores Buckridge",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&usqp=CAU",
            "dateTime": "2024-08-31T01:58:34.695Z",
            "unread_messages_count": 9
        },
        {
            "id": 8717263693676544,
            "text": "Temeritas quas officiis vitae agnosco undique.",
            "sender": "Rebecca.Bayer@yahoo.com",
            "full_name": "Jacob Bernhard",
            "avatar": "https://png.pngtree.com/png-clipart/20230930/original/pngtree-friendly-female-avatar-for-website-and-social-network-vector-png-image_12917752.png",
            "dateTime": "2024-08-30T22:13:37.279Z",
            "unread_messages_count": 8
        },
        {
            "id": 6491877083709440,
            "text": "Confero asper curtus cubo expedita averto avaritia.",
            "sender": "Vilma_Denesik76@hotmail.com",
            "full_name": "Darrin Mayer PhD",
            "avatar": "https://preview.redd.it/trying-to-come-up-with-a-new-avatar-for-my-various-social-v0-wby69l6e1lsb1.jpg?width=519&format=pjpg&auto=webp&s=61341c3ce447f8356da3146c1903395fc43d28dc",
            "dateTime": "2024-08-30T11:51:37.129Z",
            "unread_messages_count": 0
        },
        {
            "id": 1552138612244480,
            "text": "Tabesco subiungo villa statim admoneo.",
            "sender": "Virgie3@gmail.com",
            "full_name": "Ray Stiedemann",
            "avatar": "https://preview.redd.it/youtube-avatar-advice-v0-nzyfuumjlkjb1.png?width=640&crop=smart&auto=webp&s=58f4301e4bb70d8037467bad72a80c88d5565563",
            "dateTime": "2024-08-30T18:31:05.965Z",
            "unread_messages_count": 0
        },
        {
            "id": 1121423884025856,
            "text": "Deleo defendo teres illo textus.",
            "sender": "Skylar.Breitenberg53@gmail.com",
            "full_name": "Monique Langworth",
            "avatar": "data:image/jpeg;base64,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",
            "dateTime": "2024-08-31T06:01:26.494Z",
            "unread_messages_count": 0
        },
        {
            "id": 1964100412243968,
            "text": "Nemo curo caritas caelum cribro.",
            "sender": "Dominic_Hermann@hotmail.com",
            "full_name": "Kristopher Heathcote",
            "avatar": "https://static.vecteezy.com/system/resources/previews/006/541/188/non_2x/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg",
            "dateTime": "2024-08-30T21:22:53.110Z",
            "unread_messages_count": 0
        },
        {
            "id": 5775222152101888,
            "text": "Currus earum mollitia bene.",
            "sender": "Kristy23@hotmail.com",
            "full_name": "Adam Goyette",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/945.jpg",
            "dateTime": "2024-08-30T06:49:49.026Z",
            "unread_messages_count": 8
        },
        {
            "id": 5615234446262272,
            "text": "Eaque spiculum despecto aduro speculum valens.",
            "sender": "Napoleon_Hane@gmail.com",
            "full_name": "Lynette Wunsch Jr.",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/312.jpg",
            "dateTime": "2024-08-31T01:09:27.002Z",
            "unread_messages_count": 10
        },
        {
            "id": 5520801069531136,
            "text": "Vulgus templum coepi sumptus.",
            "sender": "Alvena_Koch73@hotmail.com",
            "full_name": "Leonard Hahn",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/416.jpg",
            "dateTime": "2024-08-30T10:04:22.686Z",
            "unread_messages_count": 12
        },
        {
            "id": 6052676678713344,
            "text": "Adficio peccatus thalassinus artificiose.",
            "sender": "Ludie_Fay@yahoo.com",
            "full_name": "Felipe Cruickshank",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/982.jpg",
            "dateTime": "2024-08-31T01:19:26.964Z",
            "unread_messages_count": 15
        },
        {
            "id": 63053693452288,
            "text": "Stipes abundans dignissimos sum votum coniuratio vel clarus.",
            "sender": "Waino.Stehr85@yahoo.com",
            "full_name": "Ollie Kihn",
            "avatar": "https://avatars.githubusercontent.com/u/16490732",
            "dateTime": "2024-08-30T15:29:41.914Z",
            "unread_messages_count": 20
        },
        {
            "id": 1747632191963136,
            "text": "Cohibeo ab velum summisse artificiose decens venustas.",
            "sender": "Rhianna_Ferry@hotmail.com",
            "full_name": "Ms. Stacy Abshire",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1020.jpg",
            "dateTime": "2024-08-30T19:49:22.913Z",
            "unread_messages_count": 9
        },
        {
            "id": 5097146873282560,
            "text": "Urbanus theca vinitor coerceo unus.",
            "sender": "Liza_Greenholt2@yahoo.com",
            "full_name": "Carolyn Volkman PhD",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/49.jpg",
            "dateTime": "2024-08-31T03:46:14.000Z",
            "unread_messages_count": 19
        },
        {
            "id": 6326118284001280,
            "text": "Admoneo universe uredo nihil super depono cilicium.",
            "sender": "Gus.Wilkinson-Wehner26@gmail.com",
            "full_name": "Dr. Bob Frami DVM",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/301.jpg",
            "dateTime": "2024-08-30T16:19:09.250Z",
            "unread_messages_count": 8
        },
        {
            "id": 2160421066768384,
            "text": "Torrens vilis sublime alii deorsum surculus.",
            "sender": "Hosea_Bahringer50@yahoo.com",
            "full_name": "Dr. Madeline Altenwerth",
            "avatar": "https://avatars.githubusercontent.com/u/31839398",
            "dateTime": "2024-08-30T23:34:01.408Z",
            "unread_messages_count": 17
        },
        {
            "id": 5659778839740416,
            "text": "Auditor delectatio tametsi optio amplus beatae solitudo.",
            "sender": "Luisa81@yahoo.com",
            "full_name": "Tiffany Wintheiser DDS",
            "avatar": "https://avatars.githubusercontent.com/u/9690049",
            "dateTime": "2024-08-30T08:55:50.048Z",
            "unread_messages_count": 8
        },
        {
            "id": 2548972619038720,
            "text": "Tum curto aeternus tracto aveho aeneus dolorum.",
            "sender": "Barton56@hotmail.com",
            "full_name": "Mrs. Paula Schneider",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg",
            "dateTime": "2024-08-30T06:22:23.621Z",
            "unread_messages_count": 14
        },
        {
            "id": 2535443774046208,
            "text": "Acsi caries autem certus cimentarius perferendis comitatus culpa.",
            "sender": "Percival63@yahoo.com",
            "full_name": "Sandra Botsford",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg",
            "dateTime": "2024-08-30T19:05:40.157Z",
            "unread_messages_count": 4
        },
        {
            "id": 6694358459875328,
            "text": "Vos desino cultellus.",
            "sender": "Alec.Dietrich@hotmail.com",
            "full_name": "Lynn Abernathy",
            "avatar": "https://avatars.githubusercontent.com/u/95008068",
            "dateTime": "2024-08-31T05:55:26.838Z",
            "unread_messages_count": 15
        },
        {
            "id": 8002627809837056,
            "text": "Uterque crux casso.",
            "sender": "Fredrick_Will57@gmail.com",
            "full_name": "Amos Grant",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/573.jpg",
            "dateTime": "2024-08-30T17:05:05.787Z",
            "unread_messages_count": 8
        }
    ]

    return messageItems;
}
export const generateFakeMessages = (count: number): Message[] => {
    const messages: Message[] = [
        {
            id: 1,
            text: "Hello there!",
            dateTime: "2023-01-01 12:00:00",
            sender: {
                id: 101,
                full_name: "Alice",
                avatar: "https://example.com/alice.jpg",
                text: "How are you doing today?",
                dateTime: "2023-01-02 13:00:00"
            }
        },
        {
            id: 2,
            text: "I'm doing great, thanks for asking!",
            dateTime: "2023-01-02 14:00:00",
            sender: {
                id: 102,
                full_name: "Bob",
                avatar: "https://example.com/bob.jpg",
                text: "That's good to hear!",
                dateTime: "2023-01-03 15:00:00"
            }
        },
        {
            id: 3,
            text: "What are you up to today?",
            dateTime: "2023-01-03 16:00:00",
            sender: {
                id: 101,
                full_name: "Alice",
                avatar: "https://example.com/alice.jpg",
                text: "I'm going to the movies later.",
                dateTime: "2023-01-04 17:00:00"
            }
        },
        {
            id: 4,
            text: "Sounds fun! What movie are you seeing?",
            dateTime: "2023-01-04 18:00:00",
            sender: {
                id: 102,
                full_name: "Bob",
                avatar: "https://example.com/bob.jpg",
                text: "I'm not sure yet. Maybe something new.",
                dateTime: "2023-01-05 19:00:00"
            }
        },
        {
            id: 5,
            text: "I'm thinking about seeing that new superhero movie.",
            dateTime: "2023-01-05 20:00:00",
            sender: {
                id: 101,
                full_name: "Alice",
                avatar: "https://example.com/alice.jpg",
                text: "That sounds like a good choice.",
                dateTime: "2023-01-06 21:00:00"
            }
        },
        {
            id: 6,
            text: "I might go with you. Let me know when you decide.",
            dateTime: "2023-01-06 22:00:00",
            sender: null
        },
        {
            id: 7,
            text: "Hey, I decided to see the superhero movie.",
            dateTime: "2023-01-07 10:00:00",
            sender: null
        },
        {
            id: 8,
            text: "Sounds good. See you then.",
            dateTime: "2023-01-07 11:00:00",
            sender: null
        },
        {
            id: 9,
            text: "You too!",
            dateTime: "2023-01-07 12:00:00",
            sender: null
        },
        {
            id: 10,
            text: "Bye!",
            dateTime: "2023-01-07 13:00:00",
            sender: {
                id: 101,
                full_name: "Alice",
                avatar: "https://example.com/alice.jpg",
                text: "That sounds like a good choice.",
                dateTime: "2023-01-06 21:00:00"
            }
        }
    ]
    return messages;
}
export const generateFakePastNotesAppointments = (count: number): PastNotesAppointmentType[] => {
    const pastNotesAppointments: PastNotesAppointmentType[] = [];
    for (let i = 0; i < count; i++) {
        pastNotesAppointments.push({
            id: faker.datatype.boolean() ? faker.number.int() : undefined, // Optional id
            created_at: faker.date.future().toISOString(), // Random past date
            patient_id: faker.datatype.boolean() ? faker.string.alphanumeric(8) : undefined, // Optional patient ID
            traitment_name: faker.lorem.words(3),
            traitment_description: faker.lorem.sentence(),
            traitment_type: faker.helpers.arrayElement(['scanning', 'check-up', faker.lorem.word()]), // Random or predefined types
            duration: faker.datatype.boolean()
                ? faker.number.int({ min: 15, max: 120 }) // Duration in minutes
                : faker.string.alphanumeric(5), // Or random string
            document: faker.internet.url(), // Random URL for document
        });
    }
    return pastNotesAppointments;
}
export const generateFakePatients = (count: number): PatientType[] => {
    const patients: PatientType[] = [];
    for (let i = 0; i < count; i++) {
        patients.push({
            address: faker.location.streetAddress(),
            alergies: faker.lorem.words(3),
            appointment: faker.datatype.boolean()
                ? faker.date.future().toISOString()
                : faker.number.int({ min: 1, max: 10 }), // Random number or future date
            avatar: faker.datatype.boolean() ? faker.image.avatar() : undefined,
            blood_glucose: `${faker.number.int({ min: 70, max: 140 })} mg/dL`, // Random glucose level
            blood_pressure: `${faker.number.int({ min: 90, max: 120 })}/${faker.number.int({ min: 60, max: 80 })} mmHg`, // Random blood pressure
            blood_type: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            completed: faker.datatype.boolean()
                ? faker.number.int({ min: 0, max: 100 })
                : undefined, // Optional completed percentage
            disease: faker.lorem.word(),
            first_name: faker.person.firstName(),
            height: faker.datatype.boolean() ? faker.number.int({ min: 150, max: 200 }) : undefined, // Optional height
            id: faker.datatype.boolean() ? faker.number.int() : undefined, // Optional id
            last_name: faker.person.lastName(),
            patient_id: faker.datatype.boolean() ? faker.string.alphanumeric(8) : undefined, // Optional patient ID
            weight: faker.number.float({ min: 50, max: 120, precision: 0.1 }), // Random weight with decimal
        });
    }
    return patients;
}