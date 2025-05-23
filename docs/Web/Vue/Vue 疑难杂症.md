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

## 1.2 defineProps （父传子）

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

```vue
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

## 1.3 defineEmits (子传父)

>[!TIP]
>
>defineEmits 是 Vue 3 的组合式 API（Composition API）的一部分，用于在组件中定义和使用自定义事件
>
>它替代了 Vue 2 中的 this.$emit 和 this.$on，让事件的定义和使用变得更加清晰和类型安全，尤其在 TypeScript 中

`defineEmits` 的基本用法

1. **定义事件**：在组件内部通过 defineEmits 定义事件
   可以传递一个数组或对象来定义事件名和事件参数
2. **触发事件**：使用 emit 方法触发定义的事件
3. **接收事件**：在父组件中使用自定义事件监听器来接收事件

- 在子组件中，定义两个事件：increment 和 decrement。当按钮被点击时，相应的事件会被触发

```vue
<template>
  <div>
    <button @click="handleIncrement">Increment</button>
    <button @click="handleDecrement">Decrement</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['increment', 'decrement']);

const handleIncrement = () => {
  emit('increment');
};

const handleDecrement = () => {
  emit('decrement');
};
</script>

```

- 在父组件中，监听子组件触发的 increment 和 decrement 事件，并通过相应的处理函数来更新计数器

```vue
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <ChildComponent @increment="increment" @decrement="decrement" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};
</script>

```

- 传参子组件中，定义一个事件 updateValue，它会传递一个数值参数

```vue
<template>
  <div>
    <button @click="update(1)">Increment</button>
    <button @click="update(-1)">Decrement</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'updateValue', value: number): void }>();

const update = (value: number) => {
  emit('updateValue', value);
};
</script>

```

- 在父组件中，接收 updateValue 事件，并使用传递的参数更新计数器

```vue
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <ChildComponent @updateValue="updateCounter" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const counter = ref(0);

const updateCounter = (value: number) => {
  counter.value += value;
};
</script>

```

对应的逻辑如下：

- defineEmits 定义事件：在子组件中使用 defineEmits 定义事件，事件名可以是字符串数组或对象形式，用于明确事件类型和参数
- emit 触发事件：通过调用 emit 方法触发已定义的事件，并可携带相关参数
- 父组件监听事件：父组件通过 @事件名 监听子组件触发的事件，从而在事件触发时执行相应的处理逻辑

## 1.4 defineModel

> [!TIP]
>
> `defineModel()` 返回的值是一个 **ref**。它可以像其他 **ref** 一样被访问以及修改，不过它能起到在[父组件](https://zhida.zhihu.com/search?content_id=240045702&content_type=Article&match_order=1&q=父组件&zhida_source=entity)和当前变量之间的双向绑定的作用
>
> `defineModel`是一个宏，所以不需要从vue中`import`导入，直接使用就可以了。这个宏可以用来声明一个双向绑定 prop，通过父组件的 `v-model` 来使用。

- 它的 `.value` 和父组件的 `v-model` 的值同步；

- 当它被子组件变更了，会触发父组件绑定的值一起更新。

  `defineModel` 是一个便利宏。 编译器将其展开为以下内容：

- 一个名为 `modelValue` 的 [prop](https://zhida.zhihu.com/search?content_id=240045702&content_type=Article&match_order=1&q=prop&zhida_source=entity)，本地 ref 的值与其同步；
- 一个名为 `update:modelValue` 的事件，当本地 ref 的值发生变更时触发。

父组件：

```vue
<template>
  <Child v-model="value"></Child>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

子组件：

```vue
<!-- vue3.4用法 -->
<template>
  <input type="text" v-model="model">
</template>

<script setup>
// model变量名称可随意取
const model = defineModel()
</script>
```

```vue
<!-- vue3.4前用法 -->
<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
```

在上面的例子中我们直接将`defineModel`的返回值使用`v-model`绑定到input输入框上面，无需定义 `modelValue` 属性和监听 `update:modelValue` 事件，代码更加简洁。`defineModel`的返回值是一个`ref`，我们可以在子组件中修改`model`变量的值，并且父组件中的`inputValue`变量的值也会同步更新，这样就可以实现双向绑定。

## 1.5 provide和inject 依赖注入

>[!WARNING]
>
>`provide`和`inject`方法就是Vue 3实现这种依赖注入的工具。父组件通过`provide`提供数据，后代组件通过`inject`获取数据。这种模式特别适用于需要跨组件传递状态或配置的情况。

- 父组件

```vue
<template>
  <div>
    <h1>Parent Component</h1>
    <child-component></child-component>
  </div>
</template>

<script>
export default {
  name: 'ParentComponent',
  setup() {
    const message = 'Hello from Parent Component';
 
    // 使用provide提供数据
    provide('message', message);

    return {};
  },
};
</script>

```

