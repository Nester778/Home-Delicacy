import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar'
import CardLine from './CardLine'
import Filter from "./Filter"
import BgImg from './assets/BgImg.svg'
import './App.css'

function App() {

  const [clice, setSlice] = useState(9);
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState("");
  const click = (param, fi) => {
    console.log(fi);
    setActive(d => d = param);
    setFilter(f => f = fi);
  }
  function increment() {
    setSlice(d => d + 9);
  }
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/" + filter)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.slice(0, clice));
        },
        (error) => {

        }
      )
  }, [clice, filter]);

  return (
    <>
      <NavBar />
      <img className="bgimg" src={BgImg}></img>
      <div className="container py-3">
        <div className="row">
          <div className="col-12">
            <Filter value={active} onFilter={(i, f) => click(i, f)} />
          </div>
          <div className="col-12">
            {data && <CardLine recips={data} />}
          </div>
        </div>
        <div className='more-btn p-2' onClick={increment}>Больше</div>
      </div>

    </>
  )
}

export default App
