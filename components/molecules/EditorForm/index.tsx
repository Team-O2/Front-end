import React from 'react';
import 'react-quill/dist/quill.snow.css';

export interface IProps {
  className?: string;
  content: string;
  setContent: (value: string) => void;
}

function EditorForm({ content, setContent }: IProps): React.ReactElement {
  const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

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
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={content || ''}
      onChange={(content: string) => {
        setContent(content);
      }}
    />
  );
}

export default EditorForm;
