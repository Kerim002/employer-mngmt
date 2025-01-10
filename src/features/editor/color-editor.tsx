import { useState } from "react";
import { Toggle } from "@/shared/ui/toggle";
import { type Editor } from "@tiptap/react";
import { EllipsisVertical, Highlighter } from "lucide-react";
const ColorEditor = ({ editor }: { editor: Editor | null }) => {
  const [color, setColor] = useState<string>("#ffff00");
  if (!editor) {
    return null;
  }
  return (
    <div className="flex justify-center items-center relative">
      <Toggle
        onPressedChange={() => editor.chain().focus().setColor(color).run()}
        pressed={editor.isActive("highlight")}
        className="flex flex-col "
      >
        <p className="">A</p>
        <div style={{ backgroundColor: color }} className="w-6 h-1"></div>
      </Toggle>
      <label htmlFor="textColorPicker">
        <EllipsisVertical size="1rem" />
      </label>
      <input
        onChange={(e) => setColor(e.target.value)}
        type="color"
        id="textColorPicker"
      />
    </div>
  );
};

export default ColorEditor;
