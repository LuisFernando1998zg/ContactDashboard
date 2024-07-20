import React from 'react';
import { useContacts } from '../../contexts/ContactsContext';
import { FavoritesButton, TrashButton, RemoveButton, XButton } from '../../components/Buttons/Buttons';
import './Card.css';

const Card = ({ id, img, first_name, last_name, email, isfavorite, page }) => {
    const { switchFavorites, removeContact } = useContacts();

    const handleFavoriteClick = () => {
        console.log('Favorite clicked for id:', id);
        switchFavorites(id);
    };

    const handleRemoveClick = () => {
        console.log('Remove clicked for id:', id);
        removeContact(id);
    };

    return (
        <article className="card">
            <section className='card__info'>
                <img 
                    src={img} 
                    alt={`${first_name} ${last_name}`} 
                    className={isfavorite ? 'favorite' : ''} 
                />
                <p className='card__info__fullname'>{first_name} {last_name}</p>
                <p >{email}</p>
            </section>     
            <section className={`card__Contact__actions ${page}`}>
                {page === 'overview' && (
                    <div onClick={handleFavoriteClick}>
                        {isfavorite ? <RemoveButton id={id} /> : <FavoritesButton id={id} />}
                    </div>
                )}
                {page === 'favorites' && (
                    <div onClick={handleFavoriteClick}>
                        <RemoveButton id={id} />
                    </div>
                )}
                {page === 'contacts' && (
                    <>                      
                        <div onClick={handleFavoriteClick}>
                            {isfavorite ? <XButton id={id} /> : <FavoritesButton id={id} />}
                        </div>
                        <div onClick={handleRemoveClick}>
                            <TrashButton id={id} />
                        </div>
                    </>
                )}
            </section>
        </article>
    );
};

export default Card;