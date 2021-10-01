import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css';

export interface IProps {
  className?: string;
  content: string;
  setContent: (value: string) => void;
}

function loadingComponent() {
  return <p>Loading ...</p>;
}

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: loadingComponent,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }, { color: [] }, { background: [] }],
    ['clean'],
  ],
};
const formats = [
  'header',
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

function EditorForm({ content, setContent }: IProps) {
  return (
    <QuillNoSSRWrapper
      style={{ height: '700px', width: '844px', marginBottom: '80px', marginTop: '34px' }}
      modules={modules}
      formats={formats}
      theme="snow"
      value={content || ''}
      onChange={(content: string) => {
        setContent(content);
      }}
    />
  );
}

export default EditorForm;
