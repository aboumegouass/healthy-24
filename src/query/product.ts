import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as productAPI from '../axios/product'

export function createProductQuery() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: ProductFormData) => productAPI.createProduct(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-products'],
            })
        },
    })
}