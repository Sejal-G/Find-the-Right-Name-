// import { getSuggestedQuery } from '@testing-library/dom';
import React from 'react'
import NameCard from './NameCard.jsx'
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
        //a list of jsx elemts
    })

    return (
        <div className="results-container">
            {suggestedNamesJsx}
            {/* <p>{suggestedNames.length > 0 ? suggestedNames[0] : null}</p> */}
        </div>
    )
}

export default ResultsContainer;