import styles from "./App.module.css";

export const App = () => {
  return (
    <main className={styles.article}>
      <div className={styles["article-image"]}>
        <img
          src="/drawers.jpg"
          alt="Article illustration"
          className={styles.image}
        />
      </div>
      <div className={styles["article-text"]}>
        <h1 className={styles.title}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className={styles.description}>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className={styles.info}>
          <div className={styles.profile}>
            <img
              src="/avatar-michelle.jpg"
              alt="Michelle's avatar"
              className={styles.avatar}
            />
            <div className={styles.details}>
              <h2 className={styles.name}>Michelle Appleton</h2>
              <p className={styles.date}>28 Jun 2020</p>
            </div>
          </div>
          <div className={styles.share}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="13"
              className={styles["icon-share"]}
              aria-label="Click to share this article"
            >
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
            </svg>
          </div>
          <div className={styles["share-to"]}>
            <div className={styles.content}>
              <p className={styles["text-share"]}>share</p>
              <div className={styles.icons}>
                <img
                  src="/icon-facebook.svg"
                  alt="Share this article in facebook"
                  className={styles.icon}
                />
                <img
                  src="/icon-twitter.svg"
                  alt="Share this article in twitter"
                  className={styles.icon}
                />
                <img
                  src="/icon-pinterest.svg"
                  alt="Share this article in pinterest"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
