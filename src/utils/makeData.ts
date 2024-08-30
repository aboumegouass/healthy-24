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
    const messageItems: MessageItem[] = [];
    for (let i = 0; i < count; i++) {
        messageItems.push({
            id: faker.number.int(),
            text: faker.lorem.sentence(),
            sender: faker.internet.email(),
            full_name: faker.person.fullName(),
            avatar: faker.image.avatar(),
            dateTime: faker.date.recent().toISOString(), // Recent date
            unread_messages_count: faker.number.int({ min: 0, max: 20 }), // Random count of unread messages
        });
    }
    return messageItems;
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