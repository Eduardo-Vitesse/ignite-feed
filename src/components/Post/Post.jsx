import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Eduardo-Vitesse.png"
          />
          <div className={styles.authorInfo}>
            <strong>Luiz Eduardo</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="16 de Setembro às 08:15h" dateTime="2023-09-16 08:15:26">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeara 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw </a>{" "}
          <a href="#">#rocketseat</a> <a href="#"></a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe eu comentário</strong>
        <textarea placeholder="Deixe um comentário" />
        <button type="submit">Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
