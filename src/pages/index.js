import React, { Component } from "react";

//import para utilização da biblioteca mapBox
import ReactMapGl, { Marker, FlyToInterpolator } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// configurações para redux
import { connect } from "react-redux";
import * as UserActions from "../store/actions/users";
import { bindActionCreators } from "redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    Lista,
    ListaConteudo,
    customStyles,
    Container,
    ContainerButton,
    Loading,
    ErrorMsg
} from "./styles";

import "../styles/global";

import Modal from "react-modal";

import PropTypes from "prop-types";

class Principal extends Component {
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -23.5439948,
            longitude: -46.6065452,
            zoom: 14
        },
        modalIsOpen: false,
        userInput: "",
        coordenadas: {
            latitude: 0,
            longitude: 0
        },
        totalItens: 0
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
        e.preventDefault();
        const [long, lat] = e.lngLat;

        this.setState({
            coordenadas: {
                latitude: lat,
                longitude: long
            }
        });

        this.openModal();
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = e => {
        this.setState({ modalIsOpen: false, userInput: "" });
    };

    handleAddUser = event => {
        event.preventDefault();
        this.props.addUserRequest(this.state.userInput, this.state.coordenadas);

        this.closeModal();
    };

    _onViewportChange = viewport => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        });
    };

    _goToViewport = coord => {
        this._onViewportChange({
            longitude: coord.longitude,
            latitude: coord.latitude,
            zoom: 15,
            transitionInterpolator: new FlyToInterpolator(),
            transitionDuration: 3000
        });
    };

    removeUser(id) {
        this.props.removeUser(id);
        toast.warn("Usuario removido");
    }
    _sucesso() {
        this.setState({
            totalItens: this.props.user.data.length
        });
        toast.success("Usuário adicionado com sucesso!");
    }
    cleanMsgError() {
        toast.error(this.props.user.error);
        this.props.cleanMsgError();
    }
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
                    <Container>
                        <form onSubmit={this.handleAddUser}>
                            <p>
                                <strong>Adicionar Novo Usuário</strong>
                            </p>
                            <input
                                type="text"
                                placeholder="usuário do Github"
                                value={this.state.userInput}
                                onChange={e =>
                                    this.setState({
                                        userInput: e.target.value
                                    })
                                }
                            />
                            <ContainerButton>
                                <button type="submit" onClick={this.closeModal}>
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    style={{ background: "#5cb85c" }}
                                >
                                    Adicionar
                                </button>
                            </ContainerButton>
                        </form>
                    </Container>
                </Modal>
                {this.props.user.loading && (
                    <Loading>
                        <p className="fa-spin ">
                            <i className="fa fa-spinner fa-spin" />
                        </p>
                    </Loading>
                )}

                {!!this.props.user.error && this.cleanMsgError()}
                {this.props.user.data.length > this.state.totalItens
                    ? this._sucesso()
                    : "false"}
                <ToastContainer />
                {this.props.user.data.map(u => (
                    <Marker
                        key={u.id}
                        latitude={u.coordenadas.latitude}
                        longitude={u.coordenadas.longitude}
                        //onClick={this.handleMapClick}
                        captureClick
                    >
                        <img
                            style={{
                                borderRadius: 100,
                                width: 48,
                                height: 48
                            }}
                            src={u.avatar_url}
                        />
                    </Marker>
                ))}
                <Lista>
                    <ul>
                        {this.props.user.data.map(u => (
                            <li key={u.id}>
                                <img
                                    src={u.avatar_url}
                                    style={{
                                        borderRadius: 100,
                                        width: 48,
                                        height: 48
                                    }}
                                />
                                <ListaConteudo>
                                    <p>{u.name}</p>
                                    <small>{u.login}</small>
                                </ListaConteudo>
                                <button onClick={() => this.removeUser(u.id)}>
                                    <i className="fa fa-times-circle" />
                                </button>

                                <button
                                    onClick={() =>
                                        this._goToViewport(u.coordenadas)
                                    }
                                >
                                    <i className="fa fa-angle-right" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </Lista>
            </ReactMapGl>
        );
    }
}

Principal.propTypes = {
    user: PropTypes.shape({
        loading: PropTypes.bool,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                login: PropTypes.string,
                avatar_url: PropTypes.string,
                coordenadas: PropTypes.shape({
                    latitude: PropTypes.number,
                    longitude: PropTypes.number
                })
            })
        )
    }).isRequired
};

const mapStateToProps = state => ({ user: state.users });

const mapDispatchToProps = dispatch =>
    bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Principal);
