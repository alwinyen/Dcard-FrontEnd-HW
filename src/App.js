import React, { useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { defaultMode } from './constant'
import { TypeContext, CurCityContext } from './contexts/Contexts'
import Switcher from './components/Switcher'
import ScenicSpot from './pages/ScenicSpot'

function App() {

  const [type, setType] = useState(defaultMode);
  const [curCity, setCurCity] = useState(null);

  return (
    <TypeContext.Provider value={[type, setType]}>
      <CurCityContext.Provider value={[curCity, setCurCity]}>
        <Router>
          <Switcher/>
          <Switch>
            <Route path="/scenicSpot/:city" render={() => <ScenicSpot/>} />
            <Route exact path="/scenicSpot" render={() => <ScenicSpot/>} />
          </Switch>
        </Router>
      </CurCityContext.Provider>
    </TypeContext.Provider>
  )
}

export default React.memo(App)

