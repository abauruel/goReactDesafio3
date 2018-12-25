import React, { Component } from "react";

//import para utilização da biblioteca mapBox
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// configurações para redux
import { connect } from "react-redux";
import * as UserActions from "../store/actions/users";
import { bindActionCreators } from "redux";

import Styled from "styled-components";

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
        }
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
        const [long, lat] = e.lngLat;
        console.log(lat);

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

    closeModal = () => {
        this.setState({ modalIsOpen: false, userInput: "" });
    };

    handleAddUser = event => {
        event.preventDefault();
        this.props.addUserRequest(this.state.userInput, this.state.coordenadas);

        this.closeModal();
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

                {this.props.user.map(u => (
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
                        {this.props.user.map(u => (
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
                                    <h3>{u.name}</h3>
                                    <small>{u.login}</small>
                                </ListaConteudo>
                                <button>X</button>
                            </li>
                        ))}
                    </ul>
                </Lista>
            </ReactMapGl>
        );
    }
}

Principal.propTypes = {
    user: PropTypes.arrayOf(
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
};
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

const Container = Styled.div`
    
    p{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    
    input{
        flex:1;
        flex-direction: column;
        justify-content:center;
        height: 30px;
        font-size: 18px;
        padding: 0 20px;
        border-radius:3px;
        margin-left: 20px;
        margin-bottom: 10px; 

    }
    
`;

const ContainerButton = Styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;

        button{
            margin-left: 20px;
            height: 30px;
            padding-top: 10x;
            padding-left: 20px;
            padding-right: 20px;
            border: 0;
            border-radius: 3px;
            color: #ffffff
        }
        
`;

const Lista = Styled.div`
         width: 400px;
         ul {
                 list-style: none;
            li {
                display:flex;

                font-weight: bold;
                padding: 10px 20px;
                background: #ffffff;

            img{ 
                display: flex;
                
                
                }    

            }
            }
`;
const ListaConteudo = Styled.div`
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            padding: 0 10px;
            
            small {
                align: top;
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
                }
            
`;

const mapStateToProps = state => ({ user: state.users });

const mapDispatchToProps = dispatch =>
    bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Principal);
