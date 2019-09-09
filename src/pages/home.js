import React, {useState} from 'react';
import Container from '../components/container';
import Panel from '../components/panel';
import Conteudo from '../components/conteudo';
import TituloApp from '../components/TituloApp';

const initialState = {
  activeTab: 1,
};

function Home() {
  const [state, setstate] = useState(initialState);

  function onChangeActiveTab(id) {
    setstate({
      activeTab: id,
    });
  }

  return (
    <Container>
      <TituloApp />
      <Panel activeTab={state.activeTab} changeTab={onChangeActiveTab} />
      <Conteudo activeTab={state.activeTab} />
    </Container>
  );
}

export default Home;
