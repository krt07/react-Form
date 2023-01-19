import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: rgb(215, 215, 215);
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    font-size: 16px;
    color: gray;
`;

export const Input = styled.input`
    max-width: 100%;
    font-size: 16px;
    margin-bottom: 40px;
    padding: 6px;
    border-radius: 8px;
    border: none;
`;

export const Button = styled.button`
    background: #26c;
    color: white;
    width: 50%;
    font-size: 16px;
    margin-bottom: 40px;
    padding: 6px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    &:hover {
        background: black;
        color: #493d3d;
        transition: 0.8s;
    }
`;
