import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(inputs) {
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/splash"
              render={(props) => (
                <Splash
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={inputs.theme}
                  setTheme={inputs.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
