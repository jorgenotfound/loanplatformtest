
const baseURL = 'https://tornadoapi.herokuapp.com/';
//const baseURL = 'http://localhost:5000/';

const test = (data) => {
    if(data == 50000){
        return 'undecided';}

    return (data <50000) ? 'approved': 'declined';
}

function post(type, data) {
    return new Promise((resolve, reject) =>{
        fetch(baseURL+type, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export const api = {
    post, test
};
