import React, { Component, FC } from 'react'
import { FunnelProps, defaultProps, labelChild, Triangle } from './type'

const renderTriangle: FC<Triangle> = ({ index, reset, position = 'left' }) => {
  const { rowHeight, increment, isLeft, colors } = reset
  return React.createElement('div', {
    class: 'tragle',
    style: {
      position: 'relative',
      float: isLeft ? 'left' : 'right',
      width: 0,
      height: 0,
      borderTop:
        rowHeight + 'px' + ' ' + 'solid' + ' ' + colors[index],
      [position == 'left' ? 'borderLeft' : 'borderRight']:
        increment + 'px' + ' ' + 'solid' + ' ' + 'transparent'
    }
  })
}


const renderLableChild = ({ index, reset }) => {
  const { increment, rowHeight, maxWidth, renderLabel, isLeft, colors } = reset
  const { type, props } = renderLabel(index)
  const centerVnode = React.createElement(type, {
    ...props,
    key: index,
    class: 'center',
    style: {
      width: maxWidth - index * increment * 2 + 'px',
      background: colors[index],
      height: rowHeight + 'px',
      position: 'relative',
      float: isLeft ? 'left' : 'right'
    }
  })

  const nodes = [
    renderTriangle({ index, reset, position: 'left' }),
    centerVnode,
    renderTriangle({ index, reset, position: 'right' })
  ]
  nodes.splice(isLeft ? nodes.length : 0, 0)
  return nodes
}

class ReactFunnel extends Component<FunnelProps, {}>{
  static defaultProps = defaultProps
  constructor(props: FunnelProps) {
    super(props)
  }
  render() {
    const {
      children, renderContent, colors,
      isLeft, maxWidth, minWidth, rowSpace
    } = this.props

    const increment = (maxWidth - minWidth) / colors.length
    return <div className="funnel-box">
      {colors.map((color, index: number) => {
        const { type, props, key } = renderContent(index)
        const contentNode = React.createElement('div',
          {
            key: key,
            style: {
              display: 'flex',
              minWidth: 'auto',
              [isLeft ? 'paddingLeft' : 'paddingRight']:
                index * increment + 'px',
              marginTop: rowSpace + 'px'
            }
          },
          [
            React.createElement(type, { ...props }),
            renderLableChild({ index, reset: { ...this.props, increment } })
          ]
        )
        return contentNode
      })}
    </div>
  }
}

export default ReactFunnel