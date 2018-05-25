import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from 'semantic-ui-react';

import './RoundButton.css';

const RoundButton = (props) => (
  <div className="round-button-div">
    <Button className="roundButton">
        <Image src={props.icon} className="button-iconImage" />
    </Button>
    <h5 className="round-button-text">{props.buttonText}</h5>
  </div>
);

RoundButton.defaultProps = {
    icon: {},
    buttonText: ''
};
  
RoundButton.propTypes = {
    icon: PropTypes.object,
    buttonText: PropTypes.string
};

export default RoundButton;
