import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://th.bing.com/th/id/OIP.TJO-CjFrXCs8_G_m2KEk5wHaE8?pid=ImgDet&rs=1"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/Eduardo-Vitesse.png"
        />

        <strong>Luiz Eduardo</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
