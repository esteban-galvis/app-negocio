import MenuLateral from "../components/MenuLateral"
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <MenuLateral />
            <div className="home-contenido">
                <main className="home-principal">
                    <section className="home-titulo">
                        <h2 className="home-titulo-texto">Estás en el home</h2>
                    </section>
                    <div className="home-info">
                        <h2>Bienvenido pasajero</h2>
                        <p>Nos complace tenerte con nosotros. Este es tu espacio para informarte sobre nuestros servicios de transporte y disfrutar de un viaje seguro y cómodo.</p>
                        <h3>Últimas noticias</h3>
                        <div className="home-noticias">
                            <div className="home-noticia">Nueva ruta de autobús desde el centro a la zona industrial.</div>
                            <div className="home-noticia">Servicio de transporte nocturno ahora disponible para mayor comodidad.</div>
                            <div className="home-noticia">Mejoras en las condiciones de nuestros vehículos, ahora más cómodos y accesibles.</div>
                        </div>
                        <h3>Accesos rápidos</h3>
                        <div className="home-accesos">
                            <a className="home-acceso" href="/clases">Ver horarios de transporte</a>
                            <a className="home-acceso" href="/material">Consultar rutas disponibles</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home