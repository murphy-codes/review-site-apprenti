import React, { useState, useEffect } from "react"
import CityTile from "./CityTile"


const CityIndexContainer = props => {
  let cities = ['San Francisco', 'San Jose', 'Boston'];
  let i = 0;
  const cityTiles = cities.map(city => {
    i++;
    return (
      <CityTile
        key={i}
        id={i}
        name={city}
        description={'this is a city'}
        thumbnail={'https://c1.wallpaperflare.com/preview/111/19/672/bay-area-golden-gate-bridge-golden-gate-bridge.jpg'}
      />
    );
  });
}

export default CityIndexContainer