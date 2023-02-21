import styled from "styled-components";

export const Container = styled.section`
    
`;

export const Wrapper = styled.div`
    max-width: var(--wrapperWidth);
    margin: 0 auto;
`;

export const FormContainer = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 360px;

    select, input {
        width: 100%;
        border: none;
        outline: none;
        padding: 15px 0;
        border-bottom: 1px solid #999;
        cursor: pointer;
        /* margin-bottom: 25px; */
    }

    input {
        cursor: text;
    }

    button {
        font-size: 0.9rem;
        width: 100%;
        padding: 10px 0;
        background-color: var(--mainColor);
        cursor: pointer;
        color: #fff;
        border: none;
        border-radius: 2px;
        border: 1px solid var(--mainColor);
        transition: all 100ms ease-out;
        margin-top: 30px;
    }

    button:hover {
        background-color: #fff;
        color: var(--mainColor);
    }
`;

export const FormTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--mainColor);
    margin-bottom: 15px;
`;

export const FormImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;

    img {
        width: 90%;
    }
`

export const NoMarket = styled.img`
    width: 100% !important;
    opacity: 0.4;
`;