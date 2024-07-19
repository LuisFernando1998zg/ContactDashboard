import React from 'react';
import Card from '../../components/Cards/Card';
import Section from '../../components/Sections/Section';
import { useContacts } from '../../contexts/ContactsContext';

const Home = () => {
    const { data } = useContacts();
    const favoriteContacts = data.filter(contact => contact.isFavorite).slice(0, 4);
    const regularContacts = data.filter(contact => !contact.isFavorite).slice(0, 6);

    return (
        <main>
            <Section title="Favorites">
                {favoriteContacts.map((contact) => (
                    <Card
                        key={contact.id}
                        id={contact.id}
                        img={contact.avatar}
                        first_name={contact.first_name}
                        last_name={contact.last_name}
                        email={contact.email}
                        isfavorite={contact.isFavorite}
                        page="overview"
                    />
                ))}
            </Section>
            <Section title="Contacts">
                {regularContacts.map((contact) => (
                    <Card
                        key={contact.id}
                        id={contact.id}
                        img={contact.avatar}
                        first_name={contact.first_name}
                        last_name={contact.last_name}
                        email={contact.email}
                        isfavorite={contact.isFavorite}
                        page="overview"
                    />
                ))}
            </Section>
        </main>
    );
};

export default Home;