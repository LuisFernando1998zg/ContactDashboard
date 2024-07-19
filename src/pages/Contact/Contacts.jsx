import React from 'react';
import Section from '../../components/Sections/Section';
import { useContacts } from '../../contexts/ContactsContext';
import Card from '../../components/Cards/Card';

export const Contacts = () => {
    const { data } = useContacts();
    return (
        <main>
            <Section title="Contacts">
                {data.map((contact) => (
                    <Card
                        key={contact.id}
                        id={contact.id}
                        img={contact.avatar}
                        first_name={contact.first_name}
                        last_name={contact.last_name}
                        email={contact.email}
                        isfavorite={contact.isFavorite}
                        page="contacts"  // Pasando la página como prop
                    />
                ))}
            </Section>
        </main>
    );
};

export default Contacts;