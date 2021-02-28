import React, { useRef, useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import AdminNavbar from 'components/Navbars/AdminNavbar';
import AdminFooter from 'components/Footers/AdminFooter';
import Sidebar from 'components/Sidebar/Sidebar';
import { MainContent } from 'components/Dashboard/MainContent';

// image
import Remuner8Logo from '../../assets/img/brand/profile3.png';

import routes, { employeeRoutes, hrRoutes, administrationRoutes } from 'routes';

const Dashboard = props => {
  const mainContent = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = routes => {
    return routes.map((route, index) => {
      if (route.layout === '/admin') {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={index}
          />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        employeeRoutes={employeeRoutes}
        hrRoutes={hrRoutes}
        administrationRoutes={administrationRoutes}
        logo={{
          innerLink: '/',
          imgSrc: Remuner8Logo,
          imgAlt: 'Remuner8 Logo'
        }}
      />
      {/* <div
        className="bg-gradient-info position-relative"
        style={{ height: '427px' }}
      /> */}
      <MainContent className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          {getRoutes(employeeRoutes)}
          {getRoutes(hrRoutes)}
          {getRoutes(administrationRoutes)}
        </Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </MainContent>
    </>
  );
};

export default Dashboard;
