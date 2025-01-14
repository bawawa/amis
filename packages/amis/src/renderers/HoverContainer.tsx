import React from 'react';
import {Renderer, RendererProps} from 'amis-core';

import {HoverContainer} from '../../../amis-ui/src/components/HoverContainer';
import {BaseSchema, SchemaCollection} from '../Schema';

export interface HoverContainerSchema extends BaseSchema {
  className?: string;
  mode?: 'static' | 'rotate';
  staticText?: string;
  hoverText?: string;
}

export interface HoverContainerProps
  extends RendererProps,
    Omit<HoverContainerSchema, 'className'> {}

@Renderer({
  type: 'hover-container'
})
export default class HoverContainerRenderer extends React.Component<HoverContainerProps> {
  render() {
    return <HoverContainer {...this.props} />;
  }
}
