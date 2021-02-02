import axios from 'axios';

export class API {
    public static async makeGetRequest(url: string): Promise<any> {

        let res = await axios.get(url);

        return res.data;
    }


}