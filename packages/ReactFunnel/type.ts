import React from 'react'

export interface FunnelProps {
  colors?: Array<string>,
  isLeft?: boolean,
  maxWidth?: number,
  minWidth?: number,
  rowHeight?: string | number,
  rowSpace?: string | number,
  renderContent?: any,
  renderLabel?: any,
  increment?: number
}

export const defaultProps: object = {
  colors: ['#576DE7', '#8B74F2', '#A37EEF'],
  isLeft: true,
  maxWidth: 300,
  minWidth: 150,
  rowHeight: 50,
  rowSpace: 8,
  renderContent: null,
  renderLabel: null
}


export interface labelChild{
  index?: number,
  reset: FunnelProps
}

export interface Triangle{
  index?: number,
  position: string,
  reset: FunnelProps
}
