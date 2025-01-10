import { languages } from "@/shared/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import React from "react";
type Props = {
  lang: LanguageShortVariant;
  setLang: (value: React.SetStateAction<LanguageShortVariant>) => void;
};
const FaqLanguageSelect = ({ lang, setLang }: Props) => {
  return (
    <Select
      value={lang}
      onValueChange={(value: LanguageShortVariant) => setLang(value)}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.short} value={language.short}>
            {language.full}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FaqLanguageSelect;
