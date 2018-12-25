import React from "react";

import Styled from "styled-components";

import { connect } from "react-redux";
import * as UserActions from "../store/actions/users";
import { bindActionCreators } from "redux";

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

const InputUsername = ({ handleAddUser, userInput }) => {
    return (
        <Container>
            <form onSubmit={handleAddUser(userInput)}>
                <p>
                    <strong>Adicionar Novo Usuário</strong>
                </p>
                <input
                    type="text"
                    placeholder="usuário do Github"
                    value={userInput}
                    onChange={e => ({ userInput: e.target.value })}
                />
                <ContainerButton>
                    <button type="submit">Cancelar</button>
                    <button type="submit" style={{ background: "#5cb85c" }}>
                        Adicionar
                    </button>
                </ContainerButton>
            </form>
        </Container>
    );
};
const mapStateToProps = state => ({ user: state.users });

const mapDispatchToProps = dispatch =>
    bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputUsername);
