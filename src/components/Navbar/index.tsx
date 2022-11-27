import React from 'react';
import { NavbarHeading } from './Heading';
import './index.scss';

interface Props {
    children: React.ReactNode,
}

export class Navbar extends React.PureComponent<Props> {
    public static Heading = NavbarHeading;
    
    public render(): React.ReactNode {
        return (
            <div className="navbar">
                {this.props.children}
            </div>
        );
    }
}