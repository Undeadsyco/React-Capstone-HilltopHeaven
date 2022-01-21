import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Header, PrivateRoute } from './Components';
import { Login, Home } from './Views';
import { Container } from './GlobalStyles';

import actions from "./Actions";

const App = (props) => {
  const { onLogin, user, isLoggedIn } = props;

  return (
    <Container>
      <Header isLoggedIn={isLoggedIn} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Login submit={onLogin} />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="welcome" element={<Home user={user} />} />
          </Route>
        </Routes>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  const { login } = actions;

  return ({
    onLogin: (body) => login(body),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
