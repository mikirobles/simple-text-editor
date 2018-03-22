import styled, { injectGlobal } from 'styled-components';
import React from 'react';

injectGlobal`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Lato', sans-serif;
}
h1,h2,h3 {
  font-family: 'Playfair Display', serif;
}
`;

const LayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    min-height: 100vh;
    width: 100%;
    --background-color: ${props => props.bgColor || 1};
    background: hsl(var(--background-color), 38%, 58%);;
    --header-height: 2.5em;
    header {
        grid-column: 1 / 3;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: #313638;
        color: #e8e9eb;
        text-align: center;
        font-size: 2em;
    }
    .container {
        display: flex;
        flex-direction: row;
        grid-column: 1 / 3;
    }
`;

export default ({ children, bgColor }) => (
    <LayoutWrapper bgColor={bgColor}>
        <React.Fragment>{children}</React.Fragment>
    </LayoutWrapper>
);