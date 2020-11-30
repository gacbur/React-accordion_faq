import React from 'react';
import iconarrowdown from '../images/iconarrowdown.svg'

const AccordionItem = ({ faqItem }) => {
    return (
        <div className="accordion-item">
            <div className="accordion-item-header">
                <h6>{faqItem.question}</h6>
                <button><img className="arrow" src={iconarrowdown} alt="accordion-item"></img></button>
            </div>
            <div className="accordion-item-ans">

            </div>
        </div>
    );
}

export default AccordionItem;