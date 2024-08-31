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