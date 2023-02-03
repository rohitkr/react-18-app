import React from "react";
import { AlertProps } from '@material-ui/lab/Alert';

export type Intent = 'info' | 'warning' | 'critical' | 'success';
export interface BannerAlertProps extends AlertProps {
  open?: boolean;
  "data-testid"?: string;
  autoHideDuration?: number;
  headingText?: React.ReactNode;
  subtitleText?: React.ReactNode;
  onActionButtonClick?: React.MouseEventHandler;
  onClose?: (event: React.SyntheticEvent) => void;
  intent?: Intent;
  actionButtonText?: React.ReactNode;
  showActionButton?: boolean;
  showCloseButton?: boolean;
}
