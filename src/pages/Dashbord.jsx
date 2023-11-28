import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Dashbord() {
  const [value, setValue] = React.useState(3);
  return (
    <>
      <div>Dashbord</div>
      <Button
        onClick={(e) => console.log('clicked')}
        startIcon={<ShoppingCartIcon />}
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: '#AEDDBB',
          
          '&:hover': {
            backgroundColor: '#AEDDBB',
          },
        }}
      >
        Add To Cart
      </Button>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>

    </>
  );
}

export default Dashbord;

