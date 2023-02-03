interface RootObject {
  children: Children;
  attributes: Attributes;
}
interface Attributes {
  '$spacing-xxs': string;
  '$spacing-xs': string;
  '$spacing-s': string;
  '$spacing-m': string;
  '$spacing-l': string;
  '$spacing-xl': string;
}
interface Children {
}

const dataObj: RootObject = {
  "children": {},
  "attributes": {
    "$spacing-xxs": "4px",
    "$spacing-xs": "8px",
    "$spacing-s": "16px",
    "$spacing-m": "24px",
    "$spacing-l": "48px",
    "$spacing-xl": "96px"
  }
};

export default dataObj;
  
  