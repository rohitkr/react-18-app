import React from "react";
import "./CopyComponent.css";

function copyToClipboard(textToCopy: string) {
  if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
  } else {
      let textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise<void>((res, rej) => {
          document.execCommand('copy') ? res() : rej();
          textArea.remove();
      });
  }
}

const copyValue = (e: any) => {
  var text = e.target.textContent;
  copyToClipboard(text);
}

export default (props: any) => (<div onClick={copyValue} className="copy-to-clipboard" style={{ flexGrow: 1, fontWeight: 'bold', fontSize: "12px", margin: "5px 0 5px", cursor: "pointer" }} title="Click to copy value" >
  <span>{props.children}</span>
</div>);


