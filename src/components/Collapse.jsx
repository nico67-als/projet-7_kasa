import { useState } from 'react'
import './Collapse.scss'

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen((prev) => !prev)
    }

    return (        
        <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
            <button type="button" className="collapse__header" aria-expanded={isOpen} onClick={toggle}>
                {title}
                <i className={`fa-solid fa-angle-${isOpen ? 'up' : 'down'} collapse__icon`} aria-hidden="true"></i>
            </button>
            <div className="collapse__content">
                {children}
            </div>
        </div>
    )
}

export default Collapse