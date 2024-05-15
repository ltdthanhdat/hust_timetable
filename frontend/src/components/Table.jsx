import axios from "axios"
import { useState, useEffect } from "react"
const Table = ({ api }) => {
    const [table, setTable] = useState([{}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(api)
                setTable(result.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, []
    )

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(table[0]).map(item => (<th>{item}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {
                        (() => {
                            let arr = []
                            for (let i = 0; i < table.length; i++) {
                                let row = Object.values(table[i]).map(item => {
                                    return <td>{item}</td>
                                })
                                arr.push(<tr>{row}</tr>)
                            }
                            return arr
                        })()
                    }
                </tbody>
            </table >
        </>
    )
}

export default Table