import { EditorThemeClasses } from "lexical";
import styles from "./editorTheme.module.scss";

export const theme: EditorThemeClasses = {
  heading: {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
    h5: styles.h5,
    h6: styles.h6,
  },
  quote: styles.quote,
  list: {
    ul: styles.ul,
    ol: styles.ol,
    listitem: styles.listitem,
    nested: {
      listitem: styles.nestedListItem,
    },
    listitemChecked: styles.listitemChecked,
    listitemUnchecked: styles.listitemUnchecked,
  },
};
