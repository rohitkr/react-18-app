import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import Box from "../Box/Box";
import Select from "./Select";
import { Pencil, Movie, CaretDown } from "tabler-icons-react";
import { SelectDataProps } from "./Select.types";
import DividerMenuItem from "../DividerMenuItem/DividerMenuItem";
import DescriptiveMenuItem from "../DescriptiveMenuItem/DescriptiveMenuItem";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import GroupHeadingMenuItem from "../GroupHeadingMenuItem/GroupHeadingMenuItem";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Divider from "../Divider/Divider";

export default {
  title: `Components/Select`,
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

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
    // selected: true,
  },
  {
    title: "The Dark Knight",
    description: "2008",
    // selected: true,
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "12 Angry Men",
    description: "1957",
    // selected: true,
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "Schindler's List",
    description: "1993",
    // selected: true,
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
  // {
  //   title: "Star Wars: Episode V - The Empire Strikes Back",
  //   description: "1980",
  // },
  // { title: "Forrest Gump", description: "1994" },
  // { title: "Inception", description: "2010" },
  // {
  //   title: "The Lord of the Rings: The Two Towers",
  //   description: "2002",
  // },
  // { title: "One Flew Over the Cuckoo's Nest", description: "1975" },
  // { title: "Goodfellas", description: "1990" },
  // { title: "The Matrix", description: "1999" },
  // { title: "Seven Samurai", description: "1954" },
  // {
  //   title: "Star Wars: Episode IV - A New Hope",
  //   description: "1977",
  // },
  // { title: "City of God", description: "2002" },
  // { title: "Se7en", description: "1995" },
  // { title: "The Silence of the Lambs", description: "1991" },
  // { title: "It's a Wonderful Life", description: "1946" },
  // { title: "Life Is Beautiful", description: "1997" },
  // { title: "The Usual Suspects", description: "1995" },
  // { title: "Léon: The Professional", description: "1994" },
  // { title: "Spirited Away", description: "2001" },
  // { title: "Saving Private Ryan", description: "1998" },
  // { title: "Once Upon a Time in the West", description: "1968" },
  // { title: "American History X", description: "1998" },
  // { title: "Interstellar", description: "2014" },
];

