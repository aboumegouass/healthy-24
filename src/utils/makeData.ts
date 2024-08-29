import { faker } from '@faker-js/faker'

export type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: 'relationship' | 'complicated' | 'single'
    subRows?: Person[]
}

const range = (len: number) => {
    const arr: number[] = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}
export const generateFakeRoles = (count: number) => {
    const roles = [];
    for (let i = 0; i < count; i++) {
        roles.push({
            id: faker.number.int(), // Optional id
            name: faker.person.jobTitle(),
            position: faker.number.int({ min: 1, max: 10 }), // Random position between 1 and 10
            permissions: faker.helpers.arrayElements(
                ['read', 'write', 'update', 'delete', 'execute'],
                faker.number.int({ min: 1, max: 5 }) // Random number of permissions
            ),
            created_at: faker.date.past().toISOString(),
        });
    }
    return roles;
}
export const generateFakeEmployees = (count: number): Employee[] => {
    const employees: Employee[] = [];
    for (let i = 0; i < count; i++) {
        employees.push({
            bio: faker.lorem.sentences(2),
            full_name: faker.person.fullName(),
            phone_number: faker.phone.number(),
            completed_at: faker.datatype.boolean() ? faker.date.past().toISOString() : null,
            created_at: faker.date.past().toISOString(),
            id: faker.number.int(),
            is_active: faker.datatype.boolean(),
            avatar: faker.datatype.boolean() ? faker.image.avatar() : null,
            username: faker.internet.userName(),
            email: faker.internet.email(),
            role_name: faker.person.jobTitle(),
            business: {
                id: faker.number.int(),
                name: faker.company.name(),
            },
            status: faker.helpers.arrayElement(['active', 'inactive', 'on_leave']),
            type: faker.helpers.arrayElement(['client', 'employee']),
        });
    }
    return employees;
}
export const generateFakeDeliveryCompanies = (count: number): DeliveryCompany[] => {
    const companies: DeliveryCompany[] = [];
    for (let i = 0; i < count; i++) {
        companies.push({
            id: faker.number.int(),
            name: faker.company.name(),
            address: faker.location.streetAddress(),
            phone_number: faker.phone.number(),
            type: faker.helpers.arrayElement(['provider', 'normal']),
        });
    }
    return companies;
}
export const generateFakeOrders = (count: number): Order[] => {
    const orders: Order[] = [];
    for (let i = 0; i < count; i++) {
        const items = Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
            name: faker.commerce.productName(),
            quantity: faker.number.int({ min: 1, max: 10 }),
            price: faker.commerce.price({ min: 10, max: 100, dec: 2 }),
        }));

        const total_ht = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
        const tva = total_ht * 0.2; // Assuming 20% VAT
        const discount_percentage = faker.number.int({ min: 0, max: 30 });
        const discount_value = total_ht * (discount_percentage / 100);
        const total_ttc = total_ht + tva - discount_value;
        const shipping_cost = faker.commerce.price({ min: 5, max: 20, dec: 2 });

        orders.push({
            id: faker.number.int(),
            tracking_code: faker.string.alphanumeric(10),
            status_id: faker.number.int({ min: 1, max: 5 }),
            total_price: Number(total_ht + tva + shipping_cost) - discount_value,
            created_at: faker.date.past().toISOString(),
            customer: {
                id: faker.number.int(),
                full_name: faker.person.fullName(),
                email: faker.internet.email(),
                phone_number: faker.phone.number(),
                username: faker.internet.userName(),
            },
            business: {
                id: faker.number.int(),
                name: faker.company.name(),
                email: faker.internet.email(),
                phone_number: faker.phone.number(),
            },
            items_count: items.length,
            status_name: faker.helpers.arrayElement(['pending', 'shipped', 'delivered', 'canceled']),
            total_ttc,
            total_ht,
            tva,
            discount_value,
            discount_percentage,
            shipping_cost,
            items,
        });
    }
    return orders;
}
export const generateFakeProducts = (count: number) => {
    const products = [];
    for (let i = 0; i < count; i++) {
        products.push({
            id: faker.number.int(),
            name: faker.commerce.productName(),
            reference: faker.commerce.isbn(), // Optional reference
            unit_price: faker.commerce.price(), // Optional unit price
            product_type: {
                name: faker.commerce.productAdjective() + ' ' + faker.commerce.productMaterial(),
            },
            brand: {
                name: faker.company.name(),
            },
            image: faker.image.urlLoremFlickr(),
        });
    }
    return products;
};
const newPerson = (): Person => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int(40),
        visits: faker.number.int(1000),
        progress: faker.number.int(100),
        status: faker.helpers.shuffle<Person['status']>([
            'relationship',
            'complicated',
            'single',
        ])[0]!,
    }
}

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!
        return range(len).map((): Person => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
export const brandsData = [
    {
        id: 1,
        name: "Logo N1",
        logo: "https://t3.ftcdn.net/jpg/01/30/98/72/360_F_130987286_UAJA9QvhEJor7kVSUzRiaWxSzGm8FKpZ.jpg",
    },
    {
        id: 2,
        name: "Logo N1",
        logo: "https://i.pinimg.com/originals/37/96/73/37967347152332c7f2febeefae4fd5ea.jpg",
    },
    {
        id: 3,
        name: "Logo N3",
        logo: "https://th.bing.com/th/id/R.060e7a2302aa9041ec73a8b53b5181b3?rik=OynfFqBe55JqRQ&riu=http%3a%2f%2fwww.thelogomix.com%2ffiles%2fimagecache%2fv3-logo-detail%2ffine-01.png&ehk=Iq0bqxT0TkdKulreGsFLmUJfEpW3tZiwrBdU42UuOlk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        id: 4,
        name: "Logo N4",
        logo: "https://cdn3.f-cdn.com/contestentries/2160807/42185195/63332b9ef27d6_thumb900.jpg",
    },
    {
        id: 5,
        name: "Logo N5",
        logo: "https://static.vecteezy.com/system/resources/previews/012/906/487/original/px-initial-monogram-logo-design-in-a-rectangular-style-with-curved-sides-vector.jpg",
    },
    {
        id: 6,
        name: "Logo N6",
        logo: "https://as2.ftcdn.net/v2/jpg/04/87/95/73/1000_F_487957313_1BlHosLGosHD9Zh6Ymylh9MmZSOvtecf.jpg",
    },
    {
        id: 7,
        name: "Logo N7",
        logo: "https://static.vecteezy.com/system/resources/previews/012/780/729/non_2x/pj-initial-monogram-logo-design-with-square-shape-design-ideas-vector.jpg",
    },
]
export const product_types_data = [
    {
        id: 1,
        name: "Electronic",
    },
    {
        id: 2,
        name: "Electromenages",
    },
    {
        id: 3,
        name: "Computers",
    },
    {
        id: 4,
        name: "Cloths",
    },
    {
        id: 5,
        name: "Foods",
    },
    {
        id: 6,
        name: "Medicales",
    },
    {
        id: 7,
        name: "Drinks",
    },
]