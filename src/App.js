import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
//import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Comite from './componentes/Comite/index.js';
import Rodape from './componentes/Rodape/index.js';

function App() {

  const pronomes = [
    {
      nome: ''
    },
    {
    nome:'Ela/Dela',
    },
    {
    nome:'Ele/Dele',
    },
    {
    nome:'Elu/Delu',
    }
]

const modalidades = [
  {
      nome: ''
    },
  
  {
    nome:'Recreativo',
  },
  {
    nome:'Competitivo',
  },
  {
    nome:'Arbitragem',
  },
  {
    nome:'Licença'
  },
  {
    nome: 'Ainda não escolhi'
  }
]


  const comites = [
    {
      nome: ''
    },
    
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
    },
    {
      nome: 'Refs',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Não escolhi',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

    const subcomites = [
      {
        nome: ''
      },
    {
      nome: 'Refs',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Não participa',
      
    }
  ]
  

  const [membros, setMembros ] = useState([])
  const aoNovoMembroCadastrado =(membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
          pronomes={pronomes.map(pronome => pronome.nome)}
          modalidades={modalidades.map(modalidade => modalidade.nome)}
          comites={comites.map(comite => comite.nome)} 
          subcomites={subcomites.map(subcomite => subcomite.nome)}
          novoMembroCadastrado={membro => aoNovoMembroCadastrado(membro)}
      />
      {comites.map(comite => <Comite 
          key={comite.nome} 
          nome={comite.nome} 
          corPrimaria={comite.corPrimaria} 
          corSecundaria={comite.corSecundaria}
          membros={membros.filter(membro => membro.comite === comite.nome)}
          />)}
          <Rodape />
    </div>
    
  );
}

export default App;
