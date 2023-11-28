import { Mail, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Box, styled, Stack, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",

    });
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%",

    }));

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        justifyContent: 'space-between',
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }

    }));
    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: 'space-between',
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }));

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }} >
                    MUI Training
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="Search.." /></Search>
                <Icons >
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={()=>setOpen(!open)} sx={{width:30, height:30}}  alt="Remy Sharp" src="https://unsplash.com/random" />
                </Icons>
                <UserBox  onClick={()=>setOpen(!open)} >
                    <Avatar sx={{width:30, height:30}} 
                    alt="Remy Sharp" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s" />
                    <Typography variant="span" >Abdessamad</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={()=>setOpen(false)}
                
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar