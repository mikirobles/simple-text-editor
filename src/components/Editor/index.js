import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../actions/index';

const EditorWrapper = styled.section`
    width: 100%;
    max-width: 700px;
    margin: auto;
    color: #313638;
    height: calc(100vh - var(--header-height));
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
        height: 40vh;
        resize: none;
        border: none;
        outline: none;
        background-color: #0000000a;
        padding: 0.5em;
        font-size: 1.2em;
        box-sizing: border-box;
    }
`;

const Editor = ({ post, editPost }) => (
    <EditorWrapper>
        <input
            value={post.title || ''}
            onChange={e =>
                editPost({
                    field: 'title',
                    value: e.target.value,
                    id: post.id
                })
            }
            placeholder={'Title'}
            className={'title-input'}
            type="text"
        />
        <textarea
            className={'post-input'}
            value={post.text || ''}
            onChange={e =>
                editPost({
                    field: 'text',
                    value: e.target.value,
                    id: post.id
                })
            }
            name="post"
            id="post"
            cols="30"
            rows="10"
        />
    </EditorWrapper>
);

const mapDispatchToProps = dispatch => ({
    editPost: (a) => dispatch(editPost(a))
});

export default connect(null, mapDispatchToProps)(Editor);
