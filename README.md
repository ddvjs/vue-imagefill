# vue-imagefill
>A Vue.js 2.0 images fill directives

## Install

```shell
$ npm install vue-imagefill
```

## Usage
```html
<template>
  <div>
    <div class="image-wrap" v-flex="1">
      <img v-center="img">
    </div>
  </div>
</template>
```

```javascript
import Vue from 'vue'
import vueImagefill from 'vue-imagefill'
Vue.use(vueImagefill)

export default {
  data () {
    return {
      img: require('~/assets/images/text.jpg')
    }
  }
}
```

```style
.image-wrap {
  width: 200px;
  overflow: hidden;
  margin: 150px auto;
}
img {
  width: 100%;
}
```
## Options
|directives|description|default|options|
|:---|---|---|---|
| `v-flex`|image scaling|`1`|`Number`|
| `v-center`|image src or none| | |
