import trash from '../../assets/trash.svg'
import heart from '../../assets/heart.svg'
import close from '../../assets/close.svg'
import './Buttons.css'

export const FavoritesButton = () => {
  return (
    <>
    <button className='button button--green'aria-label='This Button use it to like a contact'>
        <img className='button__img' src={heart}alt="heart Button"  />
    </button>
    </>
  )
}
export const TrashButton = () => {
  return (
    <>
    <button className='button button--red'aria-label='This Button use it to delete a contact' >
        <img className='button__img' src={trash}alt="heart Button" />
    </button>
    </>
  )
}
export const RemoveButton = () => {
  return (
    <>
      <button className="button  button--remove" aria-label='This Button use it to unlike a contact'>
        <article className="button--remove__container">
          <span className="button--x">X</span><span>Remove</span>
        </article>
      </button>
    </>
  );
};

export const XButton = () => {
  return (
    <>
    <button className='button button--red' aria-label='This Button use it to unlike a contact'>
        <span className='button--x'>X</span>
    </button>
    </>
  )
}


