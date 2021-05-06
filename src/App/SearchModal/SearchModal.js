import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import './searchModal.css'
import '../Subscribe/subscribe.css'

const SearchModal = ({
    toggleModal,
    modal
}) => {
    return (
        <section className={modal ? "modal-section show" : "modal-section hide"}>
            <div className="container-fluid">
                <div className="modal-row">
                    <button onClick={() => toggleModal()} className="btn close-btn"><CloseIcon/></button>
                    <form action="#" className="form">
                        <div className="field">
                            <input className="input" placeholder="What are you looking for?"/>
                        </div>
                        <button type="submit" name="submit" className="btn form-btn">Search</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SearchModal