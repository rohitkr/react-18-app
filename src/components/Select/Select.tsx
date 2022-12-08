import * as React from "react";
import {
  styled,
  Box,
  Popper,
  Checkbox,
  TextField,
  // Autocomplete,
  Divider,
  ClickAwayListener,
  // AutocompleteCloseReason
} from "@material-ui/core";
import {
  Autocomplete,
  AutocompleteCloseReason,
} from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InputLabel from '../InputLabel/InputLabel';
import { InputBase } from "@material-ui/core";
import './Select.scss';
import { makeStyles } from "@material-ui/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const PopperStyledComponent = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.type === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"}`
}));


interface valueObj { title: string, year: number };

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films: valueObj[] = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 }
];
const emptyValue: valueObj[] = [];

const useStyle = makeStyles({
  root: {
    border: '2px solid #0000ff'
  }
});

export default function CheckboxesTags() {
  const [value, setValue] = React.useState(emptyValue);
  const [checkAll, setCheckAll] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const checkAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckAll(event.target.checked);
    if (event.target.checked) {
      setValue(top100Films);
    } else {
      setValue([]);
    }
  };

  const handleClickAway = () => {
    console.log("Handle Click Away");
    setOpen(false);
  };

  const classes = useStyle();

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box>
        <InputLabel label={"Label for the Select"} required={true} moreInfo={"This is the more info text"} characterLimitText={"30/40"} tooltipPlacement={"top"} size={"small"} />
        <Autocomplete
          multiple
          disableCloseOnSelect
          limitTags={3}
          id="checkboxes-tags-demo"
          options={top100Films}
          value={value}
          open={open}
          onChange={(event, newValue, reason) => {
            if (reason === "select-option") {
              setValue(newValue);
            } else if (reason === "remove-option") {
              setCheckAll(false);
              setValue(newValue);
            } else if (reason === "clear") {
              setValue([]);
              setCheckAll(false);
            }
          }}
          onClose={(e: any, reason: AutocompleteCloseReason) => {
            console.log("On Close: ", reason);
            if (reason === "escape") {
              setOpen(false);
            }
          }}
          onOpen={() => {
            setOpen(true);
          }}

          // PopperComponent={ (children, ...param) => {
          //   console.log("param: ", param);
          //   return <div>{children}</div>
          // }}

          // PopperComponent={(param) => {
          //   console.log("param: ", param);
          //   return (
          //     // <div>{""}</div>
          //     // <Popper children={param.children} open={true}></Popper>
          //     // <PopperStyledComponent  {...param} />
          //     <PopperStyledComponent  {...param} >
          //       <Box>
          //         {/* {param.children} */}
          //         <Box />
          //         <Divider />
          //         <Box
          //           style={{
          //             backgroundColor: "white",
          //             height: "45px",
          //             textOverflow: "ellipsis",
          //             overflow: "hidden",
          //             whiteSpace: "nowrap"
          //           }}
          //         >
          //           <Checkbox
          //             checked={checkAll}
          //             onChange={checkAllChange}
          //             id="check-all"
          //             style={{ marginRight: "8px" }}
          //             onMouseDown={(e) => e.preventDefault()}
          //           />
          //           Select All
          //         </Box>
          //       </Box>
          //     </PopperStyledComponent>
          //   )
          // }}
          getOptionLabel={(option) => option.title}
          renderOption={(option, data) => {
            console.log("opt: ", data);
            return (<li {...option}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={data.selected}
              />
              {option.title}
            </li>)
          }
          }

          // renderOption={(props, option, { selected }) => (
          //   <li {...props}>
          //     <Checkbox
          //       icon={icon}
          //       checkedIcon={checkedIcon}
          //       style={{ marginRight: 8 }}
          //       checked={selected || checkAll}
          //     />
          //     {option.title}
          //   </li>
          // )}
          style={{ width: "100%" }}
          renderInput={props => {
            console.log(props);
            return (
              <TextField
                classes={classes}
                className="auto-complete-input"
                {...props}
                variant="outlined"
              />
            )
          }}
        />
      </Box>
    </ClickAwayListener>
  );
}
