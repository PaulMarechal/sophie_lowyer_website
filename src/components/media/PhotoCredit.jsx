import styles from "./PhotoCredit.module.css";

export default function PhotoCredit({ language = "fr", placement = "bottom", className = "" }) {
  const label = language === "en"
    ? "Photo: Sergey / Adobe Stock"
    : "Photo : Sergey / Adobe Stock";

  return (
    <small
      className={`${styles.credit} ${placement === "top" ? styles.topRight : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      {label}
    </small>
  );
}
