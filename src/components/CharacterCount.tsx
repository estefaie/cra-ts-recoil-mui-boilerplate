import React from 'react';
import { useRecoilValue } from 'recoil';
import Typography from '@material-ui/core/Typography';
import { charCountState } from '../states';

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <Typography>Character Count: {count}</Typography>;
}

export default CharacterCount;
