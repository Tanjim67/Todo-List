import { useState, useEffect } from "react"

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [formattedDay, setFormattedDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const reformDateString = function () {
        if (day) {
            let date = new Date(day);
            const dayString = `${monthNames[date.getMonth()]} ${date.getDay()} at ${date.getHours()}:${date.getMinutes()}`
            setFormattedDay(dayString)
        }
    }

    useEffect(reformDateString, [day])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add a task')
            return
        }
        onAdd({ text, day: formattedDay, reminder })

        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> Date and Time</label>
                <input type="datetime-local" placeholder="Add Date" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label> Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task" className='btb btn-block' />
        </form>
    )
}

export default AddTask