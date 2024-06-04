import FAVORITE from '../views/pages/favorite';
import HOME from '../views/pages/home';
import DETAIL from '../views/pages/detail';

const routes = {
  '/': HOME,
  '/favorite': FAVORITE,
  '/detail/:id': DETAIL,
};

export default routes;
