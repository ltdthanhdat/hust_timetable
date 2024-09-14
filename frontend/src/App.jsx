import axios from 'axios'
import { useForm } from 'react-hook-form'
import MyCalendar from './components/Calendar'
import { useState, useEffect } from 'react'
import './index.css'

const BACKEND_URI = import.meta.env.VITE_BACKEND_URI

function App() {
	const [events, setEvents] = useState([{}])
	const [loading, setLoading] = useState(false)
	const { register, handleSubmit } = useForm()
	const onSubmit = async (data) => {
		console.log(data)
		await fetchData(data)
	}
	const fetchData = async (cookie) => {
		try {
			setLoading(true)
			await axios.post(BACKEND_URI + '/export-to-csv', cookie)
			const data = await axios.post(BACKEND_URI + '/event-calendar', cookie)
			setEvents(data.data)
		}
		catch (err) {
			console.log(err)
		}
		finally {
			setLoading(false)
		}
	}
	const exportCsv = async () => {
		axios.get(BACKEND_URI + '/download', {
			responseType: 'blob'
		})
			.then((obj) => {
				const url = URL.createObjectURL(obj.data)
				const a = document.createElement('a')
				a.href = url
				a.download = 'schedule.csv'
				a.style.display = 'none'
				a.click()
				a.remove()
				URL.revokeObjectURL(url)
			})
			.catch(err => console.log(err))
	}

	return (
		<>
			<div className='row'>

				<div className="col-3">
					<p className='ms-2 mt-1'>
						How to use? <br />
						B1: Get cookies from <a href='https://dt-ctt.hust.edu.vn/Students/Timetables.aspx' target='_blank'>dt-ctt.hust.edu.vn</a> <br />
						B2: Fill cookies in form down below <br />
						B3: Export calendar <br />
					</p>
					<hr className='ms-2' />
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='ms-2'>
							<label htmlFor='cookie'>.AspNet.Cookies	</label>
						</div>
						<div className='ms-2'>
							<textarea rows='5' id='cookie' type="text" className='form-control' {...register('aspNetCookies')} />
						</div>
						<button className='m-2 btn btn-primary' type='submit'>Submit</button>
					</form>
				</div >

				<div className="col-9">
					<button className='btn btn-primary my-1' onClick={exportCsv}>Export to CSV</button>
					{loading && <span className="loader"></span>}
					<div className="me-2">
						<MyCalendar events={events} />
					</div>
				</div>
			</div >
		</>
	)
}

export default App
