import React from 'react'
import { TextField } from '@material-ui/core';

const Date = ({ time }) => {
  return (
    <form noValidate>
      <TextField placeholder={time} InputProps={{disableUnderline: true, }}  id="date" type="date" defaultValue={time} />
    </form>
      
  )
}

export default Date
