import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import tokenObj from '../../tokens/build/json/tokens.json';
import { BannerAlertProps, Intent } from './BannerAlert.types';
import { Snackbar } from '@material-ui/core';
import Button from '../Button/Button';
import IconButton from '../IconButton/IconButton';
import Box from '../Box/Box';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {
  AlertTriangle as Warning,
  AlertOctagon as Error,
  InfoCircle as Info,
  CircleCheck as Success,
  X as CloseIcon,
} from 'tabler-icons-react';

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

// Styles for Snackbar component
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "left",
      width: tokenObj['banner-alert-snackbar-root-width'],
    },
    message: {
      textOverflow: tokenObj['banner-alert-snackbar-message-text-overflow'],
      overflow: tokenObj['banner-alert-snackbar-message-overflow'],
      display: tokenObj['banner-alert-snackbar-message-display'],
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      'white-space': 'normal',
      maxHeight: tokenObj['banner-alert-snackbar-message-max-height'],
    },
    mobileButton: {
      marginLeft: tokenObj['banner-alert-snackbar-mobile-button-margin-left'],
      marginTop: tokenObj['banner-alert-snackbar-mobile-button-margin-top'],
      [theme.breakpoints.down('sm')]: {
        display: tokenObj['banner-alert-snackbar-mobile-button-sm-display']
      },
      [theme.breakpoints.up('md')]: {
        display: tokenObj['banner-alert-snackbar-mobile-button-md-display']
      },
      [theme.breakpoints.up('lg')]: {
        display: tokenObj['banner-alert-snackbar-mobile-button-lg-display']
      },
    },
    desktopButton: {
      marginRight:
        tokenObj['banner-alert-snackbar-desktop-button-margin-right'],
      [theme.breakpoints.down('sm')]: {
        display: tokenObj['banner-alert-snackbar-desktop-button-sm-display']
      },
    },
    closeIcon: {
      marginRight: tokenObj['banner-alert-snackbar-close-icon-margin-right'],
    },
  })
);

interface ColorMap {
  critical: string;
  warning: string;
  success: string;
  info: string;
}

const colorMap: ColorMap = {
  critical: tokenObj['color-critical-300'],
  warning: tokenObj['color-warning-300'],
  success: tokenObj['color-success-500'],
  info: tokenObj['color-info-400'],
};

// Styles for Alert component
export interface StyleProps {
  intent: Intent;
  hasDescription: boolean;
}

const useAlertStyles = makeStyles<Theme, StyleProps>((theme) => createStyles({
  root: {
    padding: tokenObj['banner-alert-alert-root-padding'],
    borderColor: ({ intent }) => colorMap[intent],
    borderWidth: tokenObj['banner-alert-alert-root-border-width'],
    borderLeftWidth: tokenObj['banner-alert-alert-root-border-left-width'],
    backgroundColor: tokenObj['banner-alert-alert-root-background-color'],
    color: tokenObj['banner-alert-alert-root-color'],
    fontSize: tokenObj['banner-alert-alert-root-font-size'],
    fontWeight: Number(
      `${tokenObj['banner-alert-alert-root-font-weight']}`
    ),
    lineHeight: tokenObj['banner-alert-alert-root-line-height'],
    fontFamily: tokenObj['banner-alert-alert-root-font-family'],
    alignItems: ({ hasDescription }) => hasDescription ? '' : tokenObj['banner-alert-alert-root-align-items'],

    [theme.breakpoints.down('sm')]: {
      minWidth: tokenObj['banner-alert-snackbar-root-mobile-min-width'],
      maxWidth: tokenObj['banner-alert-snackbar-root-mobile-max-width'],
    },
    [theme.breakpoints.up('md')]: {
      minWidth: tokenObj['banner-alert-snackbar-root-desktop-min-width'],
      maxWidth: tokenObj['banner-alert-snackbar-root-desktop-max-width'],
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: tokenObj['banner-alert-snackbar-root-desktop-min-width'],
      maxWidth: tokenObj['banner-alert-snackbar-root-desktop-max-width'],
    },
  },
  icon: {
    color: ({ intent }) => `${colorMap[intent]} !important`,
    marginRight: tokenObj['banner-alert-alert-icon-margin-right'],
    paddingTop: tokenObj['banner-alert-alert-icon-padding-top'],
    paddingBottom: tokenObj['banner-alert-alert-icon-padding-bottom'],
  },
  message: {
    paddingTop: tokenObj['banner-alert-alert-message-padding-top'],
    paddingBottom: tokenObj['banner-alert-alert-message-padding-bottom'],
    '& .MuiTypography-gutterBottom': {
      margin: ({ hasDescription }) => hasDescription
        ? tokenObj['banner-alert-alert-message-gutter-margin']
        : '0',
    },
  },
  action: {
    padding: tokenObj['banner-alert-alert-action-padding'],
    flex: tokenObj['banner-alert-alert-action-flex'],
  },
}))

const useAlertTitleStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: `${tokenObj['text-subheading-05-font-size']}`,
      fontWeight: Number(tokenObj['text-subheading-05-font-weight']),
      lineHeight: `${tokenObj['text-subheading-05-line-height']}`,
      fontFamily: `${tokenObj['text-subheading-05-font-family']}`,

      [theme.breakpoints.down('sm')]: {
        fontSize: `${tokenObj['text-subheading-06-font-size']}`,
        fontWeight: Number(tokenObj['text-subheading-06-font-weight']),
        lineHeight: `${tokenObj['text-subheading-06-line-height']}`,
        fontFamily: `${tokenObj['text-subheading-06-font-family']}`,
      },
    },
  })
);

export default function BannerAlert({
  onActionButtonClick,
  action,
  open,
  autoHideDuration,
  headingText,
  subtitleText = '',
  actionButtonText,
  showActionButton = false,
  showCloseButton = false,
  intent = 'critical',
  ...restProps
}: BannerAlertProps) {
  const classes = useStyles();
  const alertClasses = useAlertStyles({ intent, hasDescription: subtitleText !== '' });
  const alertTitleClasses = useAlertTitleStyles();
  const actionButtonClickHandler = (event: React.MouseEvent<Element, MouseEvent>) => {
    onActionButtonClick && onActionButtonClick(event);
  };
  const iconButtonHandler = (event: React.SyntheticEvent<Element, Event>) => {
    restProps.onClose && restProps.onClose(event);
  };
  let severity: 'success' | 'info' | 'warning' | 'error' = 'success';
  switch (intent) {
    case 'critical':
      severity = 'error';
      break;
    case 'info':
      severity = 'info';
      break;
    case 'success':
      severity = 'success';
      break;
    case 'warning':
      severity = 'warning';
      break;
  }

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      open={open}
      onClose={(event, reason?: string) => {
        if (reason !== 'clickaway') {
          restProps.onClose && restProps.onClose(event);
        }
      }}
      className={classes.root}
      TransitionComponent={SlideTransition}
    >
      <Alert
        variant="outlined"
        severity={severity}
        iconMapping={{
          error: <Error size="24" />,
          info: <Info size="24" />,
          success: <Success size="24" />,
          warning: <Warning size="24" />,
        }}
        action={
          <React.Fragment>
            {showActionButton && (
              <Box className={classes.desktopButton}>
                <Button
                  variant="secondary"
                  intent={intent}
                  onClick={actionButtonClickHandler}
                >
                  {actionButtonText}
                </Button>
              </Box>
            )}
            {showCloseButton && (<Box className={classes.closeIcon}>
              <IconButton
                variant="tertiary"
                intent={intent}
                aria-label="close"
                onClick={iconButtonHandler}
                title={'Close'}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            )}
          </React.Fragment>
        }
        classes={alertClasses}
        {...restProps}
      >
        <AlertTitle className={alertTitleClasses.root}>
          {headingText}
        </AlertTitle>
        <Box className={classes.message}>{subtitleText}</Box>
        <Box className={classes.mobileButton}>
          {showActionButton && (
            <Button
              variant="tertiary"
              size={'small'}
              intent={intent}
              onClick={actionButtonClickHandler}
            >
              {actionButtonText}
            </Button>
          )}
        </Box>
      </Alert>
    </Snackbar>
  );
}
