import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`
  text-transform: uppercase;
  color: gray;
  align-items: center;
  cursor: pointer;
      display: inline-flex;
  .switch {
    width: 30px;
    height: 15px;
    margin-left: 5px;
    border-radius: 8px;
    box-shadow: inset 0 0 8px #0000006b;
    .indicator {
      width: 15px;
      height: 15px;
      margin-left: ${props => props.state ? '15px' : '0'};
      opacity: ${props => props.state ? '0.9' : '1'};
      transition: 0.15s ease all;
      border-radius: 8px;
      background: #5e4b65;
    }
  }
`


export default ({label, state, onClick}) => <SwitchWrapper state={state} onClick={onClick}>
    {label}
    <div className="switch">
        <div className="indicator"/>
    </div>
</SwitchWrapper>