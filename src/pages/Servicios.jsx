import './Servicios.css'
import MenuLateral from "../components/MenuLateral"
const Servicios = () => {
    return (
        <div className="servcio">
            <MenuLateral />
            <div className="servicios-div">
                <main className="servicio-principal">
                    <section className="servicio-titulo">
                        <h2 className="servicio-titulo-texto">Nuestros Servicios de Transporte</h2>
                    </section>
                    <div className="servicios-cuerpo">
                        <div className="servicios-card">
                            <h2>Tipos de Servicios</h2>
                            <ul>
                                <li>Transporte de pasajeros</li>
                                <li>Carga</li>
                                <li>Privado</li>
                            </ul>
                        </div>

                        <div className="servicios-card">
                            <h3>Horarios disponibles</h3>
                            <p>Prestamos servicio 24/7</p>
                        </div>

                        <div className="servicios-card">
                            <h3>Tipos de vehículos</h3>
                            <p>Buses sencillos y de dos pisos</p>
                        </div>

                        <div className="servicios-card">
                            <h3>Reservas</h3>
                            <p>Comunícate con nosotros para reservar tu puesto</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Servicios