import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Confetti from 'canvas-confetti';
import { useGetCards } from '../GraphQL/getCards';
import Card from '../Components/Card';
import Button from '../Components/Button';
import styles from '../Styles/Reveal.module.scss'
import logo from '../Images/sorare.svg';

const Reveal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const params = useParams<{ slug: string }>();
  const { slug } = params;
  const slugsArray = slug?.split(',');
  const cards = useGetCards(slugsArray ? slugsArray : []);
  const revealCard = () => {
    if (open) return false;
    setOpen(true)
    setTimeout(function(){Confetti({ scalar: 2, particleCount: 30, colors: ['#22344a', '#e7353c', '#f6f8f9'] });}, 3000);
  }
  return (
    <main className='Flex'>
      <section className={styles.RevealSection}>
        <div className={`${styles.FlipCard} ${styles[open ? 'open' : '']}`}>
          <div className={styles.FlipCardInner}>
            <div className={styles.FlipCardFront}>
              <img src={logo} alt='So Rare' />
            </div>
            <div className={styles.FlipCardBack}>
            {cards?.map((card) => 
              <Card key={card.id} card={card} open={open ? 'open' : ''} margin='' />)}
            </div>
          </div>
        </div>
      </section>
      {open ? null : <Button onClick={revealCard}>Reveal</Button>}
    </main>
  )
}

export default Reveal;
