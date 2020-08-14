import React, { Component } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  background-color: transparent;
`;

export interface Window {
  Image: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
  };
}

type Props = {
  src: string;
};

export class PreloadImg extends Component<Props> {
  private _src = "";

  constructor(props: Props) {
    super(props);
    this.state = { loaded: false };
    // const img = new window.Image();
    this._src = props.src;
  }

  componentDidMount() {
    const img = new (window as any).Image();
    img.src = this._src;
  }

  render() {
    if (this.state) {
      return <StyledImg src={this._src} />;
    } else {
      return <div></div>;
    }
  }
}
