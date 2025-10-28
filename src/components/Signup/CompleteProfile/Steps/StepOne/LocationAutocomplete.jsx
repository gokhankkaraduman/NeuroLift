import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { fetchLocations } from '../../../../../services/locationService';
import styles from './LocationAutocomplete.module.css';

export default function LocationAutocomplete({ onSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFetch = useCallback(
    debounce(async (q) => {
      const results = await fetchLocations(q);
      setSuggestions(results);
    }, 500),
    []
  ); 

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleFetch(e.target.value);
  };

  const handleSelect = (location) => {
    setQuery(location.display_name);
    setSuggestions([]);
    if (onSelect) onSelect(location);
  };

  return (
    <div className={styles.autocompleteContainer}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type your city or address..."
        className={styles.autocompleteInput}
      />
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((item) => (
            <li
              key={item.place_id}
              onClick={() => handleSelect(item)}
              className={styles.suggestionItem}
            >
              {item.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
