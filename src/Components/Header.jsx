import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RiHotelLine } from 'react-icons/ri';

const Header = ({ isLoggedIn, admin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate('/')
  }
  return (
    <div className="header">
      <div>
        <RiHotelLine size={57} />
        <h2>Hilltop Heaven</h2>
      </div>
      {isLoggedIn && 
        <nav>
          {!admin && <Link to='/reviewForm'>Send Feedback</Link>}
          <Link to='/reviews'>{admin ? 'View Feedback' : 'Know Our Feedback'}</Link>
          <button onClick={() => logout()}>Logout</button>
        </nav>
      }
    </div>
  );
};

export default Header;