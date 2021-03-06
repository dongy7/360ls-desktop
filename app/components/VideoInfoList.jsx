import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

const VideoInfoList = ({ video, toggleVideo }) => (
  <List>
    <Subheader>General</Subheader>
    <ListItem
      primaryText="Title"
      secondaryText={video.name}
    />
    <ListItem
      primaryText="Location"
      secondaryText={video.location}
    />
    <ListItem
      primaryText="Date"
      secondaryText={video.date}
    />
    <ListItem
      primaryText="Flagged"
      rightToggle={<Toggle toggled={video.flagged} onToggle={() => toggleVideo(video.id)} />}
    />
  </List>
);

VideoInfoList.propTypes = {
  video: PropTypes.object.isRequired,
  toggleVideo: PropTypes.func.isRequired,
};

export default VideoInfoList;
