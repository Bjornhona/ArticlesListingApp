import React from "react";
import './deskFilterBar.scss';

const DeskFilterBar = (props) => {
  const {desk} = props;
  const desksList = ['Sports', 'Arts', 'Business', 'Health', 'Technology', 'Style', 'Play', 'Politics']

  const getClass = (d) => {
    return desk === d ? 'active' : 'default';
  }

  const handleChange = (event) => {
    event.preventDefault();
    const selectedDesk = event.target.value;
    if (selectedDesk === 'no-value') {
      props.setDesk();
    } else {
      props.setDesk(selectedDesk);
    }
  }

  return (
    <nav>
      <select value={desk} onChange={handleChange} defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disabled hidden>Select desk...</option>
        <option value={'no-value'}>All desks</option>)
        {desksList.map(d => <option key={d} value={d}>{d}</option>)}
      </select>
      <ul>
        {desksList.map(d => <li key={d} className={getClass(d)} onClick={() => props.setDesk(d)}>{d}</li>)}
      </ul>
    </nav>
  )
}

export default DeskFilterBar;