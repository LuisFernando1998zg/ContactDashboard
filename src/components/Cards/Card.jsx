import React from 'react';
import { useContacts } from '../../contexts/ContactsContext';
import { FavoritesButton, TrashButton, RemoveButton, XButton } from '../../components/Buttons/Buttons';

const Card = ({ id, img, first_name, last_name, email, isfavorite, page }) => {
    const { switchFavorites, removeContact } = useContacts();

    // Verificar que el id se esté recibiendo correctamente
    console.log('Card id:', id);

    const handleFavoriteClick = () => {
        console.log('Favorite clicked for id:', id);
        switchFavorites(id);
    };

    const handleRemoveClick = () => {
        console.log('Remove clicked for id:', id);
        removeContact(id);
    };

    return (
        <div className="card">
            <img src={img} alt={`${first_name} ${last_name}`} />
            <h2>{first_name} {last_name}</h2>
            <p>{email}</p>
            <div className="card-actions">
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
                        <div onClick={handleRemoveClick}>
                            <TrashButton id={id} />
                        </div>
                        <div onClick={handleFavoriteClick}>
                            {isfavorite ? <XButton id={id} /> : <FavoritesButton id={id} />}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;