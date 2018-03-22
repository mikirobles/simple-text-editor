import React from 'react';
import EditorWrapper from './style';
import EditorSwitch from '../EditorSwitch';
import ReactMarkdown from 'react-markdown';
import './github-markdown.css';

export default class extends React.PureComponent {
    state = {
        previewMarkdown: false
    };
    render() {
        const { post, editPost } = this.props;
        return (
            <EditorWrapper>
                <input
                    value={post.title || ''}
                    onChange={e =>
                        editPost({
                            field: 'title',
                            value: e.target.value,
                            date: post.date
                        })
                    }
                    placeholder={'Title'}
                    className={'title-input'}
                    type="text"
                />
                <div className="switch-container">
                    <EditorSwitch state={this.state.previewMarkdown} onClick={() => this.setState(prevState => ({previewMarkdown:!prevState.previewMarkdown}))} label={'Preview'} />
                </div>
                    {!this.state.previewMarkdown ? (
                        <textarea
                            className={'post-input'}
                            value={post.text || ''}
                            onChange={e =>
                                editPost({
                                    field: 'text',
                                    value: e.target.value,
                                    date: post.date
                                })
                            }
                            name="post"
                            id="post"
                            cols="30"
                            rows="10"
                        />
                    ) : <ReactMarkdown className={'markdown markdown-body'} source={post.text} />}
            </EditorWrapper>
        );
    }
}
