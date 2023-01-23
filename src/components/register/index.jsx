import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as Styled from '../register/styled';
import { v4 as UniID } from 'uuid';

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const submitData = {
            ...data,
            postId: UniID(),
        };
        axios
            .post('http://localhost:3000/posts', submitData)
            .then((res) => console.log(res));
        console.log(submitData);
        reset();
    };

    return (
        <Styled.FormWrapper>
            <Styled.FormSubmit method="post" onSubmit={handleSubmit(onSubmit)}>
                <Styled.FormElement> React Hook Form </Styled.FormElement>
                <Styled.FormData>
                    <Styled.Label>BODY: </Styled.Label>
                    <Styled.Description
                        type="text"
                        placeholder="body"
                        {...register('body', {
                            required: true,
                            maxLength: 200,
                        })}
                    />

                    {errors.body && (
                        <Styled.Validate>BODY Is required</Styled.Validate>
                    )}
                </Styled.FormData>
                <Styled.FormData>
                    <Styled.Label>TITLE </Styled.Label>
                    <Styled.Input
                        type="text"
                        placeholder="title"
                        {...register('title', {
                            required: true,
                            maxLength: 10,
                        })}
                    />
                    {errors.title && (
                        <Styled.Validate>TITLE Is required</Styled.Validate>
                    )}
                </Styled.FormData>
                <Styled.FormData>
                    <Styled.Label>CREATOR </Styled.Label>
                    <Styled.Input
                        type="text"
                        placeholder="creator"
                        {...register('creator', {
                            required: true,
                            maxLength: 10,
                        })}
                    />
                    {errors.creator && (
                        <Styled.Validate>CREATOR Is required</Styled.Validate>
                    )}
                </Styled.FormData>

                <Styled.Register type="submit">Form Submit</Styled.Register>
            </Styled.FormSubmit>
        </Styled.FormWrapper>
    );
};

export default Form;
