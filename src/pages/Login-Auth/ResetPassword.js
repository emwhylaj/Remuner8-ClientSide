import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ResetPassword from 'components/Forms/Login-Auth/ResetPassword';
import 'assets/scss/forms.styles.scss';

const ResetPasswordPage = () => {
  return (
    <div className="background">
      <Container className="d-flex flex-column justify-content-center h-100 py-3">
        <Row className="justify-content-center formBody">
          <Col xs={10} sm={10} md={7} lg={5} xl={5}>
            <div className="rounded">
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
                    <Col xs={11} sm={11} md={11} lg={11}>
                      <ResetPassword />
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

export default ResetPasswordPage;
