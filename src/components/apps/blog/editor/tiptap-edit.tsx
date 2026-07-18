
import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Link } from "@tiptap/extension-link";
import { Image } from "@tiptap/extension-image";
import { Underline } from "@tiptap/extension-underline";
import { OrderedList } from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { Bold, Code, Italic, Link2, List, ListOrdered, Redo, Underline as UnderlineIcon, Undo, Image as ImageIcon } from 'lucide-react';



// Add your own styles (optional)
import "./tiptap.css";

const MyEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Image,
      Underline,
      OrderedList,
      OrderedList,
      BulletList,
      ListItem,
    ],
    content: "<p>Start typing...</p>",
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // Toolbar button click handlers
  const handleBold = () => editor?.chain().focus().toggleBold().run();
  const handleItalic = () => editor?.chain().focus().toggleItalic().run();
  const handleUnderline = () =>
    editor?.chain()?.focus()?.toggleUnderline()?.run();
  const handleH1 = () =>
    editor?.chain().focus().toggleHeading({ level: 1 }).run();
  const handleH2 = () =>
    editor?.chain().focus().toggleHeading({ level: 2 }).run();
  const handleH3 = () =>
    editor?.chain().focus().toggleHeading({ level: 3 }).run();
  const handleList = () => editor?.chain().focus().toggleBulletList().run();
  const handleOrderedList = () =>
    editor?.chain().focus().toggleOrderedList().run();
  const handleLink = () => {
    const url = prompt("Enter a URL");
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };
  const handleImage = () => {
    const url = prompt("Enter image URL");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };
  const handleCodeBlock = () => editor?.chain().focus().toggleCodeBlock().run();
  const handleUndo = () => editor?.chain().focus().undo().run();
  const handleRedo = () => editor?.chain().focus().redo().run();

  return (
    <div className="editor-container">
      {/* Toolbar */}
      <div className="toolbar flex gap-5 flex-wrap">
        <button onClick={handleBold}>
          <Bold
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleItalic}>
          <Italic
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleUnderline}>

          <UnderlineIcon
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleH1}>
          <span className="text-sm font-medium  hover:text-primary dark:hover:text-primary">
            H1
          </span>
        </button>
        <button onClick={handleH2}>
          <span className="text-sm font-medium  hover:text-primary dark:hover:text-primary">
            H2
          </span>
        </button>
        <button onClick={handleH3}>
          <span className="text-sm font-medium  hover:text-primary dark:hover:text-primary">
            H3
          </span>
        </button>
        <button onClick={handleList}>
          <List
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleOrderedList}>
          <ListOrdered
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleLink}>
          <Link2
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleImage}>
          <ImageIcon
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleCodeBlock}>
          <Code
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleUndo}>
          <Undo
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
        <button onClick={handleRedo}>
          <Redo
            className="text-lg font-semibold  hover:text-primary dark:hover:text-primary"
            size={16}
          />
        </button>
      </div>

      {/* Editor content area */}
      <EditorContent editor={editor} />

      {/* Displaying the raw HTML content for testing */}
      <div className="output">
        <h3>Output</h3>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

export default MyEditor;
