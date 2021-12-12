import React, {useEffect, useState, Fragment, useContext} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';
import moment from 'moment';
import { ChartContext } from '../../context/ChartContext';
import styled from 'styled-components';

const Header = styled.h1`
  font-size: 4rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ;
  border-radius: 3px;
  text-transform:capitalize;
`;

const Chart = styled.div`
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content:center;

`;


export default function Recharts() {

    const [loading, setLoading] = useState(true)

    const {timeFrame} = useContext(ChartContext)

    const [data, setData] = useState([{}])

useEffect(()=>{
    const getData = async () => {
        //get timeframe prop from chart context and render chart based on user input
        // from reading the docs I could not find a endpoint to give price based on 24 hourly timeframe so I had to use coingecko API to get BCH price. week and month price are from Bitcoin.com API
        let url
        //if timeframe prop is today then url is set to coingecko, else grab from bitcoin.com index api
        timeFrame === 'today' ? url = `https://api.coingecko.com/api/v3/coins/bitcoin-cash/market_chart?vs_currency=usd&days=1&interval=hourly` : url = `https://index-api.bitcoin.com/api/v0/cash/history`

       const data =  await axios({
          method: "get",
          url: url
        })
        
        //console.log(data)
        //create new array and set state with it to not mutate original state
        let prices = []

        if (timeFrame === 'today'){
            // index is at 24 for 24 hours of the day
            for(let i = 0; i<24; i++){
                prices.push({name:  moment(data.data.prices[i][0]).format('MM/DD hh:mm')  , closing_price: data.data.prices[i][1].toFixed(2)  })
            }

        }else if (timeFrame === 'week'){
            // index is at 7 for 7 days of the week
            for(let i = 0; i<7; i++){
                prices.push({name: moment(data.data[i][0]).format('MM-DD')  , closing_price: data.data[i][1]/100  })
            }
        }else { // this is for month
            for(let i = 0; i<30; i++){
            // index is at 30 for 30 past days of month
                prices.push({name: moment(data.data[i][0]).format('MM-DD')  , closing_price: data.data[i][1]/100  })
            }
        }
        
        setLoading(false)
        setData(prices)

      };
      getData();

},[timeFrame])

//render loading component while waiting for GET response
    return (
        <Fragment>
        
      <Header> {'Bitcoin Cash '}{timeFrame }{' Chart'} </Header> 

            {loading? <> {'Loading'} </> :
        <Chart>
        <LineChart width={1200} height={300} data={data}>
        <Line type="monotone" dataKey="closing_price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      </Chart>
        }

      </Fragment>
    )
}
