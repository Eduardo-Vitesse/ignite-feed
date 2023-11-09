import { Trash, ThumbsUp } from "@phosphor-icons/react";

import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://github.com/Eduardo-Vitesse.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.comment.Content}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiz Eduardo</strong>
              <time
                title="16 de Setembro às 08:15h"
                dateTime="2023-09-16 08:15:26"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Anna, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
