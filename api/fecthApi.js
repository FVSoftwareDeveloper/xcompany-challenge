export default class fetchApi{

    async SaveCustomer(info = []){

        return await fetch(`http://localhost:8000/api/AddCustomer/${JSON.stringify(info)}`,{
            method:'POST',
            headers:{
                'Accept': 'application/json'
            }
        }).then( response => response.json() )
        // eslint-disable-next-line no-console
        .then( data => { console.log(data) } );
    }

    async UpdateCustomer(info = []){

        return await fetch(`http://localhost:8000/api/UpdCustomer/${JSON.stringify(info)}`,{
            method:'POST',
            headers:{
                'Accept': 'application/json'
            }
        }).then( response => response.json() )
        // eslint-disable-next-line no-console
        .then( data => { console.log(data) } );
    }

    async SearchCustomers(search = "", $axios){

       return await $axios.get(`http://localhost:8000/api/SearchCustomer/${search}`);       
         
        
    }

    async SearchCustomerAddress(customerId, $axios){

        return await $axios.get(`http://localhost:8000/api/SearchCustomerAddress/${customerId}`);       
          
         
     }
}
