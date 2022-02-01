import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import Projects from "./views/projects/Projects";
import style from './app.css';

export default function App() {
  return (
    <Router className={style}>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>   
  )
}
