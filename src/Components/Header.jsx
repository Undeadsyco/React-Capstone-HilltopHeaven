import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiHotelLine } from 'react-icons/ri';

const Header = ({ isLoggedIn }) => {
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
          <button onClick={() => logout()}>Logout</button>
        </nav>
      }
    </div>
  );
};

export default Header;