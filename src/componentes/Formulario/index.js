import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensaComites from '../ListaSuspensaComites'
import ListaSuspensaModalidades from '../ListaSuspensaModalidades'
import ListaSuspensaPronomes from '../ListaSuspensaPronomes'
import ListaSuspensaSubComites from '../ListaSuspensaSubComites'


import './Formulario.css'

const Formulario = (props) => {

    const pronomes = [
        '',
        'Ela/Dela',
        'Ele/Dele',
        'Elu/Delu',
    ]

    const modalidades = [
        '',
        'Recreativo',
        'Competitivo',
        'Arbitragem',
        'Licença'
    ]


    const comites = [
        '',
        'Eventos e Merchan',
        'RP',
        'Afiliação',
        'Treinamento',
        'Financeiro',
    ]

    const subcomites = [
        '',
        'Refs',
        'Não se aplica'
    ]


    const [nome, setNome] = useState('')
    const [derbyName, setderbyName] = useState('')
    const [derbyNumber, setderbyNumber] = useState('')
    const [imagem, setImagem] = useState('')
    const [pronome, setPronome] = useState('')
    const [modalidade, setModalidade] = useState('')
    const [comite, setComite] = useState('')
    const [subcomite, setSubComite] = useState('')


    const aoSubmeter = (evento) =>{
        evento.preventDefault()
        //console.log('Formulário foi submetido =>', nome, derbyName, derbyNumber, imagem, pronome, modalidade, comite, subcomite)
        props.novoMembroCadastrado({
            nome,
            derbyName,
            derbyNumber,
            imagem,
            pronome,
            modalidade,
            comite,
            subcomite
        }

        )
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para ver quem participa de cada comitê!</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoPreencher={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Derby Name" 
                    placeholder="Digite seu Derby Name"
                    valor={derbyName}
                    aoPreencher={valor => setderbyName(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Derby Number" 
                    placeholder="Digite seu Derby Number"
                    valor={derbyNumber}
                    aoPreencher={valor => setderbyNumber(valor)}
                />
                <ListaSuspensaPronomes 
                    obrigatorio={true} 
                    label="Pronome" 
                    pronomes={pronomes} 
                    valor={pronome}
                    aoPreencher={valor => setPronome(valor)}
                    />
                <ListaSuspensaModalidades 
                    obrigatorio={true} 
                    label="Modalidade" 
                    modalidades={modalidades}
                    valor={modalidade}
                    aoPreencher={valor => setModalidade(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoPreencher={valor => setImagem(valor)}
                />
                <ListaSuspensaComites 
                    obrigatorio={true} 
                    label="Comitê 1" 
                    comites={comites}
                    valor={comite}
                    aoPreencher={valor => setComite(valor)}
                    />
                <ListaSuspensaComites 
                    obrigatorio={true} 
                    label="Comitê 2" 
                    comites={comites}
                    valor={comite}
                    aoPreencher={valor => setComite(valor)}
                    />
                <ListaSuspensaComites
                    obrigatorio={true}  
                    label="Comitê 3"
                    comites={comites}
                    valor={comite}
                    aoPreencher={valor => setComite(valor)}
                    />
                <ListaSuspensaSubComites 
                    obrigatorio={true} 
                    label="SubComitê" 
                    subcomites={subcomites}
                    valor={subcomite}
                    aoPreencher={valor => setSubComite(valor)}
                    />
                < Botao >
                    Criar Card
                </Botao >
            </form>
        </section>
    )

}

export default Formulario