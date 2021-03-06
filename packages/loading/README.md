# Loading 加载

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "wxd-loading": "./dist/loading/index",
}
```

## 代码演示

### Circular

```html
<wxd-loading />
<wxd-loading color="#fff" />
```

### Spinner

```html
<wxd-loading type="spinner" />
<wxd-loading type="spinner" color="#fff" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| color | 颜色 | *string* | `#c9c9c9` | - |
| type | 类型，可选值为 `spinner` | *string* | `circular` | - |
| size | 加载图标大小，默认单位为 `px` | *string \| number* | `30px` | - |
| text-size | 文字大小，默认单位为为 `px` | *string \| number* | `14px` | 1.0 |
| vertical | 是否垂直排列图标和文字内容 | *boolean* | `false` | 1.0 |


### Slots 

| 名称 | 说明 |
| --- | --- |
| default | 加载文案 |

### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
