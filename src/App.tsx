import React from 'react';
import { RecoilRoot } from 'recoil';
import Container from '@material-ui/core/Container';

import CharacterCounter from './components/CharacterCounter';

export default function App() {
  return (
    <RecoilRoot>
      <Container maxWidth="sm">
        <CharacterCounter />
      </Container>
    </RecoilRoot>
  );
}
