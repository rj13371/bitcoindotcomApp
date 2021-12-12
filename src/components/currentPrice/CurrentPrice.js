import React, {useEffect, useState} from 'react'
import axios from 'axios';

//use of props from parent component, takes string as either USD, JPY or EUR
export default function CurrentPrice(props) {

    const [loading, setLoading] = useState(true)
    const [priceData, setPriceData] = useState({price: 0})

    useEffect(()=>{

        const getData = async () => {
           const data =  await axios({
              method: "get",
              url: `https://index-api.bitcoin.com/api/v0/cash/price/${props.currency}`
            })
      
             setPriceData({price: data.data.price/100} )

             setLoading(false)
    
            
          };
          getData();
    
    },[props.currency])

    return (
        <div>
         {loading? <> {'Loading'} </> :
        <>
        {priceData.price} {`${props.currency}`}
        </>
        }
        </div>
    )
}
