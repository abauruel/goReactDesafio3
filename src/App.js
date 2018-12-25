import React, { Component } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import Modal from "react-modal";

import InputUser from "./components/InputUsername";
import InputUsername from "./components/InputUsername";

import "./config/reactotron";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -23.5439948,
            longitude: -46.6065452,
            zoom: 14
        },
        modalIsOpen: false,
        userInput: ""
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

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    handleAddUser = async event => {
        event.preventDefault();
        this.setState({
            userInput: event.target.value
        });
    };

    render() {
        return (
            <Provider store={store}>
                <ReactMapGl
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                    onClick={this.handleMapClick}
                    mapStyle="mapbox://styles/mapbox/basic-v9"
                    mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
                >
                    <Modal style={customStyles} isOpen={this.state.modalIsOpen}>
                        <InputUsername />
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
            </Provider>
        );
    }
}

export default App;

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
