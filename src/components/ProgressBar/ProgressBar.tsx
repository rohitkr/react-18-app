import React, { useEffect } from "react";
import { ProgressBarProps } from "./ProgressBar.types";
import Box from '../Box/Box';
import Typography from '@material-ui/core/Typography';
import "./ProgressBar.scss";

const DEFAULT_VALUES: ProgressBarProps = {
  labelPosition: 'top',
  intent: 'info'
}
const ANIM_DURATION = 0.4;

// Function to sanitize the props
const sanitizeProps = (props: ProgressBarProps) => {
  const updatedProps = { ...props };
  let progressType = props.type === 'step' ? 'completion' : props.progressType;
  return Object.assign(updatedProps, {
    progressType,
    percentageLabel: progressType === 'loading' ? false : props.percentageLabel,
    value: Math.max((props.value || 0), 0),
    maxValue: (props.type === 'step' || props.progressType === 'loading') ?
      100 : Number((props.maxValue || 100)),
    stepCount: Math.max(Math.min((props.stepCount || 0), 10), 0)
  });
}

interface LinearProgProps extends ProgressBarProps {
  transitionDelay?: string;
  lastElement?: boolean;
}

const LinearProgressBar = ({ type, progressType, intent, value = 0, size = 'large', ...props }: LinearProgProps) => {
  const useGradientAnimation = progressType === 'loading' && type !== 'step';
  let className = useGradientAnimation ? `loading-progress-bar-animation ${intent}-gradient` : intent;
  if (type === 'step' && props.lastElement) {
    className += ' step-progress-bar-animation';
  }

  return (
    <Box className={`progressbar-container-main size-${size}`}>
      <Box
        className={`${className}  progressbar-fill`}
        style={{
          transitionDelay: props.transitionDelay,
          width: `${value}%`,
        }} />
    </Box>
  );
}

// Hook to get the previous value
function usePrevious<T>(value: T): T {
  const ref: any = React.useRef<number>();
  // Store current value in ref
  useEffect(() => {
    // runs only if the value changed
    ref.current = value;
  }, [value]);
  return ref.current;
}

const ProgressBar = ({
  label = '',
  labelPosition = DEFAULT_VALUES.labelPosition,
  ...restProps
}: ProgressBarProps) => {
  const props = sanitizeProps(restProps);
  const value = Number(props.value);
  const flexProperties: React.CSSProperties = {
    flexDirection: 'row',
    alignItems: 'center'
  }

  const stepCount = Number(props.stepCount);

  // Calculate the label text to display
  let labelText = label;
  let percentLabelText = ((props.stepLabel && props.progressType !== 'loading') ?
    `${value}/${props.maxValue}` :
    props.percentageLabel ? `${Math.round(value / props.maxValue * 100)}%` : ''
  );
  const stepLabelText = props.percentageLabel ? `${Math.round(value / stepCount * 100)}%` : '';
  if (props.type === 'step') {
    percentLabelText = props.stepLabel ? `${value}/${stepCount}` : stepLabelText;
  }

  let stepProgressBar;
  // Get the previous value (was passed into hook on last render)
  const prevValue: number = usePrevious<number>((value));
  const showStepProgress = (props.type === 'step' && stepCount > 1);
  let animDuration = ANIM_DURATION;

  // Calculate the animation duration for step progressbar
  if (showStepProgress) {
    // Find number of step progress which will be animating
    let animElementCount = Math.abs(value - prevValue) || 1;
    animDuration = ANIM_DURATION / animElementCount;
  }

  stepProgressBar = [<LinearProgressBar
    key={1}
    {...props}
    value={props.progressType === 'loading' ? 100 : Math.round(value / props.maxValue * 100)}
  />];
  if (showStepProgress) {
    stepProgressBar = Array.from(Array(stepCount || 0), (i, k) => {
      return <LinearProgressBar
        {...props}
        transitionDelay={(Math.abs(k - prevValue) * animDuration) + 's'}
        key={k}
        lastElement={(Math.floor(value) === k)}
        value={Math.floor(value) < k ? 0 : 100}
      />
    });
  }

  return (
    <Box className={"navi-progressbar-root"}>
      {labelPosition === 'top' ? (typeof labelText == 'string' ?
        <Box>
          <Typography className={'progressbar-label'} >
            {labelText}
          </Typography>
        </Box>
        :
        labelText) : null}
      <Box style={{
        display: "flex",
        ...flexProperties
      }}>
        <Box style={{
          display: "flex",
          width: '100%',
          flexDirection: 'row',
        }}>
          {stepProgressBar}
        </Box>
        {percentLabelText &&
          <Box>
            <Typography className={'progressbar-label'} >
              {percentLabelText}
            </Typography>
          </Box>}
      </Box>
      {labelPosition === 'bottom' ? (typeof labelText == 'string' ?
        <Box>
          <Typography className={'progressbar-label'} >
            {labelText}
          </Typography>
        </Box>
        :
        labelText) : null}
    </Box>
  );
}

export default ProgressBar;
