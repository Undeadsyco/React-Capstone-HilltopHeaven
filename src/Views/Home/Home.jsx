const Home = ({ user }) => {
  return (
    <div>
      Welcome To Holltop Heaven Resort {user.admin && <span>As Admin</span>}
    </div>
  );
};

export default Home;
