import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";

const AppBarComponent = ({ emitHandleClick }) => {
  return (
    <div id="app-bar-component">
      <AppBar className="bg-white">
        <AppBarSection>
          <button
            onClick={() => emitHandleClick("mobileView")}
            className="d-lg-none k-button k-button-md k-rounded-md k-button-flat k-button-flat-base"
          >
            <span className="k-icon k-i-menu" />
          </button>
          <button
            onClick={() => emitHandleClick("desktopView")}
            className="d-none d-lg-block  k-button k-button-md k-rounded-md k-button-flat k-button-flat-base"
          >
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <h1 className="title">Project Port</h1>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          {/* <ul>
            <li>
              <span>What"s New</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Contacts</span>
            </li>
          </ul> */}
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </button>
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
