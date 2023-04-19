import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensaComites from '../ListaSuspensaComites'
import ListaSuspensaModalidades from '../ListaSuspensaModalidades'
import ListaSuspensaPronomes from '../ListaSuspensaPronomes'
import ListaSuspensaSubComites from '../ListaSuspensaSubComites'


import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [derbyName, setderbyName] = useState('')
    const [derbyNumber, setderbyNumber] = useState('')
    const [imagem, setImagem] = useState('')
    const [pronome, setPronome] = useState('')
    const [modalidade, setModalidade] = useState('')
    const [comite, setComites] = useState('')
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
                    pronomes={props.pronomes} 
                    valor={pronome}
                    aoPreencher={valor => setPronome(valor)}
                    />
                <ListaSuspensaModalidades 
                    obrigatorio={true} 
                    label="Modalidade" 
                    modalidades={props.modalidades}
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
                    label="Comitê" 
                    comites={props.comites}
                    valor={comite}
                    aoPreencher={valor => setComites(valor)}
                    />
                
                <ListaSuspensaSubComites 
                    obrigatorio={true} 
                    label="SubComitê" 
                    subcomites={props.subcomites}
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