import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cards from '../Pages/Cards';
import Home from '../Pages/Home';
import Reveal from '../Pages/Reveal';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/cards/:slugs' element={<Cards />} />
      <Route path='/reveal/:slug' element={<Reveal />} />
    </Routes>
  </BrowserRouter>
)

export default Router;
