import React from "react";
import { Layout } from "./Layout";

export class App extends React.PureComponent{
    public render(): React.ReactNode {
        return (
            <Layout>
                This will be our page content.
            </Layout>
        );
    }
}