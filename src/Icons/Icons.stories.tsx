import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as Icons from "./Icons";
import colorObj from '../tokens/build/json/tokens.json';
import { hexToRgb } from '@material-ui/core/styles';
import IconCard from '../components/Box/Box'
import './Icons.stories.scss';

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

const IconStory = (props: any) => {
  return (<div style={{
    margin: '8px',
    alignContent: 'space-between',
    flexDirection: 'row',
    padding: '0.5rem',
    flexWrap: 'wrap',
    display: 'flex',
    font: '500 1rem Inter',
    color: props.textColor,
  }}>
    {props.children}
  </div>)
}

const IconContainer = (props: any) => {
  const [name, setName] = useState(props.name);
  return (<IconCard
    style={{ backgroundColor: props.backgroundColor }}
    className="navi-icon-card"
    onClick={() => {
      copyToClipboard(`
<${props.name} size="${props.size}px" color="${props.color}">
</${props.name}>   
`);

      setName('copied...');
      setTimeout(() => {
        setName(props.name);
      }, 1500);
    }}>
    <div style={{
      alignSelf: 'stretch',
      flexDirection: 'column',
      display: 'flex',
      boxSizing: 'border-box',
    }}>
      <div style={{
        alignSelf: 'stretch',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '135px',
      }}>
        {props.children}
      </div>
      <div style={{
        marginBottom: '0.5rem',
        display: 'block',
        boxSizing: 'border-box',
      }}>
        {name}
      </div>
    </div>
  </IconCard>
  )
}

