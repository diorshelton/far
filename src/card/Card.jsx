import styles from "../card/styles/Card.module.css"
const Card = ({ data }) => {
	return (
		<div>
      <h2 className={styles.cardName}>
        {data.map((planet) => (planet.englishName))}
      </h2>
		</div>
	);
};

export default Card;