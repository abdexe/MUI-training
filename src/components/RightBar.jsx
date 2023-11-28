import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';



function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s"
          />
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s"
          />
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src=""
          />
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s"
          />
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s"
          />
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s"
          />
          <Avatar sx={{ width: 30, height: 30 }}
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s"
          />
        </AvatarGroup>
        <Typography variant='h6' mb={2} fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList style={{overflow:"Hidden"}} gap={5} cols={3} rowHeight={100}>
          <ImageListItem >
            <img
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image 1"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image 2"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image 3"
            />
          </ImageListItem>

        </ImageList>
        <Typography variant='h6' mt={2}  fontWeight={100}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1701130661~exp=1701131261~hmac=70143fe4078bb81cc2f542d56e58a450db9a2ca09dabaf45df22569100d16aea" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1701130714~exp=1701131314~hmac=c11f534640e30f2b761b654cce28a0e1ea323d0e73159e5afd6581585b44cad0" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833562.jpg?t=st=1701130653~exp=1701131253~hmac=98b433ce3e3f08a5f479bfb348893b5b6bc8ea751567f4edece98eb3721d5b00" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar