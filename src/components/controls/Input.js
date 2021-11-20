import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange, rows } = props;
    return (
        <TextField
            id="outlined-multiline-flexible"
            variant="outlined"
            multiline
            label={label}
            name={name}
            value={value}
            rows={rows}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
