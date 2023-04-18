import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o mapa de cada comitê!</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Derby Name" placeholder="Digite seu Derby Name"/>
                <CampoTexto label="Derby Number" placeholder="Digite seu Derby Number"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )

}

export default Formulario