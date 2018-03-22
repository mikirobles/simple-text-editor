import styled from 'styled-components';

export const PostsListWrapper = styled.div`
    --gap-size: 15px;
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: var(--gap-size);
    padding: var(--gap-size);
    background: #5f4b66;
    box-shadow: inset -4px 0px 11px 0px #00000038;
`;

export const Button = styled.button`
    height: 80px;
    grid-column: 1 / 2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 1em;
`;

export const PostButton = Button.extend`
    background: ${props => (!props.selected ? '#e8e9eb' : '#d3d4d6')};
    position: relative;
    padding: 0 2em;
    span {
      opacity: 0.6;
    }
    .delete {
        width: 20px;
        height: 20px;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        outline: none;
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.2;
        cursor: pointer;
        transition: 0.1s ease all;
        &:hover {
            opacity: 0.4;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const CreateButtonWrapper = Button.extend`
    background: #ffffff10;
    outline: none;
    border: 3px solid #ffffff70;
    color: #ffffff70;
    transition: 0.15s ease all;
    font-size: 2em;
    &:after {
        content: '+';
    }
    &:hover,
    &:focus {
        background: #ffffff20;
        border-color: #fff;
        color: #fff;
    }
`;
