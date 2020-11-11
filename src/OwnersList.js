import React from 'react';
import OwnerLink from './OwnerLink';

const OwnersList = props =>
    <>
        <h2>Owners</h2>
        <ul>
            {props.owners.map(owner =>
                <li key={owner.id}>
                    <OwnerLink href={`/owners/${owner.id}`} firstName={owner.firstName} lastName={owner.lastName} />
                </li>
                )}
        </ul>
    </>


OwnersList.defaultProps = {
    owners: []
};

export default OwnersList