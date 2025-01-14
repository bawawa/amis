import React from 'react';
import {ClassNamesFn, themeable, ThemeProps} from 'amis-core';
import {data} from 'autoprefixer';

export interface HoverContainerProps extends ThemeProps {
  className?: string;
  mode?: 'static' | 'rotate';
  staticText?: string;
  hoverText?: string;
}

export class HoverContainer extends React.Component<HoverContainerProps> {
  static defaultProps: Partial<HoverContainerProps> = {
    className: '',
    mode: 'static',
    staticText: '',
    hoverText: ''
  };

  state = {
    mouseIn: false //鼠标是否移入，出发hover效果
  };

  constructor(props: HoverContainerProps) {
    super(props);
  }

  /**
   * 监听鼠标移入，触发hover效果
   * */
  handleMouseEnter = () => {
    this.setState({
      mouseIn: true
    });
  };

  /**
   * 监听鼠标移出，解除hover效果
   * */
  handleMouseLeave = () => {
    this.setState({
      mouseIn: false
    });
  };

  render() {
    const {mode} = this.props;

    const staticMode = (
      <div>
        <div></div>
        <div></div>
      </div>
    );

    const rotateMode = <div></div>;

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {mode === 'static' ? staticMode : rotateMode}
      </div>
    );
  }
}
