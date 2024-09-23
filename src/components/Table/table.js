import React, { useEffect, useState } from 'react';

const CharacterTable = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async (page) => {
    setLoading(true);
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    setCharacters(data.results);
    setTotalPages(data.info.pages);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Rick and Morty Characters</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Species</th>
              <th style={styles.tableHeader}>Gender</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr key={character.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{character.name}</td>
                <td style={styles.tableCell}>{character.species}</td>
                <td style={styles.tableCell}>{character.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={styles.pagination}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1} style={styles.pageButton}>
          Previous
        </button>
        <span style={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} style={styles.pageButton}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    borderRadius: '5px',
  },
  tableRow: {
    backgroundColor: '#fff',
    transition: 'background-color 0.2s ease',
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  tableRowHover: {
    backgroundColor: '#f1f1f1',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  pageButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  pageButtonDisabled: {
    backgroundColor: '#ccc',
  },
  pageButtonHover: {
    backgroundColor: '#0056b3',
  },
  pageInfo: {
    fontSize: '16px',
  },
};

export default CharacterTable;
