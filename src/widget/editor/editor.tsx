"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import TextStyle from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import EditorMenu from "./editor-menu";
type Props = {
  content?: string;
};
const Editor = ({ content = "" }: Props) => {
  const editor = useEditor({
    extensions: [
      Bold,
      Strike,
      Italic,
      Document,
      Text,
      Paragraph,
      TextStyle.configure({ mergeNestedSpanStyles: true }),
      Color.configure({
        types: ["textStyle"],
      }),
      ListItem,
      OrderedList.configure({
        HTMLAttributes: {
          style: "list-style: decimal;",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "my-custom-class",
          style: "list-style:circle; ",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "list"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-input bg-black outline-none p-4",
      },
    },
    content,
  });
  return (
    <div className="flex-1 w-full">
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} />
      <button onClick={() => console.log(editor?.getJSON())}>log</button>
    </div>
  );
};

export default Editor;
