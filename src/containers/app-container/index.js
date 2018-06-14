import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import RoundButton from "Components/common/RoundButton";
import DineInIcon from "Images/store.png";
import TakeAwayIcon from "Images/bicycle.png";
import OnlineOrderIcon from "Images/mobile-app.png";

const AppContainer = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <RoundButton icon={DineInIcon} buttonText="Dine In" />
      </Grid.Column>
      <Grid.Column>
        <RoundButton icon={TakeAwayIcon} buttonText="Take Away" />
      </Grid.Column>
      <Grid.Column>
        <RoundButton icon={OnlineOrderIcon} buttonText="Online Order" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AppContainer;
