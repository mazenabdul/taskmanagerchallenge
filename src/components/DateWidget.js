import React, { useEffect, useState } from 'react'

const DateWidget = () => {

    const [date, setDate] = useState({ numberDate: null, weekday: null, year: null, month: null })

    useEffect(() => {
      const time = new Date()
      const year = time.getFullYear()
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      months = months[time.getMonth()]
      days = days[time.getDay()]
      const numberDate = time.getDate()
      setDate({ numberDate, weekday: days, year, month: months})
    },[])

  return (
  
    <div className="card-panel ">
      <p className='weekday'>{date.weekday}</p>
      <p className='month-date'>{date.month}, {date.numberDate}</p>
      <p className='year'>{date.year}</p>
    </div>
  )
}

export default DateWidget
