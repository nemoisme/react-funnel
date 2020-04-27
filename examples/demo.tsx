import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactFunnel from '../packages/index'


export default class Demo extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }
  render() {
    return <>
      <ReactFunnel
        renderLabel={index => <div>{index}</div>}
        renderContent={(index) => <div key={index}>Info{index}</div>} >
      </ReactFunnel>
    </>
  }
}