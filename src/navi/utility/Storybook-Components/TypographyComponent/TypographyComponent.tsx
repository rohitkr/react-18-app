import React from "react";
import "./TypographyComponent.css";
import Copy from '../../CopyComponent/CopyComponent';

export default (props: any) => {
  const { styleObj } = props;

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
                Family
              </div>
              <div style={{ flexGrow: 1 }}>{styleObj["font-family"]} ({styleObj["font-weight"]})</div>
            </div>
          </div>
          <div style={{ width: '64px', margin: "5px 0 5px" }}>
            <div>
              <div>
                Size
              </div>
              <div>{styleObj['font-size']}</div>
            </div>
          </div>
          <div style={{ width: '68px', margin: "5px 0 5px" }}>
            <div>
              <div>
                Line height
              </div>
              <div>{styleObj['line-height']}</div>
            </div>
          </div>
        </div>
        <Copy>{props.tokenName}</Copy>

      </div>
      <div style={{
        fontFamily: styleObj['font-family'],
        fontWeight: styleObj['font-weight'],
        lineHeight: styleObj['line-height'],
        fontSize: styleObj['font-size'],
        width: "100%",
        display: "table"
      }}>
        <span style={{  display: "table-cell", verticalAlign: "middle"}}>
          {props.children}
        </span>
      </div>
    </div>
  </div>);
}
