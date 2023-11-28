import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material"
import { Add as AddIcon, DateRange, EmojiEmotions, Image, Person, VideoCameraBack } from '@mui/icons-material';
import { useState } from "react"


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"

});

const Add = () => {
    const [open, setOpen] = useState(false);
    const handleModal = () => setOpen(prev => !prev);


    return (
        <>
            <Tooltip onClick={handleModal} title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
                    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>

                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}
                            alt="Remy Sharp"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN22Kt6Fm94HBn-wMTu1O_G7WUHklRf6sBotxKY6azJw&s" />
                        <Typography variant="span" >Abdessamad</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        rows={4}
                        multiline
                        placeholder="What's on you mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <Person color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group" >
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>

            </StyledModal>
        </>
    )
}

export default Add