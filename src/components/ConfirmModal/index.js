import styled from 'styled-components';
import React from 'react';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background: #00000025;
    display: flex;
    justify-content: center;
    align-items: center;
    .confirm-window {
        border-radius: 3px;
        background: white;
        padding: 1em;
        .btn-row {
          display: flex;
          justify-content: space-between;
        }
        button {
            margin-top: 1em;
            font-size: 1em;
            border: none;
            outline: none;
            background: #a55d5c;
            border-radius: 3px;
            color: white;
            padding: 0.5em 0;
            width: 30%;
            cursor: pointer;
        }
    }
`;

export default ({ title, text, onConfirm, onCancel }) => (
    <ModalWrapper>
        <div className="confirm-window">
            {title ? <h1>{title}</h1> : null}
            <p>{text}</p>
            <div className="btn-row">
                <button onClick={onConfirm}>OK</button>
                <button style={{background: '#2a2f3050'}} onClick={onCancel}>Cancel</button>
            </div>
        </div>
    </ModalWrapper>
);
