import React from "react";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import "./responsiveAccordion.scss";

class ImageAccordion extends React.Component {

    render(){
        return(
            <div className ="responsiveAccordion">
            <ul>
                <li tabindex="1">
                <div>
                    <a href="#">
                    <h2>Finance</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </a>
                </div>
                </li>
                <li tabindex="2">
                <div>
                    <a href="#">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </a>
                </div>
                </li>
                <li tabindex="3">
                <div>
                    <a href="#">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </a>
                </div>
                </li>
                <li tabindex="4">
                <div>
                    <a href="#">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </a>
                </div>
                </li>
                <li tabindex="5">
                <div>
                    <a href="#">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </a>
                </div>
                </li>
                <li tabindex="6">
                <div>
                    <a href="#">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </a>
                </div>
                </li>
            </ul>
            </div>
        );
    }
}

export default ImageAccordion
