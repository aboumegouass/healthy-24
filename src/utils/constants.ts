import { faker } from '@faker-js/faker';

export const queryClientOptions = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
}
export async function getDataCategory(): Promise<Category[]> {
    const data: Category[] = [];

    for (let i = 1; i <= 20; i++) {
        data.push({
            id: i,
            name: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription(),
            isParent: faker.datatype.boolean(),
            created_at: faker.date.past().toISOString(),
        });
    }

    return data;
}

export const isSession = true

export const permissionsList = [
    'can_view_home_page',
    'can_view_orders_page',
    //'can_create_order',
    'can_delete_category',
    //'can_create_category',
    'can_edit_category',
    'can_edit_order',
    'can_delete_order',
    'can_change_order_status',
    'can_view_products_page',
    'can_view_payments_page',
    'can_view_employees_page',
    'can_edit_employee',
    'can_delete_employee',
    'can_view_roles_page',
    'can_view_settings_page',
    'can_view_deliveries_page',
    'can_view_stocks_page',
    'can_create_product',
    'can_edit_product',
    'can_delete_product',
    'can_view_categories_page',
    'can_create_categorie',
    'can_edit_categorie',
    'can_delete_categorie',
]