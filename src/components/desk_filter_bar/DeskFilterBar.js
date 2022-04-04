import React from "react";
import './deskFilterBar.scss';

const DeskFilterBar = ({desksList, desk, setDesk}) => {

  const getClass = (d) => {
    return desk === d ? 'active' : 'default';
  }

  const handleChange = (event) => {
    event.preventDefault();
    const selectedDesk = event.target.value;
    if (selectedDesk === 'no-value') {
      setDesk();
    } else {
      setDesk(selectedDesk);
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
        {desksList.map(d => <li key={d} className={getClass(d)} onClick={() => setDesk(d)}>{d}</li>)}
      </ul>
    </nav>
  )
}

export default DeskFilterBar;