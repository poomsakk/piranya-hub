import React from 'react'
import { Paper  } from "@mui/material";

const ImageCom = (props) => {
  return (
    <Paper>
      <img className="w-full h-[500px] object-cover" src={props.item.imgUrl} alt="" />
    </Paper>
  )
}

export default ImageCom