import { useQuery } from '@tanstack/react-query'
import * as communeAPI from '../axios/commune'
export const CommuneKeys = {
    allCommunes: ['communes'],
    getCommunes: (query: string) => [...CommuneKeys.allCommunes, query],
}
/* 
=====================================================================================
 Get All Communes Query
=====================================================================================
*/
export const GetCommunesQuery = ({ query, limit }: { query: string, limit: number }, option: any) => {

    const { data, isLoading, isError }: any = useQuery<Promise<CommuneType>>({
        ...option,
        queryKey: query ? CommuneKeys.getCommunes(query) : CommuneKeys.getCommunes,
        queryFn: async () => {
            const result = await communeAPI.getCommunes({ query, limit });

            // Add a delay of 1000 milliseconds (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, 1000));
            return result;
        },
    });

    return { data: data?.data, isLoading, isError }
}