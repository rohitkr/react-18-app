import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import IconButton from '../navi/components/IconButton/IconButton';
import ClearIcon from "@material-ui/icons/Clear";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowBackOutlined from "@material-ui/icons/ArrowBackOutlined";
import { InputAdornment } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPersonName(event.target.value as string[]);
  };


  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label" onClick={() => { setPersonName([]) }}>Chip</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          open={open}
          value={personName}
          onChange={handleChange}
          style={{ minWidth: "300px" }}
          input={<Input id="select-multiple-chip" />}
          // IconComponent={ArrowBackOutlined}
          inputProps={{ IconComponent: () => null }} // this part
          onClose={() => {
            setOpen(false);
          }}
          onOpen={() => {
            setOpen(true);
          }}
          endAdornment={
            <InputAdornment position="start" style={{ marginRight: "0px" }}>
              <IconButton
                // position="start"
                // style={{ marginRight: "20px" }}
                size="small"
                variant="tertiary"
                intent="muted"
                style={{ display: personName.length ? "block" : "none", marginRight: "0px" }}
                title={"Clear"}
                onClick={() => {
                  setPersonName([]);
                }}
              >
                <ClearIcon />
              </IconButton>
              <IconButton
                size="small"
                variant="tertiary"
                intent="muted"
                style={{ marginRight: "0px", transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}` }}
                title={"Open"}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <ArrowDropDown />
              </IconButton>
            </InputAdornment>
          }

          // endAdornment={
          //   <IconButton
          //     size="small"
          //     variant="tertiary"
          //     intent="muted"
          //     style={{ display: setPersonName.length ? "block" : "none" }}
          //     title={"Clear"}
          //     onClick={() => {
          //       // window.update = setSelectValue;
          //       setPersonName([]);
          //     }}
          //   >
          //     <ClearIcon />
          //   </IconButton>
          // }
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}