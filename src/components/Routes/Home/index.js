import Content from "../../Content";
import React from "react";
import Search from "../../Toolbar/Search";
import {Trans, withNamespaces} from "react-i18next";
import {setSearchQuery} from "../../../actions";
import {connect} from "react-redux";
import RecentProfiles from "./RecentProfiles";
import getExtension from "../../../extension";

const Home = ({setSearchQuery}) => {
  setSearchQuery("");

  return (
    <Content relax>
      <img
        src="https://assets.refsheet.net/assets/logos/RefsheetLogo_White_200.png"
        className="logo"
        alt="Refsheet.net"
        width={100}
        height={100}
      />

      <div className='toolbar' style={{backgroundColor: 'transparent', border: 'none'}}>
        <Search inputStyle={{width: '100%'}} />
      </div>

      <RecentProfiles count={6} />

      { getExtension().id() === "none" &&
        <div className='error-well margin-top--large'>
          <Trans i18nKey={'errors.no_app'}>
            <div className='strong'>Are you running the app?</div>
            This app should be run in one of the supported apps. You can continue
            in a web browser with limited functionality.
          </Trans>
        </div>
      }
    </Content>
  )
};

const connected = connect(null, {setSearchQuery})(Home);
const translated = withNamespaces('common')(connected);

export default translated;