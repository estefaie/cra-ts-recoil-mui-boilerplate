import React from 'react';
import { atom, useRecoilState } from 'recoil';
import TextField from '@material-ui/core/TextField';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

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
