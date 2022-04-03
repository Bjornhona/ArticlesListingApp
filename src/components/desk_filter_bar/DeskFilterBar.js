import React from "react";

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
      <select value={desk} onChange={handleChange}>
        <option value={'no-value'}>None</option>)
        {desksList.map(d => <option value={d}>{d}</option>)}
      </select>
      <ul>
        {desksList.map(d => <li key={d} className={getClass(d)} onClick={() => setDesk(d)}>{d}</li>)}
      </ul>
    </nav>
  )
}

export default DeskFilterBar;