import React from 'react';
import Styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface IProps {
  className?: string;
  content: string;
  setContent: (value: string) => void;
}

function EditorForm({ content, setContent }: IProps): React.ReactElement {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      //   ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };
  const formats = [
    //'font',
    'header',
    // 'bold',
    // 'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <SEditorForm>
      <ReactQuill
        className="editor"
        theme="snow"
        modules={modules}
        formats={formats}
        value={content || ''}
        onChange={(content, delta, source, editor) => {
          setContent(content);
        }}
        //   >
        //     <div className="my-editing-area"></div>
        //   </ReactQuill>
      />
    </SEditorForm>
  );
}

const SEditorForm = Styled.div`
    .editor{
        width : 844px;
        height : 700px;
        margin-bottom : 80px;
        margin-top : 34px;
    }
    /* .my-editing-area{
        font-size : 16px;
        letter-spacing: -0.5px;
        strong{
            font-weight : bold;
        }
        em{
            font-style : italic;
        }
    } */
  `;

export default EditorForm;
