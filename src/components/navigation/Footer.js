import React from "react";
import {Container, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import "../../App.css";

function Footer() {
    return (
        <div>
            <div className="dark-grey padding-vertical-medium">
                <Container>
                    <Grid container={true} spacing={4} justify="center">
                        <Grid item={true} xs={12} md={4}>
                            <div>
                                <p className="uppercase grey-text-light">Main Links</p>

                                <p>
                                    <Link to="/"
                                          className={`nav-link dark-grey-text margin-vertical-small font-size-small uppercase`}>
                                        Home
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/contact"
                                          className={` dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                        About
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/feed"
                                          className={` dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                        Feed Mill
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/about"
                                          className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                        Careers
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/about"
                                          className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                        News
                                    </Link>
                                </p>

                                <p>
                                    <Link to="/about"
                                          className={`nav-link dark-grey-text nav-link margin-vertical-small font-size-small uppercase`}>
                                        Contact Us
                                    </Link>
                                </p>
                            </div>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <p className="uppercase grey-text-light">Follow us on social media</p>

                            <div className="social-links-container">
                                <div className="margin-vertical-medium social-link-container">
                                    <a className="social-link uppercase padding-vertical-small"
                                       href="https://linkedin.com/stanleyhayford" target="_blank"
                                       rel="noreferrer noopener">
                                        <img width={30} height={30}
                                             src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
                                             alt="Linkedin logo"/>
                                        <span className="platform dark-grey-text font-size-small">LinkedIn</span>
                                    </a>
                                </div>

                                <div className="margin-vertical-medium social-link-container">
                                    <a className="social-link uppercase padding-vertical-small" href="https://"
                                       target="_blank"
                                       rel="noreferrer noopener">
                                        <img width={30} height={30}
                                             src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
                                             alt="Facebook logo"/>
                                        <span className="platform dark-grey-text font-size-small">Facebook</span>
                                    </a>
                                </div>

                                <div className="margin-vertical-medium social-link-container">
                                    <a className="social-link uppercase padding-vertical-small" href="https://"
                                       target="_blank"
                                       rel="noreferrer noopener">
                                        <img width={30} height={30} src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
                                             alt="Twitter logo"/>
                                        <span className="platform dark-grey-text font-size-small">Twitter</span>
                                    </a>
                                </div>

                                <div className="margin-vertical-medium social-link-container">
                                    <a className="social-link uppercase padding-vertical-small" href="https://"
                                       target="_blank"
                                       rel="noreferrer noopener">
                                        <img width={30} height={30}
                                             src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
                                             alt="Instagram logo"/>
                                        <span className="platform dark-grey-text font-size-small">Instagram</span>
                                    </a>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="padding-vertical-small darker-grey">
                <Container>
                    <p className="text-align-center footer-info font-size-small grey-light-text">
                        For more information contact The Peg Empire.
                        <span className="separator">|</span>
                        <span className="email">info@thepigempire.org</span>
                        <span className="separator">|</span>
                        <span className="contact">+233270048319</span>
                    </p>
                    <p className="text-align-center grey-light-text developer font-size-small">
                        All Rights Reserved &copy; 2020 Developed and Managed by The Pig Empire
                    </p>
                    <p className="text-align-center grey-light-text developer font-size-small">
                        Icons made by
                        <a
                            className="nav-link blue-text padding-horizontal-medium"
                            href="http://www.freepik.com/"
                            title="Freepik">Freepik</a> from
                        <a
                            className="nav-link blue-text padding-horizontal-medium"
                            href="https://www.flaticon.com/"
                            title="Flaticon"> www.flaticon.com</a>
                    </p>
                </Container>
            </div>
        </div>
    )
}

export default Footer;
