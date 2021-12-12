import React,{createContext, useState} from 'react'

export const ChartContext = createContext();

export function ChartProvider(props) {

    //used Context API for simple state management rather than Redux as Context is better suited for small state changes
    // I have not used Redux from my experience with React as it did not fit to what I needed for the projects I have made

    //default is set to month
    const [timeFrame, setTimeFrame] = useState('month')

    //pass timeframe and setTimeFrame hook to button and chart components

    return (
        <ChartContext.Provider value={{timeFrame, setTimeFrame}}>
            {props.children}
        </ChartContext.Provider>
    )
}

