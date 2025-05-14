import './Acerca.css'
import MenuLateral from "../components/MenuLateral"
const Acerca = () => {
    return (
        <div className="acerca">
            <MenuLateral />
            <div className="acerca-contenido">
                <main className="acerca-principal">
                    <section className="acerca-titulo">
                        <h2 className="acerca-titulo-texto">Acerca de nosotros</h2>
                    </section>
                    <div>
                        <section>
                            <h3 className="acerca-titulo-info">Historia de la empresa</h3>
                            <p className="acerca-parrafo">
                               Nuestra empresa de transporte fue fundada en 2001 con el objetivo de ofrecer soluciones de movilidad confiables, seguras y cómodas para nuestros clientes
                            </p>
                        </section>

                        <section>
                            <h3 className="acerca-titulo-info">Misión y Visión</h3>
                            <p className="acerca-parrafo"><strong>Misión:</strong> Misión: Proporcionar transporte de calidad, garantizando comodidad y seguridad en cada viaje, mejorando la experiencia de nuestros pasajeros.</p>
                            <p className="acerca-parrafo"><strong>Visión:</strong> Visión: Ser la empresa líder en transporte interurbano, ofreciendo rutas eficientes y servicios innovadores que superen las expectativas de nuestros clientes.</p>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Acerca