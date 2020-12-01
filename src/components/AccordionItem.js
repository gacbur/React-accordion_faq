import React, { useState } from 'react';
import iconarrowdown from '../images/iconarrowdown.svg'

const AccordionItem = ({ faqItem }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleShowAnswer = () => {
        if (isOpen === true) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <div className="accordion-item">
            <div onClick={() => handleShowAnswer()} className="accordion-item-header">
                <h6 className={isOpen ? 'active' : ''}>{faqItem.question}</h6>
                <img className={`arrow ${isOpen ? 'rotate' : ''}`} src={iconarrowdown} alt="accordion-item"></img>
            </div >
            <div className={`accordion-item-ans ${isOpen ? 'show' : 'not-show'}`} >
                {faqItem.answer}
            </div>

        </div >
    );
}

export default AccordionItem;