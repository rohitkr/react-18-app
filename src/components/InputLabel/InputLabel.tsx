import React from 'react';
import MUIInputLabel from '@material-ui/core/InputLabel';
import tokenObj from '../../tokens/build/json/tokens.json';
import Tooltip from '../Tooltip/Tooltip';
import { InfoCircle } from 'tabler-icons-react'
import { NaviInputLabelProps } from './InputLabel.types';
import './InputLabel.scss';

const InputLabel = ({ label, required, moreInfo, characterLimitText, tooltipPlacement, size }: NaviInputLabelProps) => {
  return (<MUIInputLabel className="navi-input-label">
    <div
      style={{
        wordBreak: "break-word",
        marginRight: `${tokenObj["spacing-2"]}`,
      }}
    >
      <span>
        {label}
        {required && label && (
          <div
            style={{
              display: "inline-block",
              marginLeft: `${tokenObj["spacing-2"]}`,
            }}
          >
            *
          </div>
        )}

        {moreInfo && (
          <div
            style={{
              display: "inline-block",
              marginLeft: `${tokenObj["spacing-2"]}`,
              verticalAlign: "middle",
            }}
          >
            <Tooltip
              position={tooltipPlacement || "top"}
              title={moreInfo}
              size="compact"
              style={{
                paddingTop:
                  size === "large"
                    ? `${tokenObj["spacing-4"]}`
                    : `${tokenObj["spacing-2"]}`,
              }}
            >
              <InfoCircle
                fill={tokenObj["color-secondary-500"]}
                size={16}
                color={`${tokenObj["color-primitive-white"]}`}
                strokeWidth={2.5}
              />
            </Tooltip>
          </div>
        )}
      </span>
    </div>

    {characterLimitText && <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        minWidth: "55px",
        alignItems: "end",
        marginLeft: `${tokenObj["spacing-4"]}`,
        color: `${tokenObj["color-secondary-500"]}`,
      }}
    >
      {characterLimitText}
    </div>}

  </MUIInputLabel>)
}

export default InputLabel;