import React,{useEffect, useState, Fragment} from 'react'
import Parser from 'rss-parser';
import styled from 'styled-components';

const RSS_URL = `https://news.bitcoin.com/feed/`;

let parser = new Parser();

const NewsItem = styled.section`
  font-size: 4rem;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;

const NewsTitle = styled.p`
  font-size: 2rem;
  margin: 1em;
  padding: 0.25em 1em;`;

  const NewsCreator = styled.p`
  font-size: 2rem;
  font-weight: bold
  padding: 0.25em 1em;`;

const NewsContent = styled.p`
  font-size: 1rem;
  margin: 1em;
`;

export default function Feed() {
    //loading state while fetching XML
    const [loading, setLoading] = useState(true)
    const [feed, setFeed] = useState([]);

  useEffect(()=>{


    (async () => {
        let feed = await parser.parseURL(RSS_URL);
        console.log(feed.items.slice(0, 4))
        
        setFeed(feed.items.slice(0, 4))

        setLoading(false)

      })();

},[])

    return (
        <Fragment>
         {loading? 'loading' : 
         <Fragment>
      { feed.map((item, index) =>(
        <NewsItem key={index}>
           <NewsTitle>{item.title}</NewsTitle> 
            <NewsCreator> By {item.creator}  </NewsCreator>
            <NewsContent>   
            {item.contentSnippet}
            </NewsContent>

        </NewsItem>
        ))
    }
     </Fragment>
    }
        </Fragment>
    )
}
