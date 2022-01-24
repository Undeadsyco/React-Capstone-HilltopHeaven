import { useState } from 'react';
import { v4 } from 'uuid';
import ListContainer from './styles';

const List = ({ submit, list, admin, deleteReview }) => {
  const [filter, setFilter] = useState('');

  const onDelete = (id) => {
    deleteReview(id);
    submit(filter);
  }

  return (
    <ListContainer className='multiGrid' cols={12} rows={12}>
      <div className='search-bar'>
        <h1>Know Our Feedback</h1>
        <div>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="customer service">Customer Service</option>
            <option value="hygiene/ambience">Hygiene and Ambience</option>
            <option value="dining">Dining</option>
            <option value="spa">Spa</option>
            <option value="swimmimg pool">Swimming Pool</option>
            <option value="other">Others</option>
          </select>
          <button onClick={() => submit(filter)}>Search</button>
        </div>
      </div>

      <div className='list'>
        <div className='list-row'>
          <h3 className='name'>Name</h3>
          <h3 className='message'>Message</h3>
        </div>
        {list?.map(item => (
          <div key={v4()} className='list-row'>
            <p className='name'>{item.name}</p>
            <p className='message'>{item.message}</p>
            {
              admin && 
              <div className='btnbox'>
                <button onClick={() => onDelete(item.id)}>Remove</button>
              </div>
            }
          </div>
        ))}
      </div>
    </ListContainer>
  );
};

export default List;