import React, { Component } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import Modal from "react-modal";

import InputUser from "./components/InputUsername";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};
class App extends Component {
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -23.5439948,
            longitude: -46.6065452,
            zoom: 14
        },
        modalIsOpen: false
    };

    componentDidMount() {
        window.addEventListener("resize", this._resize);
        this._resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._resize);
    }

    _resize = () => {
        this.setState({
            viewport: {
                ...this.state.viewport,
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    };

    handleMapClick = e => {
        const [latitude, longitude] = e.lngLat;
        console.log("clicado 1");
        this.openModal();
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    render() {
        return (
            <ReactMapGl
                {...this.state.viewport}
                onViewportChange={viewport => this.setState({ viewport })}
                onClick={this.handleMapClick}
                mapStyle="mapbox://styles/mapbox/basic-v9"
                mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
            >
                <Modal style={customStyles} isOpen={this.state.modalIsOpen}>
                    <h3>Adicionar usuário </h3>
                    <input type="text" placeholder="usuário github" />
                    <button>Cancelar</button>
                    <button>Adicionar</button>
                </Modal>

                <Marker
                    latitude={-23.5439948}
                    longitude={-46.6065452}
                    onClick={this.handleMapClick}
                    captureClick
                >
                    <img
                        style={{
                            borderRadius: 100,
                            width: 48,
                            height: 48
                        }}
                        src="https://avatars2.githubusercontent.com/u/2254731?v=4"
                    />
                </Marker>
            </ReactMapGl>
        );
    }
}

export default App;
