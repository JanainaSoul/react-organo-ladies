import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
//import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';

function App() {

  const [membros, setMembros ] = useState('')
  const aoNovoMembroCadastrado =(membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario novoMembroCadastrado={membro => aoNovoMembroCadastrado(membro)}/>

    </div>
  );
}

export default App;
