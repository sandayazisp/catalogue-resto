import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Restaurant from '../views/pages/restaurant';

const routes = {
  '/': Restaurant,
  '/home': Restaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
