import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './components/About';
import { Main } from './components/Main';
import { Header } from './Header';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact component={Main} />
      <Route path='/about' exact component={About} />
    </BrowserRouter>
  );
};
