# Rolands Terminal Portfolio Website

This project was made for my Bitcoin.com application. It was made in 4 hours. 

## Installation

git clone the repo <br/>
in your terminal run <br/>
npm install <br/>
wait till packages are installed, then <br/>
npm start <br/>

and you will see a working demo in your local browser.

## Issues
- Up until this point I have been using Context API for state mangement of my React applications and not Redux because Context API did all that I needed, so I did not use Redux as I did not have the time to relearn Redux and implement it in a clean and meaningful way. <br/>

- I am new to RSS/XML feeds and this was my first time fetching an XML from a feed
- I did not find a way to get 24 hour price volume from the Bitcoin.com API (https://github.com/bitcoin-portal/index-api-docs)
- I have been using Bootstrap mostly as a styling framework so I was also new to Styled components, but I am familiar with changing components styles based on props passed down to children

## Solutions
- I wrote notes to explain my thought process as much as I could during my time coding this app
- I found an RSS parser NPM package that eased grabbing data from the RSS feed given to me in the instructions (https://www.npmjs.com/package/rss-parser) 
- I used the coingecko API along with the Bitcoin index API to get Daily/Week/Month price data

## Lessons learned
- If I was given more time to complete this project I would be able to implement Redux if it was necessary and refamiliarize myself with Reduxes concepts of state management
- I enjoyed creating the simple line chart using the endpoints given to me in the instructions. If I was to create this again I would try to include candle stick charts more akin to how actual exchanges display price data like Bitcoin.com and Binance.com
- If I had more time I would have liked to style it more using my framework of choice Bootstrap or Chakra UI, as the web app is very minimal. 

Built using React, HTML and CSS. Made with React Recharts API and Styled Components. 

