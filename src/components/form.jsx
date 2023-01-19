import { useForm } from 'react-hook-form';
import React from 'react';
import * as Styled from './styled';

const Form = () => {
    const { handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            <legend> Post Data Using React Hook Form </legend>
            <div>
                <Styled.Label>
                    Title:
                    <Styled.Input type="title" name="title" />
                </Styled.Label>
                <Styled.Label>
                    Creator:
                    <Styled.Input type="Creator" name="Creator" />
                </Styled.Label>

                <Styled.Label>
                    Description:
                    <textarea name="description" />
                </Styled.Label>

                <Styled.Label>
                    ID:
                    <Styled.Input type="ID" name="ID" />
                </Styled.Label>
                <Styled.Button type="submit">Submit</Styled.Button>
            </div>
        </Styled.Form>
    );
};

export default Form;
