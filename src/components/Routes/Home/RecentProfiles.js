import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getExtension from "../../../extension";
import {Link} from "react-router-dom";

class RecentProfiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      recentProfiles: []
    }
  }

  load(count) {
    const ext = getExtension();
    ext
      .readConfig()
      .then((config) => {
        const recentProfiles = config.recentProfiles || [];
        const sorted = recentProfiles.sort((a, b) => b.views - a.views);
        this.setState({loading: false, recentProfiles: sorted.slice(0, count)})
      })
      .catch((error) => {
        console.warn(error);
        this.setState({loading: false, error})
      })
  }

  componentDidMount() {
    this.load(this.props.count || 6);
  }

  render() {
    const {
      recentProfiles,
    } = this.state;

    if (recentProfiles.length === 0)
      return null;

    return (
      <div className={'recent-profiles margin-top--xxlarge'}>
        { recentProfiles.map((profile) => (
          <Link key={profile.id} className={'profile'} to={`/${profile.username}/${profile.slug}`}>
            <img alt={profile.name} src={profile.profileImage.thumbnail} />
            <div className={'profile-name margin-top-small'}>{ profile.name }</div>
          </Link>
        ))}
      </div>
    )
  }
}

RecentProfiles.propTyoes = {
  count: PropTypes.number
};

export default RecentProfiles;