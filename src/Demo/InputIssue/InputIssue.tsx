import React from "react";
import {Input} from '../../navi';
import './InputIssue.scss';


export default function AutocompleteControlled() {  
  return (
    <div
      style={{
        textAlign: "left",
        margin: "auto",
        paddingTop: "50px",
        height: "1500px",
      }}
    >
      <div style={{ height: "100px" }}>
      </div>
      <div>
        <Input className="extra-width"
          maxCharacters={100}
          type="default"
          // onChange={handleInputChange}
          inputType="default"
          // value={folderName}
          // onPaste={handleOnPasteChange}
          placeholder={`some place holder`}></Input>
      </div>
    </div>
  );
}
