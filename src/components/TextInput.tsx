import React from 'react';
import { useRecoilState } from 'recoil';
import { TextField, Typography } from '@material-ui/core';
import { textState } from '../states';

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <TextField type="text" value={text} onChange={onChange} label="text" />
      <br />
      <Typography>Echo: {text}</Typography>
    </div>
  );
}

export default TextInput;
