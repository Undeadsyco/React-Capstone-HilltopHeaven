import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Header, PrivateRoute } from './Components';
import { Login, Home, ReviewForm, ReviewList, RoomsList } from './Views';
import { Container } from './GlobalStyles';

import actions from "./Actions";

const App = (props) => {
  const {
    onLogin, user, isLoggedIn, onMakeReview, onGetReviews, list, onRemoveReview
  } = props;

  return (
    <Container>
      <Header isLoggedIn={isLoggedIn} admin={user.admin} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Login submit={onLogin} />} />
          <Route path="/*" element={<PrivateRoute />}>
            <Route path="welcome" element={<Home user={user} />} />
            <Route path="rooms" element={<RoomsList />} />
            <Route path="reviewForm" element={<ReviewForm submit={onMakeReview} />} />
            <Route path="reviews" element={
              <ReviewList submit={onGetReviews} list={list} admin={user.admin} deleteReview={onRemoveReview} />
            } />
          </Route>
        </Routes>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  list: state.reviews
});

const mapDispatchToProps = (dispatch) => {
  const { login, makeReview, getReviews, removeReview } = actions;

  return ({
    onLogin: (body) => login(body),
    onMakeReview: (body) => makeReview(body),
    onGetReviews: (filter) => getReviews(filter).then(data => dispatch({ type: 'GET_REVIEWS', data })),
    onRemoveReview: (id) => removeReview(id)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
