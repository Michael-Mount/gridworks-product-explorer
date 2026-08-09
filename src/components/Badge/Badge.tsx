import styles from "./Badge.module.css";

type BadgeVariant = "default" | "featured";

interface BadgeProps {
  text: string;
  badgeVariant: BadgeVariant;
}

export default function Badge({ text, badgeVariant }: BadgeProps) {
  if (badgeVariant === "default") {
    return <span className={styles.default}>{text}</span>;
  } else {
    return <span className={styles.featured}>{text}</span>;
  }
}
