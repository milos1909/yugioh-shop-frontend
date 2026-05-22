import axios from "axios";


const client = axios.create({
    baseURL:'http://localhost:3300/api',
    headers: {
        'Accept': 'application/json',
    }
})

export class DataService {
    static async getSets(search: string, offset: number) {
        return await client.get('/sets', {
                params: {
                    name: search,
                    offset
                }
            })
    }

    static async getSetByCode(set_code: string) {
        return await client.get(`/set/${set_code}`)
    }
}