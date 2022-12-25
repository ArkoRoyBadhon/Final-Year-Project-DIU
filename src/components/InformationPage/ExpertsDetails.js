import React from 'react';

const ExpertsDetails = ({ fetchLink }) => {
    console.log(fetchLink);
    return (
        <div className=' mx-auto mt-10'>
            <iframe width="100%" height="800rem" src={fetchLink} frameborder="0" title='this is web page'></iframe>
        </div>
    );
};

export default ExpertsDetails;