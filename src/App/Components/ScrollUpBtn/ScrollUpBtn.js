import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

import './scrollUpBtn.css'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton />
      </div>
    );
  }
}