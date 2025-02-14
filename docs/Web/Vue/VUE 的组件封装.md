---
description: Vue 的组件封装
title: Vue 的组件封装
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
recommend: 4
date: 2025-01-11
---

# VUE 的组件封装

### 一、组件封装的基本原则

1. **单一职责原则**：每个组件应只负责一个功能点，避免功能过于复杂。
2. **可复用性**：组件设计应考虑通用性，便于在不同场景下复用。
3. **解耦业务逻辑**：组件内部应避免直接处理具体业务逻辑，通过`props`和`events`与父组件通信。
4. **清晰的API设计**：组件的`props、events`和`slots`应定义清晰，易于理解和使用

### 二、组件封装的步骤

1. **定义组件模板（template）**：
   - 使用`<template>`标签定义组件的HTML结构。
   - 利用Vue的指令（如`v-if`、`v-for`）实现动态渲染。
2. **定义组件数据（data）**：
   - 使用`data`选项定义组件的内部状态。
   - 数据应保持简洁，避免冗余。
3. **定义组件方法（methods）**：
   - 使用`methods`选项定义组件的行为。
   - 方法应专注于组件内部逻辑，避免处理外部业务。
4. **定义计算属性（computed）**：
   - 使用`computed`选项定义基于数据的计算属性。
   - 计算属性应简洁高效，避免复杂的逻辑。
5. **定义生命周期钩子（lifecycle hooks）**：
   - 使用生命周期钩子（如`mounted`、`updated`）定义组件在不同阶段的操作。
   - 生命周期钩子应谨慎使用，避免造成性能问题。
6. **定义组件的props**：
   - 使用`props`选项定义组件接收的外部数据。
   - 对props进行类型验证和默认值设置，确保数据合法性。
7. **封装组件**：
   - 使用`Vue.component`方法或单文件组件（.vue）进行封装。
   - 确保组件命名规范，易于识别。

### 三、组件封装的技巧

1. **合理使用插槽（slots）**：
   - 插槽用于动态插入内容，增强组件的灵活性。
   - 使用具名插槽区分不同内容区域。
2. **事件驱动（events）**：
   - 通过自定义事件（`this.$emit`）实现子组件向父组件的通信。
   - 事件命名应清晰，避免歧义。
3. **单向数据流**：
   - 遵循单向数据流原则，避免子组件直接修改props。
   - 使用计算属性或watchers处理props变化。
4. **样式封装**：
   - 使用scoped样式或CSS Modules避免样式污染。
   - 样式命名规范，便于维护。

### 四、常见误区及解决方案

1. **过度封装**：
   - 误区：将过多功能封装在一个组件中，导致组件复杂难用。
   - 解决方案：拆分复杂组件，保持单一职责。
2. **直接修改props**：
   - 误区：在子组件中直接修改props，违反单向数据流。
   - 解决方案：使用计算属性或通过事件通知父组件修改。
3. **忽视性能优化**：
   - 误区：在生命周期钩子中进行大量操作，影响性能。
   - 解决方案：合理使用生命周期钩子，避免不必要的计算和DOM操作。
4. **API设计不清晰**：
   - 误区：props、events和slots定义混乱，难以理解。
   - 解决方案：规范命名，提供清晰的文档说明。

- 案例

