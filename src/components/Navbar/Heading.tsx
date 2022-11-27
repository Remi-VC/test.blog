import React from 'react';

interface Props {
    children: React.ReactNode,
}

export const NavbarHeading: React.FC<Props> = props => (
    <div className="heading">
        {props.children}
    </div>
);