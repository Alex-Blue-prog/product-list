import styled from "styled-components";

export const Container = styled.section`
`;

export const Wrapper = styled.div`
    max-width: var(--wrapperWidth);
    margin: 0 auto;
`;

export const TopContent = styled.div`
    display: flex;
    justify-content: space-between;

    p:first-child {
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--mainColor);
    }

    p:last-child {
        font-size: 0.9rem;
        color: #333;
    }
`;

export const Ul = styled.ul`
    margin-top: 50px;
    list-style: none;
`;

