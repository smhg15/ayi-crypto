import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Link, Outlet, useParams } from 'react-router-dom';
import CommonLoading from '../commons/CommonLoading';
import MainCoinProfile from '../sections/mains/MainCoinProfile'
/* DataCrypto Component – A component that provides data for your application. 
You can change the source of your data and the component will still work*/


const SingleCryptoProfileContainer= ({})=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
	const {position} = useParams();

    
    useEffect(()=>{
        fetch(`https://api.coinstats.app/public/v1/coins?skip=${position}&limit=1&currency=USD`)
        .then(res => res.json())
            .then(data =>{setData(data);
            setLoading(false);
        })   
        },[position]);
 return (        
 
 <div style={{display: 'flex',
 flexDirection: 'row',
 alignItems: 'center',}}>
{loading  
? 
<CommonLoading/>  
: 
<div>
     {<MainCoinProfile data={data}/>}
</div>}
</div>)

}

export default SingleCryptoProfileContainer;
