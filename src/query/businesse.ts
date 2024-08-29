import { useQuery } from '@tanstack/react-query'
import * as businesseAPI from '../axios/businesse'

/* 
=====================================================================================
 Get All businesses types Query
=====================================================================================
*/
export const GetBusinessesTypesQuery = (option: any) => {
    const { data, isLoading, isError }: any = useQuery<Promise<BusinesseTypesType>>({
        ...option,
        queryKey: ['businesses'],
        queryFn: () => businesseAPI.GetBusinesseTypes(),
    });

    return { data: data?.data, isLoading, isError }
}