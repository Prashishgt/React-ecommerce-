import React from 'react';
import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailRead';
import { useState } from 'react';


const Suscribe = () => {

    const [email, setEmail] = useState("");
  return (
    <Box
        width="80%"
        margin="80px auto"
        textAlign="center"
    >
        <IconButton>
            <MarkEmailReadOutlinedIcon  fontSize='large'/>
        </IconButton>
        <Typography variant='h3'>
            Suscribe To Our Newsletter
        </Typography>
        <Typography>
            and recieve 20$ coupon for your first order when you checkout
        </Typography>
        <Box
            m="15px auto"
            p="2px 3px"
            display="flex"
            alginItems="center"
            width="75%"
            backgroundColor="#F2F2F2"
            >
                <InputBase 
                    sx={{
                        ml: 1, flex: 1
                    }}
                    placeholder='Enter email'
                    onChange={((e) => setEmail(e.target.value))}
                    value={email}
                />
                <Divider sx={{ height: 28, m:0.5}} orientation='vertical'/>
                <Typography
                    sx={{
                        p:"10px",
                        ":hover":{
                            cursor:"pointer"
                        }
                    }}
                >
                    Suscribe
                </Typography>
        </Box>
    </Box>
  )
}

export default Suscribe