import './App.css';
import Recharts from './components/graph/Recharts';
import CurrentPrice from './components/currentPrice/CurrentPrice';
import bchLogo from './components/currentPrice/assets/bchlogo.png'
import styled from 'styled-components';
import { useContext } from 'react';
import { ChartContext } from './context/ChartContext';
import Feed from './components/feed/Feed';

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const BCHprice = styled.h2`
  font-size: 3em;
  margin: 1em;
`;

function App() {

  const {setTimeFrame} = useContext(ChartContext)

  return (
    <div className="App">
      <Recharts/>
      <Button onClick={() => setTimeFrame('month')} >Month</Button>
      <Button onClick={() => setTimeFrame('today')} >Today</Button>
      <Button onClick={() => setTimeFrame('week')} >Week</Button>
    
    
    <br/>
    <BCHprice>Current Bitcoin Cash Price</BCHprice> 
    <br/>
      <img src={bchLogo} alt="BCH logo" width="100" height="100"></img>
      <CurrentPrice currency={'USD'}/>
      <CurrentPrice currency={'JPY'}/>
      <CurrentPrice currency={'EUR'}/>

    <Feed/>

    </div>
  );
}

export default App;
