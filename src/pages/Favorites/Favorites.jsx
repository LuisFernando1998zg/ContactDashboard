import React from 'react';
import Section from '../../components/Sections/Section';
import { useContacts } from '../../contexts/ContactsContext';
import Card from '../../components/Cards/Card';

export const Favorites = () => {
    const { data } = useContacts();
    return (
        <main>
            <Section title="Favorites">
                {data.filter(contact => contact.isFavorite).map((contact) => (
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
        </main>
    );
}