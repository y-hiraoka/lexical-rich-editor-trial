import { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import styles from "./Editor.module.scss";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "MyEditor",
  onError: error => console.error(error),
};

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <div className={styles.editorContainer}>
        <RichTextPlugin
          contentEditable={<ContentEditable className={styles.contentEditable} />}
          placeholder={<div className={styles.placeholder}>いまなにしてる？</div>}
        />
      </div>
      <HistoryPlugin />
    </LexicalComposer>
  );
};
