import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <main>
    <h1>Dan Baskeyfield x Sorare Challenge</h1>
    <h2>Part 1</h2>
    <p></p>
    <Link to='/cards/marco-verratti-2021-unique-1'>Part 1</Link>
    <h2>Part 2</h2>
    <p></p>
    <Link to='/cards/marco-verratti-2021-unique-1,marco-verratti-2021-rare-1,marco-verratti-2021-limited-1,marco-verratti-2021-common,marco-verratti-2021-super_rare-1'>Part 2</Link>  
    <h2>Part 3</h2>
    <p></p>
    <Link to='/reveal/marco-verratti-2021-unique-1'>Part 3</Link>  
  </main>
);

export default Home;
