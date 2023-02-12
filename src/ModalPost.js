

// importar hoja de estilos

function ModalPost ({show, close}) {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    if(!show) return null;

    return(
        <div className="modal" onClick={close}>
            <form className="modal-content" onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="description" name="body"></input>
                <button type="submit" className="accept-button">OK</button>
                <button className="cancel-button" onClick={close}>CLOSE</button>
            </form>
        </div>
    )
}
export {ModalPost};