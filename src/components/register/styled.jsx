import styled from 'styled-components';

export const FormWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background: rgb(215, 215, 215);
`;

export const Legend = styled.legend`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`;

export const FormSubmit = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: lightblue;
    font-size: 25px;
    width: 35%;
    margin: 80px auto;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: 1px solid rgb(112, 112, 112);
    border: 5px solid white;

    padding: 10px 20px;
`;

export const FormElement = styled.h2`
    text-align: center;
`;

export const FormData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 10px;
`;

export const Label = styled.label`
    font-size: 20px;
    color: #854b4b;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    max-width: 100%;
    font-size: 15px;
    padding: 6px;
    border-radius: 8px;
    border: none;
    &:focus {
        border-color: red;
    }
`;

export const Description = styled.textarea`
    max-width: 100%;
    font-size: 15px;
    border-radius: 8px;
`;

export const Register = styled.button`
    background: #26c;
    color: white;
    width: 100%;
    font-size: 16px;
    margin: 20px 0 20px 0;
    padding: 6px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    &:hover {
        background: black;
        color: #822525;
        opacity: 0.8;
        transition: 0.8s;
    }
`;

export const Validate = styled.span`
    color: red;
    font-size: 10px;
`;
