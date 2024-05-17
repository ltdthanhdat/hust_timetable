// import Table from "./components/Table"
import MyCalendar from './components/Calendar'
import { useState } from 'react';
function App() {

  return (
    <>
      {/* <div className="row"> */}
      <div className="">
        <p>
          B1: Get cookies from dt-ctt.sis.hust.edu.vn <br />
          B2: Fill cookies in form down below <br />
          B3: Export calendar <br />
        </p>
      </div>

      <div className="">
        <h1>My Calendar App</h1>
        <MyCalendar />
      </div>
      {/* </div> */}
    </>
  )
}

export default App
