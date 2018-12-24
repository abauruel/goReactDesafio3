import React from "react";

import Styled from "styled-components";

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

const InputUsername = ({ closeToast }) => (
    <Container>
        <p>
            <strong>Adicionar Novo Usuário</strong>
        </p>
        <input type="text" placeholder="usuário do Github" />
        <ContainerButton>
            <button type="submit" onClick={() => closeToast}>
                Cancelar
            </button>
            <button type="submit" style={{ background: "#5cb85c" }}>
                Adicionar
            </button>
        </ContainerButton>
    </Container>
);

export default InputUsername;
