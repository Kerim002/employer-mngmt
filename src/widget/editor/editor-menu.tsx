import React, { useState } from "react";
import { type Editor } from "@tiptap/react";
import { Toggle } from "@/shared/ui/toggle";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  BoldIcon,
  ChevronFirst,
  ChevronLast,
  DotSquare,
  EllipsisVertical,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  ItalicIcon,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { ColorEditor, HighlighEditor } from "@/features/editor";
const EditorMenu = ({ editor }: { editor: Editor | null }) => {
  const [color, setColor] = useState<string>("#ffff00");
  if (!editor) {
    return null;
  }
  return (
    <div className="w-full">
      <div className="flex flex-wrap space-x-4 items-center">
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          pressed={editor.isActive("heading", { level: 1 })}
        >
          {<Heading1 />}
        </Toggle>

        <Toggle
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          pressed={editor.isActive("heading", { level: 2 })}
        >
          <Heading2 />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          pressed={editor.isActive("heading", { level: 3 })}
        >
          <Heading3 />
        </Toggle>
        <Toggle
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          pressed={editor.isActive("bold")}
        >
          <BoldIcon />
        </Toggle>
        <Toggle
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          pressed={editor.isActive("italic")}
        >
          <ItalicIcon />
        </Toggle>
        <Toggle
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          pressed={editor.isActive("strike")}
        >
          <Strikethrough />
        </Toggle>

        <Toggle
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
          pressed={editor.isActive({ textAlign: "left" })}
        >
          <AlignLeft />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
          pressed={editor.isActive({ textAlign: "center" })}
        >
          <AlignCenter />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
          pressed={editor.isActive({ textAlign: "right" })}
        >
          <AlignRight />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("justify").run()
          }
          pressed={editor.isActive({ textAlign: "justify" })}
        >
          <AlignJustify />
        </Toggle>

        <Toggle
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          pressed={editor.isActive("bulletList")}
        >
          <List />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          pressed={editor.isActive("orderedList")}
        >
          <ListOrdered />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().liftListItem("listItem").run()
          }
          pressed={editor.isActive("sinkListItem")}
          disabled={!editor.can().liftListItem("listItem")}
        >
          <ChevronFirst />
        </Toggle>
        <Toggle
          onPressedChange={() =>
            editor.chain().focus().sinkListItem("listItem").run()
          }
          pressed={editor.isActive("sinkListItem")}
          disabled={!editor.can().sinkListItem("listItem")}
        >
          <ChevronLast />
        </Toggle>
        <ColorEditor editor={editor} />
        <HighlighEditor editor={editor} />
      </div>
    </div>
  );
};

export default EditorMenu;
