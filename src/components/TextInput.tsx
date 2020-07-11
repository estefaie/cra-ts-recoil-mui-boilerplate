import React from 'react';
import { useRecoilState } from 'recoil';
import TextField from '@material-ui/core/TextField';
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
      Echo: {text}
    </div>
  );
}

export default TextInput;
