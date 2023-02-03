interface RootObject {
  children: Children;
  attributes: Attributes;
}
interface Attributes {
  '$base-color': string;
  '$text-heading-01': Textheading01;
  '$text-heading-02': Textheading01;
  '$text-heading-03': Textheading01;
  '$text-heading-04': Textheading01;
  '$text-heading-05': Textheading01;
  '$text-subheading-01': Textheading01;
  '$text-subheading-02': Textheading01;
  '$text-subheading-03': Textheading01;
  '$text-subheading-04': Textheading01;
  '$text-subheading-05': Textheading01;
  '$text-subheading-06': Textheading01;
  '$text-bodytext-01': Textheading01;
  '$text-bodytext-02': Textheading01;
  '$text-bodytext-03': Textheading01;
  '$text-bodytext-04': Textheading01;
  '$text-paragraph-large': Textheading01;
  '$text-paragraph-large-strong': Textheading01;
  '$text-paragraph-medium': Textheading01;
  '$text-paragraph-medium-strong': Textheading01;
  '$text-paragraph-small': Textheading01;
  '$text-paragraph-small-strong': Textheading01;
  '$text-label-large': Textheading01;
  '$text-label-large-moderate': Textheading01;
  '$text-label-medium': Textheading01;
  '$text-label-medium-moderate': Textheading01;
  '$text-label-small': Textheading01;
  '$text-label-small-moderate': Textheading01;
  '$text-button-large': Textheading01;
  '$text-button-small': Textheading01;
}
interface Textheading01 {
  'font-family': string;
  'font-weight': string;
  'font-size': string;
  'line-height': string;
}
interface Children {
}

const dataObj: RootObject = {
  "children": {},
  "attributes": {
    "$base-color": "#ff0000",
    "$text-heading-01": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "34px",
      "line-height": "40px"
    },
    "$text-heading-02": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "30px",
      "line-height": "34px"
    },
    "$text-heading-03": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "26px",
      "line-height": "32px"
    },
    "$text-heading-04": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "24px",
      "line-height": "30px"
    },
    "$text-heading-05": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "22px",
      "line-height": "28px"
    },
    "$text-subheading-01": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "24px",
      "line-height": "32px"
    },
    "$text-subheading-02": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "22px",
      "line-height": "28px"
    },
    "$text-subheading-03": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "20px",
      "line-height": "26px"
    },
    "$text-subheading-04": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "18px",
      "line-height": "24px"
    },
    "$text-subheading-05": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "16px",
      "line-height": "22px"
    },
    "$text-subheading-06": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "14px",
      "line-height": "20px"
    },
    "$text-bodytext-01": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "18px",
      "line-height": "26px"
    },
    "$text-bodytext-02": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "16px",
      "line-height": "24px"
    },
    "$text-bodytext-03": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "14px",
      "line-height": "22px"
    },
    "$text-bodytext-04": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "12px",
      "line-height": "20px"
    },
    "$text-paragraph-large": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "16px",
      "line-height": "26px"
    },
    "$text-paragraph-large-strong": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "16px",
      "line-height": "26px"
    },
    "$text-paragraph-medium": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "14px",
      "line-height": "24px"
    },
    "$text-paragraph-medium-strong": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "14px",
      "line-height": "24px"
    },
    "$text-paragraph-small": {
      "font-family": "Inter",
      "font-weight": "400",
      "font-size": "12px",
      "line-height": "22px"
    },
    "$text-paragraph-small-strong": {
      "font-family": "Inter",
      "font-weight": "700",
      "font-size": "12px",
      "line-height": "22px"
    },
    "$text-label-large": {
      "font-family": "Inter",
      "font-weight": "500",
      "font-size": "16px",
      "line-height": "26px"
    },
    "$text-label-large-moderate": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "16px",
      "line-height": "26px"
    },
    "$text-label-medium": {
      "font-family": "Inter",
      "font-weight": "500",
      "font-size": "14px",
      "line-height": "24px"
    },
    "$text-label-medium-moderate": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "14px",
      "line-height": "24px"
    },
    "$text-label-small": {
      "font-family": "Inter",
      "font-weight": "500",
      "font-size": "12px",
      "line-height": "22px"
    },
    "$text-label-small-moderate": {
      "font-family": "Inter",
      "font-weight": "600",
      "font-size": "12px",
      "line-height": "22px"
    },
    "$text-button-large": {
      "font-family": "Inter",
      "font-weight": "500",
      "font-size": "0.875rem",
      "line-height": "1.25rem"
    },
    "$text-button-small": {
      "font-family": "Inter",
      "font-weight": "500",
      "font-size": "0.75rem",
      "line-height": "1rem"
    }
  }
};

export default dataObj;
  
  