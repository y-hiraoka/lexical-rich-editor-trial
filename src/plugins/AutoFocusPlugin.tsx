import { FC, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const AutoFocusPlugin: FC = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
};
