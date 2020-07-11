import React from 'react';
import { useRecoilValue } from 'recoil';
import Typography from '@material-ui/core/Typography';
import { charCountState } from '../states';

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return (
    <Typography data-testid="character-count">
      Character Count: {count}
    </Typography>
  );
};

export default CharacterCount;