```vue
<script setup lang="ts">
import { MaProTableExpose } from "@mineadmin/pro-table";
import { defineProps } from "vue";
import type { TransType } from "@/hooks/auto-imports/useTrans.ts";
defineOptions({ name: 'ExcelTool' })
const { proxy } = defineProps<{ proxy: MaProTableExpose }>();
const visible = ref(false);
const tableData = ref<{ prop: string; label: string, checked: boolean }[]>([]);
const i18n = useTrans() as TransType;
const t = i18n.globalTrans;
const execute = async () => {
  visible.value = !visible.value;
  const TableColumns = proxy?.getTableColumns();
  if (TableColumns) {
    const data = TableColumns.filter(item => item.prop) 
      .map(item => ({
        prop: item.prop,
        checked: true,
        label: typeof item.label === "function" ? item.label() : item.label || item.prop,
      }));
    tableData.value = JSON.parse(JSON.stringify(data));
  }


};
</script>

<template>
  <el-popover :visible="visible" placement="bottom" :width="100">
    <template #reference>
      <el-button circle @click="execute">
        <svg
          t="1736756319249"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4805"
          width="16"
          height="16"
        >
          <path
            d="M563.2 1006.933333s-3.413333 0 0 0l-549.546667-102.4c-6.826667-3.413333-13.653333-10.24-13.653333-17.066666V170.666667c0-6.826667 6.826667-13.653333 13.653333-17.066667l546.133334-136.533333c3.413333 0 10.24 0 13.653333 3.413333 3.413333 3.413333 6.826667 6.826667 6.826667 13.653333v955.733334c0 3.413333-3.413333 10.24-6.826667 13.653333-3.413333 3.413333-6.826667 3.413333-10.24 3.413333zM34.133333 873.813333l512 95.573334V54.613333L34.133333 184.32v689.493333z"
            fill=""
            p-id="4806"
          ></path>
          <path
            d="M1006.933333 938.666667h-443.733333c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066667H989.866667v-785.066666H580.266667c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066667h426.666666c10.24 0 17.066667 6.826667 17.066667 17.066667v819.2c0 10.24-6.826667 17.066667-17.066667 17.066667zM392.533333 699.733333c-6.826667 0-10.24-3.413333-13.653333-6.826666l-204.8-341.333334c-6.826667-10.24-3.413333-20.48 3.413333-23.893333s17.066667-3.413333 23.893334 6.826667l204.8 341.333333c3.413333 6.826667 3.413333 17.066667-6.826667 23.893333h-6.826667z"
            fill=""
            p-id="4807"
          ></path>
          <path
            d="M187.733333 699.733333c-3.413333 0-6.826667 0-10.24-3.413333-6.826667-3.413333-10.24-13.653333-3.413333-23.893333l204.8-341.333334c3.413333-6.826667 13.653333-10.24 23.893333-6.826666 6.826667 3.413333 10.24 13.653333 6.826667 23.893333l-204.8 341.333333c-6.826667 6.826667-10.24 10.24-17.066667 10.24zM733.866667 938.666667c-10.24 0-17.066667-6.826667-17.066667-17.066667V119.466667c0-10.24 6.826667-17.066667 17.066667-17.066667s17.066667 6.826667 17.066666 17.066667V921.6c0 10.24-6.826667 17.066667-17.066666 17.066667z"
            fill=""
            p-id="4808"
          ></path>
          <path
            d="M989.866667 802.133333H563.2c-10.24 0-17.066667-6.826667-17.066667-17.066666s6.826667-17.066667 17.066667-17.066667H989.866667c10.24 0 17.066667 6.826667 17.066666 17.066667s-6.826667 17.066667-17.066666 17.066666zM1006.933333 665.6h-443.733333c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066666h443.733333c10.24 0 17.066667 6.826667 17.066667 17.066666s-6.826667 17.066667-17.066667 17.066667zM1006.933333 529.066667H580.266667c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066667h426.666666c10.24 0 17.066667 6.826667 17.066667 17.066667s-6.826667 17.066667-17.066667 17.066667zM1000.106667 392.533333H573.44c-10.24 0-17.066667-6.826667-17.066667-17.066666s6.826667-17.066667 17.066667-17.066667h426.666667c10.24 0 17.066667 6.826667 17.066666 17.066667s-10.24 17.066667-17.066666 17.066666zM1006.933333 256h-443.733333c-10.24 0-17.066667-6.826667-17.066667-17.066667s6.826667-17.066667 17.066667-17.066666h443.733333c10.24 0 17.066667 6.826667 17.066667 17.066666s-6.826667 17.066667-17.066667 17.066667z"
            fill=""
            p-id="4809"
          ></path>
        </svg>
      </el-button>
    </template>
    <el-row>
    <el-col v-for="item in tableData" :key="item.prop" :span="24">
      <el-switch v-model="item.checked" />
      <span style="margin-left: 20px;">{{ (item.label) }}</span>
    </el-col>
  </el-row>
  </el-popover>
</template>

```

