export default class authService {
    
    _regUrl = 'http://77.222.42.174/api/v1/auth/users/';
    


    signIn = async (form, url = this._regUrl) => {
        const data = new FormData(form);
        const dataObj = {};

        data.forEach((value, key) => {
            dataObj[key] = value;
        })
        
        try {
            let res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(dataObj)  
            })
    
            if(!res.ok) {
                throw new Error(`${url} не доступен, статус запроса ${res.status}`)
            }
    
            if(res.ok) {
                let result = await res.json();
                if(result['id'] !== undefined) {
                    console.log(result);
                    console.log(result['id']);
                    console.log('success signin')
                } else {
                    console.log('failed signin')
                }
            }
        }
        catch {
            console.log('error');
        }
        
    }
}