<script setup lang="ts">
// 此处可以添加 TypeScript 类型声明或逻辑处理
</script>

<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <span class="text">
          总访问量：
          <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
        </span>
        <div class="icon-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="#017CEE"
              d="m4.127 254.974l122.568-125.639a2.265 2.265 0 0 0 .274-2.896c-7.453-10.406-21.207-12.21-26.303-19.203c-15.098-20.711-18.929-32.434-25.417-31.708a1.98 1.98 0 0 0-1.178.622l-44.276 45.388C4.322 147.628.661 205.137 0 253.295a2.4 2.4 0 0 0 4.127 1.679"
            />
            <path
              fill="#00AD46"
              d="M254.974 251.873L129.335 129.296a2.266 2.266 0 0 0-2.9-.274c-10.406 7.457-12.21 21.207-19.203 26.303c-20.712 15.098-32.435 18.93-31.709 25.417c.066.451.286.866.622 1.174l45.389 44.276c26.09 25.473 83.598 29.134 131.757 29.795a2.401 2.401 0 0 0 1.683-4.114"
            />
            <path
              fill="#04D659"
              d="M121.534 226.205c-14.263-13.915-20.872-41.44 6.462-98.2c-44.437 19.859-60.008 45.962-52.35 53.437z"
            />
            <path
              fill="#00C7D4"
              d="M251.869 1.03L129.305 126.67a2.26 2.26 0 0 0-.274 2.895c7.457 10.406 21.202 12.21 26.303 19.203c15.098 20.712 18.933 32.435 25.417 31.709c.453-.065.87-.285 1.178-.622l44.276-45.389C251.678 108.376 255.339 50.868 256 2.71a2.405 2.405 0 0 0-4.131-1.678"
            />
            <path
              fill="#11E1EE"
              d="M226.226 134.466c-13.915 14.263-41.44 20.873-98.204-6.462c19.859 44.437 45.963 60.009 53.437 52.351z"
            />
            <path
              fill="#E43921"
              d="m1.018 4.131l125.638 122.565c.772.78 1.992.896 2.896.273c10.406-7.457 12.21-21.207 19.203-26.303c20.712-15.098 32.435-18.929 31.709-25.417a2 2 0 0 0-.622-1.178l-45.389-44.276C108.363 4.322 50.855.661 2.696 0a2.4 2.4 0 0 0-1.678 4.131"
            />
            <path
              fill="#FF7557"
              d="M134.475 29.8c14.263 13.915 20.872 41.44-6.462 98.204c44.437-19.859 60.008-45.967 52.35-53.437z"
            />
            <path
              fill="#0CB6FF"
              d="M29.795 121.543C43.71 107.28 71.235 100.67 128 128.004c-19.86-44.436-45.963-60.008-53.438-52.35z"
            />
            <circle cx="128.017" cy="127.983" r="5.479" fill="#4A4848" />
          </svg>
        </div>
        <span class="text">
          访客数：
          <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
        </span>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  margin: 12px 0 8px;
}

.container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  width: 100%;
  max-width: 1152px;
  margin-inline: auto; /* 更简洁的写法 */
  padding: 12px; /* 统一内边距 */
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 简化列定义 */
  gap: 12px; /* 添加间距 */
  align-items: center;
  justify-items: center; /* 确保每个网格项在其单元格内居中 */
  text-align: center; /* 文字居中对齐 */
}

.text {
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--vp-c-text-1); /* 使用主题变量，增强适配性 */
}

.font-bold {
  font-weight: bold;
}

.icon-wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.heart-icon {
  width: 50px;
  height: 50px;
  fill: red; /* 设置心形图标的颜色 */
  transition: transform 0.3s ease; /* 添加悬停动画效果 */
}

.heart-icon:hover {
  transform: scale(1.1); /* 鼠标悬停时放大图标 */
}
</style>
