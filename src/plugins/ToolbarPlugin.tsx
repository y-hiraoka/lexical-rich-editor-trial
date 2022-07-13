import { FC, useEffect, useState } from "react";
import { TbH1, TbH2, TbH3 } from "react-icons/all";
import styles from "./ToolbarPlugin.module.scss";

const BlockTypeList = ["paragraph", "h1", "h2", "h3"] as const;
type BlockType = typeof BlockTypeList[number];

export const ToolbarPlugin: FC = () => {
  const [blockType, setBlockType] = useState<BlockType>("h2");

  return (
    <div className={styles.toolbar}>
      <button type="button" role="checkbox" aria-checked={blockType === "h1"}>
        <TbH1 />
      </button>
      <button type="button" role="checkbox" aria-checked={blockType === "h2"}>
        <TbH2 />
      </button>
      <button type="button" role="checkbox" aria-checked={blockType === "h3"}>
        <TbH3 />
      </button>
    </div>
  );
};
