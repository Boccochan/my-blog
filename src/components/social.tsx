import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import styled from "styled-components";

const config = {
  via: "yasblog",
  size: 32,
};

interface SocialProps {
  url: string;
  title: string;
  size?: number;
  via?: string;
}

const SocialStyle = styled.div`
  border-top: 1px solid #eae6e6;
  padding-top: 10px;
  margin-top: 60px;
`;

const Facebook = styled(FacebookShareButton)`
  margin: 10px;
`;

const Twitter = styled(TwitterShareButton)`
  margin: 10px;
`;

export class Social extends React.Component<SocialProps, {}> {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <SocialStyle>
        <Facebook url={this.props.url}>
          <FacebookIcon
            size={this.props.size ? this.props.size : config.size}
            round
          />
        </Facebook>
        <Twitter
          url={this.props.url}
          title={this.props.title}
          via={this.props.via ? this.props.via : config.via}
        >
          <TwitterIcon
            size={this.props.size ? this.props.size : config.size}
            round
          />
        </Twitter>
      </SocialStyle>
    );
  }
}
