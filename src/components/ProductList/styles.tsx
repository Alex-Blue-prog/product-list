import styled from "styled-components";

export const Li = styled.li`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding: 25px 0;
    position: relative;
    user-select: none;
 
`;

export const LiImg = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 2;

    p {
        font-size: 1rem;
        font-weight: bold;
        color: #333;
        margin-left: 25px;
    }

    div {
        width: 100px;
    }

    img {
        height: 20px;
    }
`;

export const Liyear = styled.div`
    font-size: 1rem;
    color: #333;
    flex: 1;
`

export const Price = styled.div`
    font-size: 1rem;
    color: #333;
    font-weight: bold;
    flex: 1;
`

export const Dots = styled.div`
    cursor: pointer;
`;

type OptionsProps = {
    showOp: boolean,
    showOp2?: boolean
}

export const Options = styled.div<OptionsProps>`
    position: absolute;
    right: 20px;
    min-width: 80px;
    transition: opacity 100ms linear;
    display: ${props => props.showOp ? "block" : "none"};
    opacity: ${props => props.showOp2 ? 1 : 0};
    
    div { 
        background-color: var(--mainColor);
        font-size: 0.7rem;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
        cursor: pointer;
        padding: 5px 0;
        border: 2px solid #fff;
        transition: opacity 100ms linear;
        border-radius: 5px;
    }

    div:hover {
        opacity: .8;
    }
`;