import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
  <Suspense fallback={null}>
    <Styles />
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden",
    }}>
      <Header /> 
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Switch>
          {routes.map(routeItem => (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </div>
  </Suspense>
    );
};

export default Router;
