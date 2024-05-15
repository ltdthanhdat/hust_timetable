import Table from "./components/Table"

function App() {

  return (
    <>
      <div className="row">
        <div className="col">
          <p>
            B1: Get cookies from dt-ctt.sis.hust.edu.vn <br />
            B2: Fill cookies in form down below <br />
            B3: Export calendar <br />
          </p>
        </div>

        <div className="col">
          <Table api='http://localhost:3000/books' />
        </div>
      </div>
    </>
  )
}

export default App
