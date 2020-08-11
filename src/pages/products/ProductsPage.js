import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import Product from "../../components/shared/Product";

function ProductsPage({products, loading}) {

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} justify="center" alignItems="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Products</p>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={3}>
                        {
                            (!products.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Products Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                products.map((product, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Product product={product}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>
                </Container>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        loading: state.products.loading
    }
}

export default connect(mapStateToProps) (ProductsPage);
