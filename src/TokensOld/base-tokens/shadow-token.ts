interface RootObject {
  children: Children;
  attributes: Attributes;
}
interface Attributes {
  '$elevation-01': string;
  '$elevation-02': string;
  '$elevation-03': string;
  '$elevation-04': string;
  '$elevation-05': string;
  '$elevation-06': string;
  '$border-radius-none': string;
  '$border-radius-small': string;
  '$border-radius-medium': string;
  '$border-radius-large': string;
  '$border-radius-full': string;
  '$border-width-none': string;
  '$border-width-small': string;
  '$border-width-medium': string;
  '$border-width-large': string;
}
interface Children {
}

const dataObj: RootObject = {
  "children": {},
  "attributes": {
    "$elevation-01": "0.0px 2.0px 4.0px 0px rgba(0, 0, 0, 0.12),0.0px 1.0px 4.0px 0px rgba(0, 0, 0, 0.16)",
    "$elevation-02": "0.0px 2.0px 6.0px 0px rgba(0, 0, 0, 0.18),0.0px 3.0px 8.0px 0px rgba(0, 0, 0, 0.14)",
    "$elevation-03": "0.0px 4.0px 12.0px 0px rgba(0, 0, 0, 0.18),0.0px 6.0px 20.0px 0px rgba(0, 0, 0, 0.14)",
    "$elevation-04": "0.0px 6.0px 20.0px 0px rgba(0, 0, 0, 0.14),0.0px 8.0px 26.0px 0px rgba(0, 0, 0, 0.12)",
    "$elevation-05": "0.0px 6.0px 18.0px 0px rgba(0, 0, 0, 0.1),0.0px 8.0px 24.0px 0px rgba(0, 0, 0, 0.1),0.0px 4.0px 24.0px 8.0px rgba(0, 0, 0, 0.08)",
    "$elevation-06": "0.0px 6.0px 22.0px 4.0px rgba(0, 0, 0, 0.12),0.0px 8.0px 28.0px 4.0px rgba(0, 0, 0, 0.1),0.0px 4.0px 30.0px 10.0px rgba(0, 0, 0, 0.08)",
    "$border-radius-none": "none",
    "$border-radius-small": "4px",
    "$border-radius-medium": "8px",
    "$border-radius-large": "12px",
    "$border-radius-full": "36px",
    "$border-width-none": "0px",
    "$border-width-small": "1px",
    "$border-width-medium": "2px",
    "$border-width-large": "4px"
  }
};

export default dataObj;
  
  