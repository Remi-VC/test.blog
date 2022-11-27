import React from 'react';
import { Navbar } from './Navbar';

interface Props {
    children: React.ReactNode,
}

export const Layout: React.FC<Props> = props => (
    <>
        <div id="header">
            <Navbar>
                <Navbar.Heading>Remi's Blog</Navbar.Heading>
                {/* <Navbar.Divider />

                <Button text="Home" /> */}
            </Navbar>
        </div>

        <div id="page-content">
            {props.children}
        </div>
    </>
);