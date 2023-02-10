import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--mainColor);
    margin-bottom: 30px;
`;

export const Wrapper = styled.div`
    max-width: var(--wrapperWidth);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

    div {
        color: #fff;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: bold;
    }

    button {
        font-size: 1rem;
        letter-spacing: 1px;
        padding: 8px 25px;
        cursor: pointer;
        background-color: #fff;
        color: var(--mainColor);
        border: 1px solid transparent;
        border-radius: 2px; 
        transition: all 100ms ease;
    }

    button:hover {
        background-color: var(--mainColor);
        color: #fff;
        border: 1px solid #fff;
    }
`;