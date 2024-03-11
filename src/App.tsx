import React from 'react'
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Hero from './components/pages/hero/hero';
import Admin from './components/pages/admin/admin';

const App: React.FC = () => (<><Header />{<AppRouter />}</>)
export default App;
const APP_NAV = [
  { path: "/", element: <Hero /> },
  { path: "/admin", element: <Admin /> }
]
interface IRoutes {
  path: string;
  element: JSX.Element;
}
function AppRouter(): React.ReactElement {
  return (
    <Routes>
      {APP_NAV.map((el: IRoutes, id: number) => (
        <Route key={id} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
}