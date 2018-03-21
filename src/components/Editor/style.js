import styled from 'styled-components';

export default styled.section`
    width: 100%;
    max-width: 700px;
    margin: auto;
    color: #313638;
    background: #e8eaeb;
    box-shadow: 1px 9px 20px #0000000d;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 1em;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    .title-input {
        margin-bottom: 0.5em;
        padding: 0.2em 0em;
        font-size: 2em;
        border: none;
        outline: none;
        background: none;
        border-bottom: 3px solid #2c1320;
    }
    .post-input {
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        outline: none;
        background-color: #0000000a;
        padding: 0.5em;
        font-size: 1.2em;
        box-sizing: border-box;
    }
`;