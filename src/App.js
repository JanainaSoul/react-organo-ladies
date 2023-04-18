import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
//import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Comite from './componentes/Comite/index.js';

function App() {

  const comites = [
    {
      nome: 'Eventos e Merchan',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'RP',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Afiliação',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Treinamento',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Financeiro',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }

  ]

  const [membros, setMembros ] = useState('')
  const aoNovoMembroCadastrado =(membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario novoMembroCadastrado={membro => aoNovoMembroCadastrado(membro)}/>
      {comites.map(comite => <Comite key={comite.nome} nome={comite.nome} corPrimaria={comite.corPrimaria} corSecundaria={comite.corSecundaria}/>)}
      

    </div>
  );
}

export default App;
