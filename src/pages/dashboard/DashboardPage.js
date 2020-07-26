import React from "react";
import Layout from "../../components/layout/Layout";
import {Container} from "@material-ui/core";

function DashboardPage() {
    return (
        <Layout>
            <Container>
                <p className="text-align-center font-weight-bold font-size-large">Dashboard Page</p>
            </Container>
        </Layout>
    )
}

export default DashboardPage;
