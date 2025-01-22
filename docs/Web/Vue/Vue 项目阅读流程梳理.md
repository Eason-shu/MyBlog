# Vue 项目阅读流程梳理

## 路由（route）

>[!TIP]
>
>- 在我接触了`Angual`还是`Vue`或者`React`的项目中，感觉路由都是有相同之处，`静态路由`，`动态路由`，`路由守卫`，`参数传递`,无非就是实现的方式不一样

::: code-group

```vue
// 创建路由实例
const router = createRouter({
  // 模式
  history: import.meta.env.VITE_APP_ROUTE_MODE === 'history' ? createWebHistory() : createWebHashHistory(),
  // 路由配置
  routes: routes as RouteRecordRaw[],
})
// 路由加载前
router.beforeEach(async (to, from, next) => {
})

// 路由加载后
router.afterEach(async (to) => {

})
export default router
```

```angular
import { CanActivate } from "@angular/router";
export class LoginGuard implements CanActivate{
    canActivate(){
        let loggedIn :boolean= Math.random()<0.5;
        if(!loggedIn){
            console.log("用户未登录");
        }
        return loggedIn;
    }
}
```

```react
const onRouteBefore = ({ pathname, meta }) => {
  if (meta.title !== undefined) {
    document.title = meta.title
  }
  if (meta.needLogin) {
    if (!isLogin) {
      return '/login'
    }
  }
}
export {
  onRouteBefore,
}
```

:::

- 我们可以发现，我们都可以在其中做一些逻辑处理，比如，动态加载菜单路由与鉴权等等逻辑