import React from "react";
import Copy from '../../CopyComponent/CopyComponent';

export default (props: any) => {
  return (<div className="typography">
    <div className="containers" style={{ display: 'flex', margin: "10px 0px 50px", borderBottom: "1px solid #ccc", paddingBlock: "15px" }}>
      <div style={{
        width: '350px',
        fontFamily: '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '12px',
      }}>
        <div style={{ fontWeight: 'bold', fontSize: "16px", margin: "5px 0 5px" }}>{props.name}</div>
        <div style={{ display: 'flex', width: "340px" }}>
          <div style={{ width: '128px', margin: "5px 0 5px" }}>
            <div>
              <div style={{ flexGrow: 1 }}>
                Name
              </div>
              <Copy>{props.tokenName}</Copy>
            </div>
          </div>
          <div style={{ width: '200px', margin: "5px 0 5px" }}>
            <div>
              <div>
                Value
              </div>
              <Copy>{props.borderRadius}</Copy>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        width: "100%",
        display: "table",
        textAlign: "right"
      }}>
        <span style={{
          borderRadius: props.borderRadius,
          border: "1px solid #ccc",
          display: "inline-block",
          verticalAlign: "middle",
          width: "100px",
          height: "100px",
          marginRight: "20px" 
        }}>
        </span>
      </div>
    </div>
  </div>);
}
