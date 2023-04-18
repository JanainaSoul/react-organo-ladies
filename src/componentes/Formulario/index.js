import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensaComites from '../ListaSuspensaComites'
import ListaSuspensa from '../ListaSuspensaComites'
import ListaSuspensaModalidades from '../ListaSuspensaModalidades'
import ListaSuspensaPronomes from '../ListaSuspensaPronomes'
import ListaSuspensaSubComites from '../ListaSuspensaSubComites'


import './Formulario.css'

const Formulario = () => {

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
        'Refs'
        
    ]

    const pronomes = [
        '',
        'Ela/Dela',
        'Ele/Dele',
        'Elu/Delu',
        
    ]

    const aoSubmeter = (evento) =>{
        evento.preventDefault()
        console.log('Formulário foi submetido')
    }
        

    return (
        <section className="formulario">
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o mapa de cada comitê!</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Derby Name" placeholder="Digite seu Derby Name"/>
                <CampoTexto obrigatorio={true} label="Derby Number" placeholder="Digite seu Derby Number"/>
                <ListaSuspensaPronomes obrigatorio={true} label="Pronome" pronomes={pronomes} />
                <ListaSuspensaModalidades obrigatorio={true} label="Modalidade" modalidades={modalidades}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensaComites obrigatorio={true} label="Comitê 1" comites={comites}/>
                <ListaSuspensaComites label="Comitê 2" comites={comites}/>
                <ListaSuspensaComites label="Comitê 3"comites={comites}/>
                <ListaSuspensaSubComites label="SubComitê" subcomites={subcomites}/>
                < Botao >
                    Criar Card
                </Botao >
            </form>
        </section>
    )

}

export default Formulario