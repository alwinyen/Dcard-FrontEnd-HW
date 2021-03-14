import React, { useContext, useEffect } from 'react';
import GridDisplay from '../components/GridDisplay'

import { useParams } from "react-router-dom";
import { CurCityContext, TypeContext } from '../contexts/Contexts'
import { defaultMode, cityMode } from '../constant'

function ScenicSpotCity() {

  const [type, setType] = useContext(TypeContext);
  const [city, setcurCity] = useContext(CurCityContext)
  const params = useParams();

  /* 偵測網址是否含有城市名，如有偵測到設定目前城市Context */
  useEffect(() => {
    if (Object.values(params).length !== 0) {
      setType(cityMode)
      setcurCity(params.city)
    } else {
      setType(defaultMode)
      setcurCity("ALL")
    }
  }, [params, setType, setcurCity])

  return(
    <GridDisplay/>
  )
}

export default React.memo(ScenicSpotCity)
