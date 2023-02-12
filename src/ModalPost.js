import './styles/ModalPost.css'


function ModalPost ({show, onClose}) {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    if(!show) return null;

    return(
        <div className="modal" onClick={onClose}>
            <form className="modal-content" onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="description" name="body"></input>
                <button type="submit" className="accept-button">Accept</button>
                <button className="cancel-button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    )
}
export {ModalPost};