import { useParams } from 'react-router-dom';
import { useGetCards } from '../GraphQL/getCards';
import Card from '../Components/Card';

const Cards: React.FC = () => {
  const params = useParams<{ slugs: string }>();
  const { slugs } = params;
  const slugsArray = slugs?.split(',');
  const cards = useGetCards(slugsArray ? slugsArray : []);
  return (
    <main className='Flex'>
      {cards?.map((card) => 
        <Card key={card.id} card={card} open='open' margin='margin' />)}
    </main>
  )
}

export default Cards;
