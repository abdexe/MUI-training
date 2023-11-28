import { Box, Switch, styled } from '@mui/material'
import React, { useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { ModeNight, WbSunny } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Color switch demo' } };
function Sidebar({mode,toggleMode}) {
  const [open, setOpen] = useState(false);
  
  return (
    
    <Box   p={2}  flex={1}
    
      sx={{ display: { xs: "none", sm: "block" } }} >
        <Box  position="fixed" >
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        {/* Usagers */}
        <ListItemButton >
          <ListItemIcon >
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Usagers" />
        </ListItemButton>
        {/* INBOX */}
        <ListItemButton onClick={() => setOpen(!open)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        {/* Dark Mode */}
        <ListItemButton >
        <ListItemIcon>
        {mode ? <ModeNight/> :<WbSunny/> }
        </ListItemIcon>
        <Switch onChange={toggleMode} {...label}  />
        </ListItemButton>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar





