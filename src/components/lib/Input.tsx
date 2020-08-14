import React, { Component } from "react";

type Props = {
  placeholder: string;
  maxLength: number;
};

export class Input extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleChangeInput = (event: any) => {
    const { value, maxLength } = event.target;
    console.log(maxLength);
    const message = value.slice(0, maxLength);
    this.setState({
      form: {
        message,
      },
    });
  };

  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
      />
    );
  }
}