export default {
  title: `Icons`,
  component: IconStory,
  argTypes: {
    size: {
      defaultValue: '24',
      options: ['16', '20', '24'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: colorObj['button-color-muted-tertiary-label'],
      control: {
        type: 'color',
        presetColors: [
          colorObj['button-color-prime-tertiary-label'],
          colorObj['button-color-success-tertiary-label'],
          colorObj['button-color-critical-tertiary-label'],
          colorObj['button-color-info-tertiary-label'],
          colorObj['button-color-warning-tertiary-label'],
          colorObj['button-color-muted-tertiary-disabled-label'],
        ]
      }
    },
  },
} as ComponentMeta<typeof IconStory>;

const Template: ComponentStory<typeof IconStory> = ({ ...args }) => {
  const rgb: any = hexToRgb(args.color).replace(/rgb\((.*)?\)/g, "$1").split(',');
  let backgroundColor = "#ffffff";
  let textColor = "#686679";
  if ((rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) > 186) {
    backgroundColor = "rgb(121, 141, 160)";
    textColor = "#ffffff";
  }

  return <IconStory {...args} textColor={textColor}>
    <IconContainer name="AddBranch" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AddBranch
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AddListItem" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AddListItem
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Alarm" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Alarm
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AlarmAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AlarmAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Alert" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Alert
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AlertFull" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AlertFull
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AlignCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AlignCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AlignJustify" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AlignJustify
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AlignLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AlignLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AlignRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AlignRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Anchor" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Anchor
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Apple" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Apple
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Apps" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Apps
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Archive" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Archive
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowCircleDown" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowCircleDown
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowCircleLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowCircleLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowCircleRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowCircleRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowCircleTop" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowCircleTop
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowDown" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowDown
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ArrowUp" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ArrowUp
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AspectRatio" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AspectRatio
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Attachment" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Attachment
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AudioNext" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AudioNext
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="AudioPrev" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.AudioPrev
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BatteryCharging" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BatteryCharging
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BatteryEmpty" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BatteryEmpty
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BatteryFull" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BatteryFull
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BatteryLow" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BatteryLow
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BatteryMedium" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BatteryMedium
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Block" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Block
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Bluetooth" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Bluetooth
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Bolt" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Bolt
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Book" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Book
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Bookmark" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Bookmark
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BookmarkAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BookmarkAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BookmarkFull" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BookmarkFull
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderAll" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderAll
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderBottom" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderBottom
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderHorizontal" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderHorizontal
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderInner" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderInner
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderOutline" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderOutline
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderStyle" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderStyle
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderTop" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderTop
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BorderVertical" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BorderVertical
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Branch" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Branch
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BrightnessAuto" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BrightnessAuto
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BrightnessHigh" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BrightnessHigh
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BrightnessLow" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BrightnessLow
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="BrightnessMedium" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.BrightnessMedium
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Bug" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Bug
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Bulb" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Bulb
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Button" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Button
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Calendar" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Calendar
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CalendarAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CalendarAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CalendarDays" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CalendarDays
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CalendarEdit" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CalendarEdit
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CalendarRemove" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CalendarRemove
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CalendarSelectDay" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CalendarSelectDay
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Camera" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Camera
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Car" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Car
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CaretDown" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CaretDown
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CaretLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CaretLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CaretRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CaretRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CaretUp" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CaretUp
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ChartBar" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ChartBar
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ChartPie" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ChartPie
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Chat" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Chat
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Check" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Check
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ChevronDown" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ChevronDown
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ChevronLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ChevronLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ChevronRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ChevronRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ChevronUp" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ChevronUp
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Click" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Click
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Close" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Close
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Cloud" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Cloud
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Code" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Code
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Column2Vertical" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Column2Vertical
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Comment" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Comment
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CommentAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CommentAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Company" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Company
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Copy" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Copy
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="CreditCard" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.CreditCard
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Crop" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Crop
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Dashboard" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Dashboard
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Delete" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Delete
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Desktop" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Desktop
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Difference" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Difference
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Direction" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Direction
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Dns" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Dns
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Dollar" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Dollar
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Download" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Download
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="DragIndicator" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.DragIndicator
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Edit" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Edit
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="EditDetails" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.EditDetails
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Email" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Email
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="EmailAlt" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.EmailAlt
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="EngLangFile" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.EngLangFile
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Equalizer" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Equalizer
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Error" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Error
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Euro" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Euro
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Explore" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Explore
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Extension" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Extension
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Facebook" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Facebook
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="File" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.File
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FileAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FileAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FileEdit" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FileEdit
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FileRemove" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FileRemove
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Filter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Filter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FilterBar" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FilterBar
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Flag" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Flag
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FlipToBack" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FlipToBack
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FlipToFront" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FlipToFront
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Folder" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Folder
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FolderAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FolderAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FolderFill" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FolderFill
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FolderMove" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FolderMove
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatBold" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatBold
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatIndentDecrease" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatIndentDecrease
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatIndentIncrease" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatIndentIncrease
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatItalic" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatItalic
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatLineSpacing" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatLineSpacing
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatStrikethrough" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatStrikethrough
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FormatUnderline" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FormatUnderline
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Franc" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Franc
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Fullscreen" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Fullscreen
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="FullscreenExit" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.FullscreenExit
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Functions" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Functions
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="GateAnd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.GateAnd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="GateOr" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.GateOr
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Globe" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Globe
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Google" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Google
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Gps" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Gps
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="GpsFixed" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.GpsFixed
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="GpsOff" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.GpsOff
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Health" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Health
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Heart" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Heart
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HeartFull" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HeartFull
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Help" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Help
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Home" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Home
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HorizontalAlignCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HorizontalAlignCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HorizontalAlignLeft" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HorizontalAlignLeft
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HorizontalAlignRight" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HorizontalAlignRight
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HourglassEmpty" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HourglassEmpty
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HourglassFull" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HourglassFull
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="HourglassProgress" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.HourglassProgress
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ImportExport" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ImportExport
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Inbox" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Inbox
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Info" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Info
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="InsertEmoticon" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.InsertEmoticon
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Insights" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Insights
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Instagram" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Instagram
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Intersect" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Intersect
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="InvertColor" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.InvertColor
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Key" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Key
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Keyboard" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Keyboard
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="KeyboardKey" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.KeyboardKey
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Label" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Label
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LayerAlignBottomCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LayerAlignBottomCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LayerAlignHorizontal" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LayerAlignHorizontal
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LayerAlignLeftCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LayerAlignLeftCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LayerAlignRightCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LayerAlignRightCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LayerAlignTopCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LayerAlignTopCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LayerAlignVertical" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LayerAlignVertical
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Layers" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Layers
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Link" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Link
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Linkedin" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Linkedin
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ListBullet" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ListBullet
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Loading" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Loading
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="LoadingDots" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.LoadingDots
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Lock" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Lock
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Logout" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Logout
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Map" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Map
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Maximise" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Maximise
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Medium" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Medium
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Menu" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Menu
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Mic" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Mic
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="MicOff" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.MicOff
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Minus" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Minus
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="MinusCircle" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.MinusCircle
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Mobile" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Mobile
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="MoreHor" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.MoreHor
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="MoreVer" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.MoreVer
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Mouse" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Mouse
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Navigation" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Navigation
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="NearMe" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.NearMe
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="NewDocument" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.NewDocument
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Notification" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Notification
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Opacity" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Opacity
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="OpenFolder" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.OpenFolder
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="OpenInBrowser" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.OpenInBrowser
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="OpenInNew" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.OpenInNew
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Padding" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Padding
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Parking" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Parking
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Pause" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Pause
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PauseCircle" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PauseCircle
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Pdf" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Pdf
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Performance" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Performance
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Phone" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Phone
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PhoneCallback" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PhoneCallback
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PhoneForwarded" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PhoneForwarded
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PhoneInTalk" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PhoneInTalk
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PhoneMissed" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PhoneMissed
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PhonePaused" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PhonePaused
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Photo" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Photo
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PhotoAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PhotoAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Photos" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Photos
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Pin" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Pin
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PinFill" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PinFill
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Plane" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Plane
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Play" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Play
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PlayCircle" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PlayCircle
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Plugin" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Plugin
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Plus" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Plus
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="PlusCircle" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.PlusCircle
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Pound" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Pound
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Protect" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Protect
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Publish" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Publish
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Quote" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Quote
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Record" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Record
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Redo" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Redo
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Refresh" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Refresh
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Remove" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Remove
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Reply" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Reply
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Report" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Report
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Return" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Return
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Rotate" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Rotate
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Ruble" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Ruble
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Rule" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Rule
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="RuleList" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.RuleList
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Search" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Search
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="SelectAll" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.SelectAll
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Settings" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Settings
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Share" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Share
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ShoppingCart" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ShoppingCart
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Shuffle" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Shuffle
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Slider" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Slider
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Sort" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Sort
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Star" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Star
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="StarEmpty" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.StarEmpty
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Stopwatch" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Stopwatch
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Substract" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Substract
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Success" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Success
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Suitcase" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Suitcase
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Sync" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Sync
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Tablet" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Tablet
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Tag" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Tag
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="TagFill" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.TagFill
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="TextFields" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.TextFields
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="TextInput" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.TextInput
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ThumbDown" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ThumbDown
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ThumbUp" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ThumbUp
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Ticket" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Ticket
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Time" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Time
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Transaction" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Transaction
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Translate" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Translate
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="TrendingDown" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.TrendingDown
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="TrendingUp" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.TrendingUp
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Trophy" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Trophy
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="TurnOff" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.TurnOff
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Tv" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Tv
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Twitter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Twitter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Undo" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Undo
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="UnfoldLess" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.UnfoldLess
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="UnfoldMore" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.UnfoldMore
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Union" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Union
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Unlink" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Unlink
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Unlock" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Unlock
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Upload" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Upload
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="User" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.User
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="UserAdd" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.UserAdd
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="UserDelete" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.UserDelete
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Users" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Users
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Verified" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Verified
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VerticalAlignBottom" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VerticalAlignBottom
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VerticalAlignCenter" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VerticalAlignCenter
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VerticalAlignTop" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VerticalAlignTop
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Video" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Video
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewBoxes" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewBoxes
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewDay" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewDay
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewLp" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewLp
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewSchedule" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewSchedule
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewSlider" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewSlider
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewTable" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewTable
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewThreeColumns" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewThreeColumns
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewTwoColumns" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewTwoColumns
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ViewWeek" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ViewWeek
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Visibility" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Visibility
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VisibilityOff" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VisibilityOff
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Voice" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Voice
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VolumeMax" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VolumeMax
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VolumeMid" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VolumeMid
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VolumeMin" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VolumeMin
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="VolumeOff" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.VolumeOff
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Wallet" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Wallet
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Warning" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Warning
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Webhook" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Webhook
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Widget" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Widget
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Wifi" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Wifi
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Wrench" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Wrench
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="Yen" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.Yen
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ZoomIn" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ZoomIn
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

    <IconContainer name="ZoomOut" size={args.size} color={args.color} backgroundColor={backgroundColor}>
      <Icons.ZoomOut
        color={args.color}
        size={args.size + 'px'}
      />
    </IconContainer>

  </IconStory>
};

export const Overview = Template.bind({});
Overview.args = {
};
