import { Link } from 'react-router-dom';
import HomeContainer from './styles';

const Home = ({ user }) => {
  return (
    <HomeContainer className='multiGrid' rows={12} cols={12}>
      <h1>Welcome To Holltop Heaven Resort {user.admin && <span>As Admin</span>}</h1>
      <div>
        <h3>About Us</h3>
        <p>'Hilltop Heaven' is one of the most rejoicing resorts provided by 'iServices' that rests on the serene lap of nature. Being appreciated as excellent by all customers, Hilltop Heaven resort will be your apt. choice to enjoy your vacation.</p>
        <button><Link to='/rooms'>Room Details</Link></button>
      </div>
    </HomeContainer>
  );
};

export default Home;