let trendInsight = [
  {
    title: "Trend insight",
    description: "Understand the performance",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M23 12.1667L25.5 14.6667M25.5 14.6667L23 17.1667M25.5 14.6667H22.6692C21.9992 14.6668 21.3392 14.8284 20.745 15.1378C20.1508 15.4472 19.64 15.8954 19.2558 16.4442L15.9108 21.2226C15.5267 21.7714 15.0159 22.2196 14.4217 22.529C13.8275 22.8384 13.1674 23 12.4975 23.0001H10.5"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Funnel Insight",
    description: "Understand the journey",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M12.5833 12.1667H23.4166C23.5366 12.2088 23.6454 12.2778 23.7347 12.3685C23.8239 12.4591 23.8912 12.5689 23.9314 12.6896C23.9716 12.8103 23.9837 12.9385 23.9667 13.0646C23.9497 13.1906 23.9041 13.3111 23.8333 13.4167L19.6666 18.0001V23.8334L16.3333 21.3334V18.0001L12.1666 13.4167C12.0959 13.3111 12.0502 13.1906 12.0332 13.0646C12.0162 12.9385 12.0283 12.8103 12.0685 12.6896C12.1087 12.5689 12.176 12.4591 12.2653 12.3685C12.3545 12.2778 12.4633 12.2088 12.5833 12.1667Z"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Out-of-the-box matrix",
    description: "Understand the usage",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M24.2602 10.4999L18.8787 22.8228H18.7889L18.2183 17.7255L15.4025 24.0241L15.6012 25.4988H21.2948L28 10.4999H24.2602Z"
          fill="#F55800"
        />
        <path
          d="M18.2162 17.7263H18.2169L21.4468 10.5013H17.7069L12.3255 22.8243H12.2357L11.6497 17.7269H8L9.04798 25.5002H14.7416L15.4011 24.0249L14.5518 17.7263H18.2162Z"
          fill="#FFA450"
        />
        <path
          d="M18.2146 17.7266H14.5496L15.3988 24.0252L18.2022 17.754L18.2146 17.7266Z"
          fill="#C63D22"
        />
      </svg>
    ),
  },
  {
    groupHeading: true,
    title: "Storybuilding",
  },
  {
    title: "Description",
    description: "Add for better understanding",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M19.6666 10.5V13.8333C19.6666 14.0543 19.7544 14.2663 19.9107 14.4226C20.067 14.5789 20.2789 14.6667 20.5 14.6667H23.8333M19.6666 10.5H13.8333C13.3913 10.5 12.9673 10.6756 12.6548 10.9882C12.3422 11.3007 12.1666 11.7246 12.1666 12.1667V23.8333C12.1666 24.2754 12.3422 24.6993 12.6548 25.0118C12.9673 25.3244 13.3913 25.5 13.8333 25.5H22.1666C22.6087 25.5 23.0326 25.3244 23.3451 25.0118C23.6577 24.6993 23.8333 24.2754 23.8333 23.8333V14.6667M19.6666 10.5L23.8333 14.6667M15.5 22.1667H20.5M15.5 18.8333H20.5"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Story",
    description: "Add to summarise the insights",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M18 23.8335C16.8599 23.1752 15.5665 22.8287 14.25 22.8287C12.9335 22.8287 11.6401 23.1752 10.5 23.8335V13.0002C11.6401 12.3419 12.9335 11.9954 14.25 11.9954C15.5665 11.9954 16.8599 12.3419 18 13.0002M18 23.8335C19.1401 23.1752 20.4335 22.8287 21.75 22.8287C23.0665 22.8287 24.3599 23.1752 25.5 23.8335V13.0002C24.3599 12.3419 23.0665 11.9954 21.75 11.9954C20.4335 11.9954 19.1401 12.3419 18 13.0002M18 23.8335V13.0002"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];


const CodeBlock = (props: any) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<CaretDown />} aria-controls="code-panel">
        <Typography
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
          }}
        >
          Show Code
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box style={{ textAlign: "left" }}>
          <SyntaxHighlighter language="javascript" style={docco}>
            {props.children}
          </SyntaxHighlighter>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export const Overview: ComponentStory<typeof Select> = ({ ...args }) => {
  const [personaVal, setPersonaVal] = React.useState<string[]>([]);

  return (
    <Box style={{ fontFamily: "Inter" }}>
      <h1>Overview</h1>
      <p>Navi Select Component</p>
      <p>
        Select components are used for collecting user provided information from a list of options.
        The Select component can handle multiple selections. It's enabled with the multiple prop        
      </p>
      <Box
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8px",
        }}
      >
        <Select
          open={false}
          multiSelect={false}
          selectAll={false}
          value={personaVal}
          size="large"
          onChange={(value) => {
            setPersonaVal(value);
          }}
          dataTestId="select-component"
          inputProps={{
            label: "Single Select",
            errorMessage: "",
            helperText: "",
            // maxCharacters: 100,
            minWidth: 600,
            moreInfo: "",
            required: true,
            size: "large",
            successMessage: "",
            tooltipPlacement: "top",
            inputType: "default",
          }}
          clearTooltipText={"Clear Data"}
          openTooltipText={"Open Menu"}
        >
          {trendInsight &&
            trendInsight.map(
              ({ title = "", avatar, type, ...val }: SelectDataProps, i) => {
                if (val.groupHeading) {
                  return <GroupHeadingMenuItem key={i} title={title} />;
                } else if (val.divider) {
                  return <DividerMenuItem key={i} />;
                }
                return (
                  <DescriptiveMenuItem
                    key={i}
                    value={title}
                    title={title}
                    selected={false}
                    selectable={true}
                    {...val}
                  />
                );
              }
            )}
        </Select>
      </Box>
      <CodeBlock>
        {`import React from "react";
import {
  Select,
  DividerMenuItem,
  DescriptiveMenuItem,
  GroupHeadingMenuItem
} from "../navi";

let trendInsight = [
  {
    title: "Trend insight",
    description: "Understand the performance",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M23 12.1667L25.5 14.6667M25.5 14.6667L23 17.1667M25.5 14.6667H22.6692C21.9992 14.6668 21.3392 14.8284 20.745 15.1378C20.1508 15.4472 19.64 15.8954 19.2558 16.4442L15.9108 21.2226C15.5267 21.7714 15.0159 22.2196 14.4217 22.529C13.8275 22.8384 13.1674 23 12.4975 23.0001H10.5"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Funnel Insight",
    description: "Understand the journey",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M12.5833 12.1667H23.4166C23.5366 12.2088 23.6454 12.2778 23.7347 12.3685C23.8239 12.4591 23.8912 12.5689 23.9314 12.6896C23.9716 12.8103 23.9837 12.9385 23.9667 13.0646C23.9497 13.1906 23.9041 13.3111 23.8333 13.4167L19.6666 18.0001V23.8334L16.3333 21.3334V18.0001L12.1666 13.4167C12.0959 13.3111 12.0502 13.1906 12.0332 13.0646C12.0162 12.9385 12.0283 12.8103 12.0685 12.6896C12.1087 12.5689 12.176 12.4591 12.2653 12.3685C12.3545 12.2778 12.4633 12.2088 12.5833 12.1667Z"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Out-of-the-box matrix",
    description: "Understand the usage",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M24.2602 10.4999L18.8787 22.8228H18.7889L18.2183 17.7255L15.4025 24.0241L15.6012 25.4988H21.2948L28 10.4999H24.2602Z"
          fill="#F55800"
        />
        <path
          d="M18.2162 17.7263H18.2169L21.4468 10.5013H17.7069L12.3255 22.8243H12.2357L11.6497 17.7269H8L9.04798 25.5002H14.7416L15.4011 24.0249L14.5518 17.7263H18.2162Z"
          fill="#FFA450"
        />
        <path
          d="M18.2146 17.7266H14.5496L15.3988 24.0252L18.2022 17.754L18.2146 17.7266Z"
          fill="#C63D22"
        />
      </svg>
    ),
  },
  {
    groupHeading: true,
    title: "Storybuilding",
  },
  {
    title: "Description",
    description: "Add for better understanding",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M19.6666 10.5V13.8333C19.6666 14.0543 19.7544 14.2663 19.9107 14.4226C20.067 14.5789 20.2789 14.6667 20.5 14.6667H23.8333M19.6666 10.5H13.8333C13.3913 10.5 12.9673 10.6756 12.6548 10.9882C12.3422 11.3007 12.1666 11.7246 12.1666 12.1667V23.8333C12.1666 24.2754 12.3422 24.6993 12.6548 25.0118C12.9673 25.3244 13.3913 25.5 13.8333 25.5H22.1666C22.6087 25.5 23.0326 25.3244 23.3451 25.0118C23.6577 24.6993 23.8333 24.2754 23.8333 23.8333V14.6667M19.6666 10.5L23.8333 14.6667M15.5 22.1667H20.5M15.5 18.8333H20.5"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Story",
    description: "Add to summarise the insights",
    leadingIcon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="18" fill="#F6F6F9" />
        <path
          d="M18 23.8335C16.8599 23.1752 15.5665 22.8287 14.25 22.8287C12.9335 22.8287 11.6401 23.1752 10.5 23.8335V13.0002C11.6401 12.3419 12.9335 11.9954 14.25 11.9954C15.5665 11.9954 16.8599 12.3419 18 13.0002M18 23.8335C19.1401 23.1752 20.4335 22.8287 21.75 22.8287C23.0665 22.8287 24.3599 23.1752 25.5 23.8335V13.0002C24.3599 12.3419 23.0665 11.9954 21.75 11.9954C20.4335 11.9954 19.1401 12.3419 18 13.0002M18 23.8335V13.0002"
          stroke="#6B697B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
interface SelectDataProps {
  title?: string;
  description?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  value?: string | number;
  checked?: boolean;
  type?: "divider" | "select";
  divider?: boolean;
  groupHeading?: boolean;
  disabled?: boolean;
}

export default () => {
  const [personaVal, setPersonaVal] = React.useState<string[]>([]);

  return (
    <Select
      open={false}
      multiSelect={false}
      selectAll={false}
      value={personaVal}
      size="large"
      maxWidth={250}
      minWidth={400}
      onChange={(value) => {
        setPersonaVal(value);
      }}
      dataTestId="select-component"
      inputProps={{
        label: "Single Select",
        errorMessage: "",
        helperText: "",
        // maxCharacters: 100,
        minWidth: 600,
        moreInfo: "",
        required: true,
        size: "large",
        successMessage: "",
        tooltipPlacement: "top",
        inputType: "default",
      }}
      clearTooltipText={"Clear Data"}
      openTooltipText={"Open Menu"}
    >
      {trendInsight &&
        trendInsight.map(
          ({ title = "", avatar, type, ...val }: SelectDataProps, i) => {
            if (val.groupHeading) {
              return <GroupHeadingMenuItem key={i} title={title} />;
            } else if (val.divider) {
              return <DividerMenuItem key={i} />;
            }
            return (
              <DescriptiveMenuItem
                key={i}
                value={title}
                title={title}
                selected={false}
                selectable={true}
                {...val}
              />
            );
          }
        )}
    </Select>)
}
      `}
      </CodeBlock>
      <Divider orientation="horizontal" />
      <h3>Select with Multiple selection options</h3>
      <p>Example of using the Select to select multiple options. `multiple={true}` props name</p>
      <Box
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8px",
        }}
      >
        <Select
          multiSelect={true}
          selectAll={true}
          size="large"
          onChange={(updatedValue) => {
            console.log(updatedValue);
          }}
          maxWidth={450}
          minWidth={400}
          width="400px"
          renderValueAsTag
          tagProps={{
            variant: "neutral",
          }}
          label="MultiSelect Select Movies with Chip"
          placeholder="Input Place holder text"
          moreInfo="More information text"
          successMessage="Success message"
          helperText="Helper text"
          clearTooltipText={"Clear Data"}
          openTooltipText={"Open Menu"}
        >
          {data &&
            data.map(
              ({ title = "", avatar, type, ...val }: SelectDataProps, i) => {
                return val.divider ? (
                  <DividerMenuItem />
                ) : (
                  <DescriptiveMenuItem
                    key={i}
                    value={title}
                    title={title}
                    selectable={true}
                    {...val}
                  />
                );
              }
            )}
        </Select>
      </Box>
      <CodeBlock>
        {`import React from "react";
import {
  Select,
  DividerMenuItem,
  DescriptiveMenuItem
} from "../navi";
import { Pencil, Movie } from "tabler-icons-react";

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
  },
  {
    title: "The Dark Knight",
    description: "2008",
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "12 Angry Men",
    description: "1957",
    trailingIcon: <Pencil />,
    leadingIcon: <Movie />,
  },
  {
    title: "Schindler's List",
    description: "1993",
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
  }
];
interface SelectDataProps {
  title?: string;
  description?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  value?: string | number;
  checked?: boolean;
  type?: "divider" | "select";
  divider?: boolean;
  groupHeading?: boolean;
  disabled?: boolean;
}

export default () => {
  const [personaVal, setPersonaVal] = React.useState<string[]>([]);

  return (
    <Select
      multiSelect={true}
      selectAll={true}
      size="large"
      onChange={(updatedValue) => {
        console.log(updatedValue);
      }}
      width="auto"
      maxHeight={140}
      minWidth={400}
      renderValueAsTag
      tagProps={{
        variant: "neutral",
      }}
      label="MultiSelect Select Movies with Chip"
      placeholder="Input Place holder text"
      moreInfo="More information text"
      successMessage="Success message"
      helperText="Helper text"
      clearTooltipText={"Clear Data"}
      openTooltipText={"Open Menu"}
    >
      {data &&
        data.map(
          ({ title = "", avatar, type, ...val }: SelectDataProps, i) => {
            return val.divider ? (
              <DividerMenuItem />
            ) : (
              <DescriptiveMenuItem
                key={i}
                value={title}
                title={title}
                selectable={true}
                {...val}
              />
            );
          }
        )}
    </Select>)
}
        `}
      </CodeBlock>

    </Box>

  );
};
