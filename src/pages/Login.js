import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import LoginForm from '../components/Forms/LoginForm';
import LoginStyles from './login.module.scss';

// Render register component if sign up is clicked

const Login = () => {
  return (
    <div className={LoginStyles.background}>
      <Container className="d-flex flex-column justify-content-center h-100">
        <Row className={`justify-content-center  ${LoginStyles.formBody}`}>
          <Col xs={10} sm={9} md={7} lg={5} xl={4}>
            <div className={LoginStyles.rounded}>
              <div className="card-body">
                <div className="mb-4">
                  <div className="text-center">
                    <Link to="/">
                      <img
                        src="/images/default.png"
                        alt="Remuner8"
                        className="img-fluid"
                        width="130"
                      />
                    </Link>
                  </div>
                  <Row className="justify-content-center">
                    <Col xs={11} sm={10} md={10} lg={10}>
                      <LoginForm />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
