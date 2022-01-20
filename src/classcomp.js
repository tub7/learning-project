import React, { Component } from "react";
import { Themecontext } from "./App";

export default class Classcomp extends Component {
    themeStyles(par) {
        return {
            backgroundColor: par ? "#ccc" : "#fff",
            color: par ? "#fff" : "#ccc",
            padding: "2rem",
            margin: "2rem",
        };
    }
    render() {
        return (
            <Themecontext.Consumer>
                {(theme) => {
                    return (
                        <div style={this.themeStyles(theme)}>class comp</div>
                    );
                }}
            </Themecontext.Consumer>
        );
    }
}
