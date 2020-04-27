[Github]:https://github.com/nemoisme/vue-funnel

## 介绍
  > 1.基于react封装的数据漏斗ui组件                                  
  > 2.基于vue-funnel的react+ts实现

```sh
yarn add react-funnel or npm i react-funnel
```
                            
### CODE栗子

```tsx

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

```

### 参数参考

  vue-funnel链接[Github] or 出门左转

### END
  Thanks! give me a star


