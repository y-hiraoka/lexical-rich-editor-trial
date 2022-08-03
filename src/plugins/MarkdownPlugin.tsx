import { FC } from "react";
import { TRANSFORMERS } from "@lexical/markdown";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";

export const MarkdownPlugin: FC = () => {
  return <MarkdownShortcutPlugin transformers={TRANSFORMERS} />;
};
