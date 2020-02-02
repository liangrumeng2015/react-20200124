import Axios from 'axios';
import qs from 'qs';

function reqAxios (url,methods='post',data={},credentBool=false){
    let promise;
    if(methods === 'get'){
        promise = Axios.get(url,data,{withCredentials:credentBool})
    }else{
        promise = Axios.post(url,qs.stringify(data),{withCredentials:credentBool})
    }
    return promise.then(res=>{
        return res.data;
    }).catch(err=>{
        return err
    })
}

export default reqAxios;