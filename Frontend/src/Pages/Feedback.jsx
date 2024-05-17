import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import TextField from "@mui/material/TextField";


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Feedback() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
  <div className="container">
      <div className="hero-section" style={{ textAlign: "left" }}>
        <h1>Feedback!!!!</h1>
        <p>Drop you feedback here</p>
        <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "1", marginBottom: "10%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="FeedBack"
          multiline
          maxRows={12}
        />
      </Box>
    </div>

      
  );
}