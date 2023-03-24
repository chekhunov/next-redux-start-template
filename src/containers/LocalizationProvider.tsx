import React, { FC, PropsWithChildren } from "react";

import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const LocalizationProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider
