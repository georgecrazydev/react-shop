import styles from './Card.module.scss';

function Card() {
  return (
    <div className={styles.card}>
      <button className={styles.buttonUnliked}>
        <img src="./img/unliked.svg" alt="unliked" width={15} height={13} />
      </button>
      <img
        className={styles.cardImg}
        src="./img/1.png"
        alt="img"
        width={150}
        height={150}
      />
      <h5>Turtleneck sweater</h5>
      <div className={styles.cardInfo}>
        <div>
          <p>Price:</p>
          <b>25.99 gel.</b>
        </div>
        <button className={styles.buttonPlus}>
          <img src="./img/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;
