import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { Editor } from './style';

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
    <Editor
      theme="snow"
      modules={modules}
      formats={formats}
      value={content || ''}
      onChange={(content) => {
        setContent(content);
      }}
    />
  );
}

export default EditorForm;