- 子组件

```vue
<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  setup() {
    // 使用inject获取父组件提供的数据
    const message = inject('message');
    return {
      message,
    };
  },
};
</script>

```

>[!WARNING]
>
>我们可以通过`provide`和`inject`共享一个对象，而不是单个值。

```vue
<template>
  <div>
    <h1>Parent Component</h1>
    <child-component></child-component>
  </div>
</template>

<script>
export default {
  name: 'ParentComponent',
  setup() {
    const user = {
      name: 'John Doe',
      age: 30
    };

    provide('user', user);

    return {};
  },
};
</script>

```

- 子组件

```vue
<template>
  <div>
    <h2>Child Component</h2>
    <p>Name: {{ user.name }}</p>
    <p>Age: {{ user.age }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  setup() {
    const user = inject('user');
    return {
      user,
    };
  },
};
</script>

```

> [!WARNING]
>
> 我们还可以共享一个函数，子组件可以调用这个函数。

```vue
<template>
  <div>
    <h1>Parent Component</h1>
    <child-component></child-component>
  </div>
</template>

<script>
export default {
  name: 'ParentComponent',
  setup() {
    const increment = (num) => num + 1;

    provide('increment', increment);

    return {};
  },
};
</script>

```

```vue
<template>
  <div>
    <h2>Child Component</h2>
    <p>Increment 5: {{ increment(5) }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  setup() {
    const increment = inject('increment');
    return {
      increment,
    };
  },
};
</script>

```

>[!WARNING]
>
>如果我们想提供响应式数据，可以使用`ref`或`reactive`

```vue
<template>
  <div>
    <h1>Parent Component</h1>
    <child-component></child-component>
  </div>
</template>

<script>
import { ref, provide } from 'vue';

export default {
  name: 'ParentComponent',
  setup() {
    const count = ref(0);

    provide('count', count);

    return {};
  },
};
</script>

```

```vue
<template>
  <div>
    <h2>Child Component</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'ChildComponent',
  setup() {
    const count = inject('count');

    const increment = () => {
      count.value++;
    };

    return {
      count,
      increment,
    };
  },
};
</script>

```

## 1.6 defineExpose(暴露子组件的方法)

>[!WARNING]
>
>`defineExpose` 是 Vue 3 的 Composition API 中一个新的实用函数，用于在 `<script setup> `语法下显式暴露组件的公共属性和方法
>
>这在处理子组件时特别有用，允许父组件访问子组件的特定属性或方法
>

- 父组件渲染子组件 Child 并通过 ref 获取子组件的实例。
- 子组件中的 count 和 increment 方法通过 defineExpose 暴露出来。
- 当点击父组件中的 “Access Child Methods” 按钮时，父组件可以访问并调用子组件的 count 和 increment

子组件

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

// 使用 defineExpose 来暴露 count 和 increment
defineExpose({
  count,
  increment,
});
</script>

```

父组件

```vue
<template>
  <div>
    <Child ref="childRef" />
    <button @click="accessChild">Access Child Methods</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Child from './Child.vue';

const childRef = ref(null);

function accessChild() {
  if (childRef.value) {
    console.log('Current count:', childRef.value.count);
    childRef.value.increment();
    console.log('Count after increment:', childRef.value.count);
  }
}

onMounted(() => {
  if (childRef.value) {
    console.log('Child component mounted, initial count:', childRef.value.count);
  }
});
</script>

```

## 1.7 vue 组件的ref

>[!WARNING]
>
>在 Vue3 中，`ref` 可以用来获取对 DOM 元素或子组件实例的引用。当应用于子组件时，它允许你直接访问子组件的属性和方法，实现父子组件之间的通信和交互。

- 子组件

```vue
  <script>
  export default {
    data() {
      return {
        childData: 'Initial data'
      }
    },
    methods: {
      setChildData(newData) {
        this.childData = newData;
        console.log('Data updated in child:', this.childData);
      }
    }
  }
  </script>

  <template>
    <div>{{ childData }}</div>
  </template>
```

- 父组件

```vue
  <template>
    <div>
      <button @click="updateChildData">Update Child Data</button>
      <ChildComponent ref="childRef" />
    </div>
  </template>

  <script>
  import { ref, onMounted } from 'vue';
  import ChildComponent from './ChildComponent.vue';

  export default {
    components: {
      ChildComponent
    },
    setup() {
      const childRef = ref(null);

      const updateChildData = () => {
        if (childRef.value) {
          // 调用子组件的方法
          childRef.value.setChildData('New data from parent');
        }
      };

      onMounted(() => {
        console.log(childRef.value);
      });

      return {
        childRef,
        updateChildData
      };
    }
  }
  </script>
```

