import React from 'react'
import './index.css';
import OBJ from '../card1/data';
import Card1 from '../card1';

const CompaniesProfile = () => {
    return (
        <div className='card1-container'>
            {
                OBJ.map((item) => {
                    return (
                        <div>
                            <Card1 props={item} />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CompaniesProfile;
