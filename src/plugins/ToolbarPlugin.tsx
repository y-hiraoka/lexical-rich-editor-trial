import { FC, useCallback, useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createHeadingNode,
  $isHeadingNode,
  HeadingTagType,
} from "@lexical/rich-text";
import { $wrapLeafNodesInElements } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from "lexical";
import { TbH1, TbH2, TbH3 } from "react-icons/all";
import styles from "./ToolbarPlugin.module.scss";

const SupportedBlockType = {
  paragraph: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
} as const;
type BlockType = keyof typeof SupportedBlockType;

export const ToolbarPlugin: FC = () => {
  const [blockType, setBlockType] = useState<BlockType>("paragraph");
  const [editor] = useLexicalComposerContext();

  const formatHeading = useCallback(
    (type: HeadingTagType) => {
      if (blockType !== type) {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            $wrapLeafNodesInElements(selection, () => $createHeadingNode(type));
          }
        });
      }
    },
    [blockType, editor],
  );

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return;

        const anchorNode = selection.anchor.getNode();
        console.log(selection.anchor);
        console.log(selection.focus);
        const targetNode =
          anchorNode.getKey() === "root"
            ? anchorNode
            : anchorNode.getTopLevelElementOrThrow();

        if ($isHeadingNode(targetNode)) {
          const tag = targetNode.getTag();
          setBlockType(tag);
        } else {
          const nodeType = targetNode.getType();
          if (nodeType in SupportedBlockType) {
            setBlockType(nodeType as BlockType);
          } else {
            setBlockType("paragraph");
          }
        }
      });
    });
  }, [editor]);

  return (
    <div className={styles.toolbar}>
      <button
        // fooo
        type="button"
        role="checkbox"
        title={SupportedBlockType["h1"]}
        aria-label={SupportedBlockType["h1"]}
        aria-checked={blockType === "h1"}
        onClick={() => formatHeading("h1")}>
        <TbH1 />
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["h2"]}
        aria-label={SupportedBlockType["h2"]}
        aria-checked={blockType === "h2"}
        onClick={() => formatHeading("h2")}>
        <TbH2 />
      </button>
      <button
        type="button"
        role="checkbox"
        title={SupportedBlockType["h3"]}
        aria-label={SupportedBlockType["h3"]}
        aria-checked={blockType === "h3"}
        onClick={() => formatHeading("h3")}>
        <TbH3 />
      </button>
    </div>
  );
};
