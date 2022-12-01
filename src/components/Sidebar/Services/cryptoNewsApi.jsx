import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

const NewsApiHeader = {
    'X-RapidAPI-Key': 'cd90224649mshf39f9e16c5cdad2p187c5cjsn77913dcfeafe',
    'X-RapidAPI-Host': 'yourmapper2.p.rapidapi.com'
}

const baseUrl = 'https://yourmapper2.p.rapidapi.com/';

const createRequest = (url) => ({ url , headers: NewsApiHeader })

export const cryptoApi = createApi({
    reducerPath: 'newsApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : builder => ({
        geNews : builder.query({
            query: () => createRequest(`/datasetlist`)
          }), 
    })
})

export const { useGetNewsQuery } = cryptoApi


