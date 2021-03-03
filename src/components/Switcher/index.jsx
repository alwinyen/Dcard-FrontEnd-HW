import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { cities } from '../../constant'
import { useHistory } from "react-router-dom";
import { TypeContext, CurCityContext } from '../../contexts/Contexts'
import { defaultMode, cityMode, defaultCity } from '../../constant'

function Switcher() {

  console.log("Switcher Render")

  const [type, setType] = useContext(TypeContext);
  const [curCity, setcurCity] = useContext(CurCityContext)
  const history = useHistory();

  const handleButtonClick = () => {
    setType(!type)
    if (type) {
      setType(cityMode);
      setcurCity(defaultCity)
      history.push(`/scenicSpot/${defaultCity}`);
    } else {
      setType(defaultMode);
      setcurCity("ALL")
      history.push("/scenicSpot");
    }
  }

  const handleCityChange = (e) => {
    setcurCity(e.target.value)
    history.push(`/scenicSpot/${e.target.value}`);
  }

  return (
    <React.Fragment>
      {
        type ?
          <Button className="mt-5 mx-5" variant="primary" size="lg" onClick={handleButtonClick}>
            切換至縣市景點
          </Button>
          :
          <>
          <Button className="mt-5 mx-5" variant="primary" size="lg" onClick={handleButtonClick}>
            切換至全部景點
          </Button>
          
          <Form.Group>
            <Form.Control className="mt-5" as="select" value={curCity} onChange={handleCityChange}>
              {
                cities.map(city => {
                  return(
                    <option key={city.value} value={city.value}>{city.name}</option>
                  )
                })
              }
              
            </Form.Control>
          </Form.Group>
          
          </>
      }
    </React.Fragment>
  )
}

export default Switcher
