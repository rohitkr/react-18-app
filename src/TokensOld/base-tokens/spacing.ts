interface RootObject {
  children: Children;
  attributes: Attributes;
}
interface Attributes {
  '$spacing-0': string;
  '$spacing-2': string;
  '$spacing-4': string;
  '$spacing-8': string;
  '$spacing-12': string;
  '$spacing-16': string;
  '$spacing-24': string;
  '$spacing-32': string;
  '$spacing-40': string;
  '$spacing-48': string;
  '$spacing-64': string;
  '$spacing-72': string;
}
interface Children {
}

const dataObj: RootObject = {
  "children": {},
  "attributes": {
    "$spacing-0": "0rem",
    "$spacing-2": ".125rem",
    "$spacing-4": ".25rem",
    "$spacing-8": ".5rem",
    "$spacing-12": ".75rem",
    "$spacing-16": "1rem",
    "$spacing-24": "1.5rem",
    "$spacing-32": "2rem",
    "$spacing-40": "2.5rem",
    "$spacing-48": "3rem",
    "$spacing-64": "4rem",
    "$spacing-72": "4.5rem"
  }
};

export default dataObj;
  
  