import React from 'react'

import './form.css'

const Form = () => {
    return (
        <form action="#" className="form">
            <div className="field">
                <input type="email" className="input" placeholder="Your email adress"/>
            </div>
            <button type="submit" name="submit" className="btn form-btn">Subscribe</button>
        </form>
    )
}

export default Form