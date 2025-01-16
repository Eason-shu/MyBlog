---
description: vite 是一个基于浏览器原生 ES-Module 的前端构建工具。官网描述为 下一代前端开发与构建工具。
title: Vue 疑难杂症
cover: https://img.icons8.com/fluency/240/vite.png
categories: 
   - 学习
   - 前端
   - 前端工程化
tags: 
  - Vite
sticky: 4
outline: [2,3]
top: 1
recommend: 3
date: 2025-01-11
---

# Vue 疑难杂症整理

## 1.1 defineOptions

> [!TIP]
> `defineOptions`是一个宏，是在Vue3.3+中新增的新特性

- vue 3.3 之前需要写两个脚本块：

```html
<script lang="ts">
import { defineComponent } from "vue";
 defineComponent({
  name: "" 
});
<template>
</script>
```

- vue 3.3 使用 defineOptions 宏：

```html
<script setup>
defineOptions({
  name: "" 
});
</script>
```

阻塞透传的非 props 属性

> [!TIP]
> 开发中我们可能需要阻止透传非 props 属性，比如我们希望组件的属性只允许在组件内部使用，而不是在父组件中透传。vue 3.3 提供了 inheritAttrs 选项，默认为 true，表示允许透传，设置为 false 表示不允许透传。通过 defineOptions 宏，我们可以在 `<script setup>` 中设置 inheritAttrs 选项，来阻止透传非 props 属性。


```html
<script setup>
defineOptions({
  inheritAttrs: false //非props的属性默认不透传
});
</script>
```

- 案例

```html
<script lang="ts" setup>
  import { Tabs, TabPane } from 'ant-design-vue';
  import { ref } from 'vue';
  import { achieveList } from './data';
  import TabPackages from './tabPackages.vue';
  import TrialTab from './tabTrial.vue';
  import AddNewPackage from './addNewPackage.vue';
  defineOptions({
    name: 'SetPackage',
    descName: '套餐管理列表',
    components: {
      TabPackages,
      TrialTab,
    },
  });
</script>
```

## 1.2 defineProps

> [!TIP]
> `defineProps` 是 Vue 3 中一个非常强大的特性，它提供了一种更加明确和类型安全的方式来定义子组件的 props。
> 通过使用 `defineProps`，我们可以让子父组件之间的数据传递更加清晰和可维护，同时也提高了代码的健壮性。

```html
// MyComponent.vue
<template>
  <div>{{ props.message }} - {{ props.count }}</div>
</template>
 
<script>
import { defineComponent, defineProps } from 'vue';
 
export default defineComponent({
  setup() {
    const props = defineProps<{
      message: string;
      count: number;
    }>();
 
    return { props };
  },
});
</script>
```

```html
// ParentComponent.vue
<template>
  <div>
    <MyComponent :message="parentMessage" :count="parentCount" />
  </div>
</template>
 
<script>
import MyComponent from './MyComponent.vue';
 
export default {
  components: {
    MyComponent,
  },
  data() {
    return {
      parentMessage: 'Hello Java轮子',
      parentCount: 10,
    };
  },
};
</script>
```

