import Styled from "styled-components";

export const Lista = Styled.div`
         
         position: absolute;
         ul {
            list-style-type: none;
            
            li {
                display:flex;
                list-style: none;
                font-weight: bold;
                padding: 10px 20px;
                padding-right: 2px;
                background: #ffffff;
                justify-content: center;
                align-items: center;
                button{
                    
                    border: none;
                    background: none;
                    height: 20px;
                    width: 20px;
                    margin: 20px;
                    
                    border-radius: 100px;
                    
                    display: inline-block;
                    cursor: pointer;
                    
                    
            }
                        }
            }
`;
export const ListaConteudo = Styled.div`
                 
                margin-left: 10px; 
                width: 250px;
            p{
                height: 20px;
                margin: 0px;
                margin-top: 10px;
             
            }
            
            small {
                height: 10px;
                align: left;
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
                
                }
            
            
`;
export const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

export const Container = Styled.div`
    
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

export const ContainerButton = Styled.div`
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
            color: #ffffff;
          
        }
        
`;
export const Loading = Styled.div`
        
         p{
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%) 
        }
        
        
        
`;
export const ErrorMsg = Styled.div`
        display: flex;
        flex-direction: column;
        input{
            border: none;
            background: #dbdbdb;
            border-radius: 3px;
            cursor: pointer;
            padding: 10px;
            margin: 10px;
            color: #ffffff;
            text-transform: uppercase;
            font-style: bold;
            &:hover{
            
            background: #c0c0c0;
         }   
        }
`;
