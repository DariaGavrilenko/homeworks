import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    {console.log(props)}
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: 'green',
                '& .MuiSlider-track':{
                    color:'green' 
                },
                '& .MuiSlider-rail':{
                    color:'gray' 
                },
                '& .MuiSlider-thumb': {
                    color:'white',
                    border:'2px solid green',
                    '&:before':{
                        width:'5px',
                        height:'5px',
                        borderRadius:'50%',
                        backgroundyaColor:'green'
                    },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px rgba(0, 0, 0, 0.2)}`,
                  },
                  '&.Mui-active': {
                    boxShadow: `0px 0px 0px 14px rgba(0, 0, 0, 0.2)}`,
                  },
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        
        />
    )
}

export default SuperRange
