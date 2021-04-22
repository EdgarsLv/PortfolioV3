import "./App.css";
import Layout from "./components/Layout/Layout";
import { Switch, Route, useLocation } from "react-router-dom";
// import { CSSTransitionGroup } from "react-transition-group";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Projects from "./components/Pages/Projects/Projects";
import Skills from "./components/Pages/Skills/Skills";
import Contact from "./components/Pages/Contact/Contact";

const App = () => {
  let location = useLocation();

  return (
    <Layout>
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
