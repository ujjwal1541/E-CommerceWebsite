import { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


const Component = styled(Menu)`
margin-top: 5px;
`;

const Logout = styled(Typography)`
font-size: 14px;
margin-left: 10px;
`;


const Profile = ({account, setAccount }) =>{

    const [open, setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const handleClose = () =>{
        setOpen(false);
    }
    const logoutUser =() =>{
        setAccount('');
    }

    

    return(
        <>
        <Box onClick = {handleClick}><Typography style = {{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography></Box>
        <Component
        anchorEl={open}
        open={Boolean (open)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={() => {handleClose(); logoutUser();}}>
        <LogoutIcon color="primary" fontSize="small"/>

        <Logout>Logout</Logout>
        </MenuItem>
        
      </Component>
        </>
    )
}
export default Profile;