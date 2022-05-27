import * as React from 'react';
import Button from '@mui/material/Button';

function CommonButton({buttonValue}) {
  return <Button variant="text">{buttonValue}</Button>;
}

export default CommonButton;