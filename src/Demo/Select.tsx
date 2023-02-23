import React from "react";
import { Box, Tag as Chip, Select, DividerMenuItem, DescriptiveMenuItem, GroupHeadingMenuItem } from "../navi";
import { Pencil, Movie, Tag as TagIcon } from "tabler-icons-react";
import { SelectDataProps } from "../navi/components/Select/Select.types";
import { makeStyles, Theme, createStyles, MenuItem, Select as MuiSelect } from "@material-ui/core";


let data = [
  {
    title: "The Shawshank Redemption",
    description: "1994",
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "The Godfather",
    description: "1972",
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "The Godfather: Part II",
    description: "1974",
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
    disabled: true,
    checked: true,
  },
  {
    title: "The Dark Knight",
    description: "2008",
    checked: true,
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "12 Angry Men",
    description: "1957",
    checked: true,
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "Schindler's List",
    description: "1993",
    checked: true,
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "Pulp Fiction",
    description: "1994",
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    description: "2003",
  },
  { title: "The Good, the Bad and the Ugly", description: "1966" },
  { title: "Fight Club", description: "1999" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description: "2001",
  },
];

let menuData = [
  {
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect x="-1" width="38" height="38" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_10391_4640" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_10391_4640"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    ),
    title: "Himanshu Pathak",
    description: "P.L.E.A.S.E.",
  },
  {
    divider: true,
  },
  {
    title: "Analytics",
  },
  {
    title: "Video Channel",
  },
  {
    title: "Configure Voiceover",
  },
  {
    title: "Manage repositories",
  },
  {
    divider: true,
  },
  {
    title: "Languages",
  },
  {
    title: "API Token",
  },
  {
    title: "Configuration",
  },
  {
    title: "Custom Labels",
  },
  {
    title: "Change Password",
  },
  {
    title: "Logout",
    trailingIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6667 6.66658V4.99992C11.6667 4.55789 11.4911 4.13397 11.1785 3.82141C10.866 3.50885 10.442 3.33325 10 3.33325H4.16667C3.72464 3.33325 3.30072 3.50885 2.98816 3.82141C2.67559 4.13397 2.5 4.55789 2.5 4.99992V14.9999C2.5 15.4419 2.67559 15.8659 2.98816 16.1784C3.30072 16.491 3.72464 16.6666 4.16667 16.6666H10C10.442 16.6666 10.866 16.491 11.1785 16.1784C11.4911 15.8659 11.6667 15.4419 11.6667 14.9999V13.3332M5.83333 9.99992H17.5M17.5 9.99992L15 7.49992M17.5 9.99992L15 12.4999"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
    chip: {
      margin: 2,
    },
  })
);

export default ({ ...args }) => {

  return (
    <div>
      <Select
        open={false}
        multiSelect
        selectAll={false}
        size="large"
        maxWidth={250}
        minWidth={400}
        dataTestId="select-component"
        inputProps={{
          label: "Single Select",
          errorMessage: "",
          helperText: "",
          maxCharacters: 100,
          minWidth: 600,
          moreInfo: "",
          required: true,
          size: "large",
          successMessage: "",
          tooltipPlacement: "top",
          inputType: "default",
        }}
        // value={"6"}
        clearTooltipText={"Clear Data"}
        openTooltipText={"Open Menu"}
      >
        <DescriptiveMenuItem
          value={"1"}
          title={"One"}
          selectable={true}
        />
        <DescriptiveMenuItem
          value={"2"}
          title={"Two"}
          selectable={true}
        />
        <DescriptiveMenuItem
          value={"3"}
          title={"Three"}
          selectable={true}
        />
        <DescriptiveMenuItem
          value={"4"}
          title={"Four"}
          selectable={true}
        />
      </Select>


      <MuiSelect
        value="7"
      >
        <MenuItem value="5">Menu Item 5</MenuItem>
        <MenuItem value="6">Menu Item 6</MenuItem>
        <MenuItem value="7">Menu Item 7</MenuItem>
        <MenuItem value="8">Menu Item 8</MenuItem>
        <MenuItem value="9">Menu Item 9</MenuItem>
      </MuiSelect>




      <br />
    </div>
  );
};
