import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectProps } from '@material-ui/core/Select';
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

export default function ClearSelect() {
  const [score, setScore] = useState('');
  const handleClearClick = () => {
    setScore('');
  };

  const scoreData = ["100", "90", "80", "70", "60", "50", "40", "30"];

  const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    setScore(`${event?.target?.value}`);
  };

  return (
    <div>
      {score.length ? <InputLabel id="custom-select-label">Score</InputLabel> : ''}
      <Select
        labelId="clearable-select-label"
        label={score.length ? "Score" : ""}
        id="clearable-select"
        value={score}
        onChange={(e) => { handleChange(e) }}
        // multiple
        displayEmpty
        // sx={{"& .MuiSelect-iconOutlined": {display: score? 'none': ''}, "&.Mui-focused .MuiIconButton-root": {color: 'primary.main'}}}
        renderValue={(value) => value ? <div>value</div> : <em>Nothing Selected</em>}
        endAdornment={<IconButton style={{ visibility: score ? "visible" : "hidden" }} onClick={handleClearClick}><ClearIcon /></IconButton>}
      >
        {scoreData.map((scoreValue, i) => {
          return <MenuItem key={i} value={scoreValue}>{scoreValue}</MenuItem>
        })}
      </Select>
    </div>
  );
}