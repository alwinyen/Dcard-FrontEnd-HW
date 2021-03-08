import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ErrorBox from './ErrorBox'
import HasMoreBox from './HasMoreBox'
import { CurCityContext } from '../../contexts/Contexts'
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

function GridDisplay() {

  const [pageGlobal, setPageGlobal] = useState(1);
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [curCity] = useContext(CurCityContext)

  const fetchMoreData = (page) => {
    page = pageGlobal === -1 ? 1 : page
    const skip = page <= 0 ? 0 : (page - 1) * 30
    const url = curCity !== "ALL" ? `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${curCity}` : `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot`

    if (curCity) {
      axios.get(url, {
        params: {
          $skip: skip,
          $top: 30, 
          $format: "JSON"
        }
      })
        .catch(e => {
          setError(e)
          setHasMore(false)
        })
        .then(res => {
          setLoading(false)
          if (res && res.data && res.data.length === 0) {
            setHasMore(false)
          } else {
            if (res && res.data) {
              setItems(items.concat(res.data))
              setPageGlobal(page);
            }
          }
      })
    }
  }

  //When the city is changed, clear the item array and reset page number
  useEffect(() => {
    setPageGlobal(-1);
    setItems([])
    setHasMore(true)
    setError(false)
  }, [curCity])

  return (
    <React.Fragment>
      <Container>
        <InfiniteScroll
          pageStart={1}
          loadMore={fetchMoreData}
          hasMore={hasMore}
          loader={<div>Loading...</div>}
        >
          <CardColumns>
          {
            !loading && items ?
            items.map(entry => {
              return (
                <Card key={entry.ID} style={{ width: '18rem' }}>
                  {/* Uncomment to enable image (disable for loading speed issue) */}
                  {/* <Card.Img variant="top" src={entry.Picture.PictureUrl1} /> */}
                  <Card.Body>
                    <Card.Title>{entry.Name}</Card.Title>
                    <Card.Text>
                      {entry.Description}
                      {
                        entry.WebsiteUrl ?
                        <a target="_blank" rel="noreferrer" href={entry.WebsiteUrl}>點我至網站</a>
                        :
                        <></>  
                    }
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })
            :
            <></>
          }
          </CardColumns>
        </InfiniteScroll>
        <ErrorBox error={error}/>
        <HasMoreBox error={error} hasMore={hasMore}/>
      </Container>
    </React.Fragment>
  )
}

export default React.memo(GridDisplay)
