import CampoTexto from '../CampoTexto'

import ListaSuspensaUm from '../ListaSuspensaUm'
import './Formulario.css'

const Formulario = () => {

    const comites = [
        'Eventos e Merchan',
        'RP',
        'Afiliação',
        'Treinamento',
        'Financeiro',
        ''
    ]



    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o mapa de cada comitê!</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Derby Name" placeholder="Digite seu Derby Name"/>
                <CampoTexto label="Derby Number" placeholder="Digite seu Derby Number"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensaUm label="Comitê 1" comites={comites}/>
                <ListaSuspensaUm label="Comitê 2" comites={comites}/>
                <ListaSuspensaUm label="Comitê 3"comites={comites}/>
                
                
            </form>
        </section>
    )

}

export default Formulario