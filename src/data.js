export const API_KEY = 'AIzaSyDwOKKSsRUly8EcObn69F8NfXDsYXWinmA';

export const valueConvertor = (value)=>{
    if(value >= 1000000){
        return Math.floor(value /1000000)+"M";

    }
    else if(value>=1000){
        return Math.floor(value /1000)+"K";
    }
    else{
        return value;
    }
}
