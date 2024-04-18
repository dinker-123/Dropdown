import React, { useState } from 'react';
import styles from '../dropdown/style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
        <h4>Should you use a dropdown?</h4>
        <button onClick={toggleDropdown} className={styles.dropbtn}>
  {selectedItem || "Select"}<FontAwesomeIcon icon={faCaretDown} />
</button>


      <div className={`${styles.dropdownContent} ${isOpen ? styles.dropdownContentShow : ''}`}>
        {items.map((item, index) => (
          <a key={index} onClick={() => handleItemClick(item)} className={styles.dropdownItem}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
