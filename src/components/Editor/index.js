import React from 'react';
import EditorWrapper from './style'

export default ({ post, editPost }) => (
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
