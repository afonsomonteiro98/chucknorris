import React from 'react';

const DisplayQuote = ({ quote }) => {
    return (
        <p> Quote: {quote.value}</p>
    );
};

export default DisplayQuote;