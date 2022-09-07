import { CardObject } from "../Interfaces/card.interface";
import styles from '../Styles/Card.module.scss';

interface Props {
  card: CardObject
  open: string
  margin: string
}

const Card: React.FC<Props> = ({ card, open, margin }) => {
  const { rarity, player, season, serialNumber, shirtNumber, age, position} = card;
  return (
    <div className={`${styles.Card} ${styles[rarity]} ${styles[open]} ${styles[margin]}`}>
      <img className={styles.PlayerImage} src={player.pictureUrl} alt={`${card.player.firstName} ${player.lastName}`} />
      <div className={styles.CardLayout}>
        <div className={styles.Seperate}>
          <div className={styles.CardPanel}>
            <div>{season.name}</div>
            <div>{serialNumber}</div>
          </div>
          <div className={styles.CardPanel}>
            <div>
              <img className={styles.ClubBadge} src={player.activeClub.pictureUrl} alt={player.activeClub.name} />
            </div>
            <div>{shirtNumber}</div>
          </div>
        </div>
        <div className={styles.CardBottom}>
          <div className={`${styles.PlayerName} ${styles[rarity]}`}>
            <div className={styles.FirstName}>{player.firstName}</div>
            <div className={styles.LastName}>{player.lastName}</div>
          </div>
          <div className={`${styles.Seperate} ${styles[rarity]}`}>
            <div className={styles.CardPanel}>
              <div><h3>Age</h3></div>
              <div>{age}</div>
            </div>
            <div className={styles.CardPanel}>
              <div><h3>Position</h3></div>
              <div>{position}</div>
            </div>
            <div className={styles.CardPanel}>
              <div><h3>Country</h3></div>
              <div>
                <img className={styles.NationalFlag} src={player.country.flagUrl} alt={player.country.code} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
