import ListContainer from './styles';

const List = () => {
  return (
    <ListContainer>
      <div>
        <h1>
          Room Details
        </h1>
        <div className='row'>
          <h3 className='roomType'>Room Type</h3>
          <h3 className='description'>Description</h3>
          <h3 className='services'>Included Services</h3>
          <h3 className='price'>Price</h3>
        </div>
        <div className='row'>
          <p className='roomType'>Deluxe-100 sqft</p>
          <p className='description'>Double bed, Heater, Room service, Charging points</p>
          <p className='services'>FREE breakfast, Accomodation</p>
          <p className='price'>4000</p>
        </div>
        <div className='row'>
          <p className='roomType'>Super Deluxe-250 sqfts</p>
          <p className='description'>King size bed, Heater, Charging point, Room service, AC</p>
          <p className='services'>FREE breakfast and Dinner, Accomodation</p>
          <p className=''>4500</p>
        </div>
        <div className='row'>
          <p className='roomType'>Family Room-300 sqft</p>
          <p className='description'>King size bed, Heater, Room service, Wi-Fi, AC</p>
          <p className='services'>FREE breakfast and Dinner, Accomodation</p>
          <p className='price'>6000</p>
        </div>
      </div>
    </ListContainer>
  );
};

export default List;