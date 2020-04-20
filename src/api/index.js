import axios from 'axios';
// import { try } from 'q';

const url = 'https://covid19.mathdro.id/api';

export const fetchData  = async () => {
    try {
        const {data} = await axios.get(url);        
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modifiedData;
        // console.log(response);

    }
    catch(error){

    }

}

export const fetchDailyData = async () => {
    try {
        const  response  = await axios.get(`${url}/daily`);
        // console.log(data);
    }
    catch (error) {
        
    }
}