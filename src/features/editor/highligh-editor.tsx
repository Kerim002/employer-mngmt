import { Toggle } from "@/shared/ui/toggle";
import { type Editor } from "@tiptap/react";
import { EllipsisVertical, Highlighter } from "lucide-react";
import { useState } from "react";
const HighlighEditor = ({ editor }: { editor: Editor | null }) => {
  const [color, setColor] = useState<string>("#ffff00");
  if (!editor) {
    return null;
  }
  return (
    <div className="flex justify-center items-center relative">
      <Toggle
        onPressedChange={() =>
          editor.chain().focus().toggleHighlight({ color }).run()
        }
        pressed={editor.isActive("highlight")}
        className="flex flex-col "
      >
        <Highlighter />
        <div style={{ backgroundColor: color }} className="w-6 h-1"></div>
      </Toggle>
      <label htmlFor="highlighterColorPicker">
        <EllipsisVertical size="1rem" />
      </label>
      <input
        onChange={(e) => setColor(e.target.value)}
        type="color"
        name=""
        id="highlighterColorPicker"
      />
    </div>
  );
};

export default HighlighEditor;
