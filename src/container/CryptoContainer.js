import { useEffect, useState } from 'react';
import MainCoinsTable from '../sections/mains/MainCoinsTable';
import CommonLoading from '../commons/CommonLoading';

/* DataCrypto Component – A component that provides data for your application. 
You can change the source of your data and the component will still work*/


const DataCrypto= ()=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=USD")
        .then(res => res.json())
            .then(data =>{setData(data);
            setLoading(false);
        })   
        },[]);
 return (        
 
 <div style={{display: 'flex',
 flexDirection: 'left',
 align: 'center'}}>
{loading  
? 
<CommonLoading/> 
: 
<MainCoinsTable data= {data}/>}
</div>)

}

export default DataCrypto;
