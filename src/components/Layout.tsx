import React from 'react';

interface Props {
    children: React.ReactNode,
}

export const Layout: React.FC<Props> = props => (
    <>
        <div id="header">Header goes here</div>

        <div id="page-content">
            {props.children}
        </div>
    </>
);