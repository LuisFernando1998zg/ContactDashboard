import React, { useState } from 'react';
import Section from '../../components/Sections/Section';
import { useContacts } from '../../contexts/ContactsContext';
import Card from '../../components/Cards/Card';
import Pagination from '../../components/Pagination/Pagination';

export const Favorites = () => {
  const { data } = useContacts();
  const favorites = data.filter(contact => contact.isFavorite);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentData = favorites.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <main>
      <Section title="Favorites">
        {currentData.map((contact) => (
          <Card
            key={contact.id}
            id={contact.id}
            img={contact.avatar}
            first_name={contact.first_name}
            last_name={contact.last_name}
            email={contact.email}
            isfavorite={contact.isFavorite}
            page="favorites"
          />
        ))}
      </Section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default Favorites;