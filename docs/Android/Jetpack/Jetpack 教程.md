# Jetpack 教程

# 一 Jetpack Compose

>随着 Android 开发技术的不断演进，用户界面的构建方式也经历了从传统的 XML 布局到 Jetpack Compose 的变革性转变。Jetpack Compose 是谷歌推出的一套全新的声明式 UI 框架，逐渐成为 Android 开发的主流趋势。那么，它与传统的 XML 布局究竟有哪些区别？让我们从多个角度进行全面解析。
>

------

## 1.1 介绍

### Jetpack Compose vs. 传统 XML 布局对比

| **对比维度**   | **Jetpack Compose**                                          | **传统 XML 布局**                                            |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **编程模型**   | **声明式**：描述 UI 最终状态，自动响应状态变化。             | **命令式**：手动操作视图树，显式更新 UI。                    |
| **开发方式**   | 纯 Kotlin 代码，逻辑与 UI 无缝结合。                         | XML 定义布局 + Java/Kotlin 处理逻辑，需手动绑定。            |
| **性能**       | 更优： - 直接 Canvas 渲染，减少层级嵌套。 - 动画和状态高效更新。 | 依赖优化： - 深层次 View 树可能影响性能。 - 动画需额外处理。 |
| **可维护性**   | 高： - 组件化复用。 - 状态驱动减少冗余代码。                 | 低： - XML 易臃肿。 - 修改需同步逻辑和布局。                 |
| **动画支持**   | 原生支持，简洁 API（如 `AnimatedVisibility`）。              | 依赖 `ViewPropertyAnimator` 或第三方库。                     |
| **生态与工具** | 现代化： - 支持跨平台（Desktop、Multiplatform）。 - 官方持续更新。 | 成熟但停滞： - 社区资源多，但新特性有限。                    |
| **适用场景**   | ✅ 新项目、动态界面、复杂交互、高频迭代。                     | ✅ 旧项目维护、简单静态页面、团队传统开发流程。               |

------

### 核心差异总结

1. **思维模式**
   - Compose 通过状态驱动 UI，开发者关注 **“是什么”**（Declarative）。
   - XML 布局需手动控制 **“如何做”**（Imperative），如 `findViewById` 和 `setText`。
2. **开发效率**
   - Compose 减少模板代码（如不再需要 XML 文件），Kotlin 特性（如 Lambda）提升代码简洁性。
   - XML 布局需维护多文件，修改时需跨文件同步。
3. **未来趋势**
   - Compose 是谷歌主推的现代框架，尤其适合动态化、跨平台需求。
   - XML 布局仍适用于兼容旧项目，但新功能开发逐渐转向 Compose。

------

### 代码对比

- jetpack Compose

```kotlin
@Composable
fun NetworkStatusScreen(isConnected: Boolean) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = if (isConnected) "当前网络已连接" else "当前网络未连接",
            style = MaterialTheme.typography.headlineMedium,
        )
    }
}
```

- xml

```xml
  <TextView
            android:id="@+id/tv_title"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_margin="10dp"
            android:gravity="center"
            android:text="@string/app_title"
            android:textColor="#333"
            android:textSize="16sp" />
```

## 1.2 开发准备工作

- AndroidStudio下载地址：https://developer.android.google.cn/studio?hl=zh-cn
- 无脑安装下一步

### 先建项目

![image-20250604162005123](images/image-20250604162005123.png)

![image-20250604162123922](images/image-20250604162123922.png)

![image-20250604162144233](images/image-20250604162144233.png)

### 构建配置

- gradle-wrapper.properties 配置
- https://mirrors.cloud.tencent.com/gradle/

![image-20250604162245683](images/image-20250604162245683.png)

![image-20250604162448936](images/image-20250604162448936.png)

![image-20250604162507255](images/image-20250604162507255.png)

- settings.gradle.kts 配置

```kotlin
maven { url=uri("https://maven.aliyun.com/repository/gradle-plugin") }
maven { url=uri("https://maven.aliyun.com/repository/spring-plugin") }
maven { url=uri("https://maven.aliyun.com/repository/public") }
maven { url=uri("https://maven.aliyun.com/repository/google") }
maven { url=uri("https://jitpack.io")}
```

![image-20250604162641253](images/image-20250604162641253.png)

下载依赖

![image-20250604162834335](images/image-20250604162834335.png)

配置本地的环境，将这个依赖下载到本地

![image-20250604163118461](images/image-20250604163118461.png)

![image-20250604163231199](images/image-20250604163231199.png)

### 目录结构

Android 项目的构建系统基于 **Gradle**，采用模块化设计，包含多个关键文件和目录。以下是主要组成部分及其作用：

##### 📁 项目根目录结构

| **文件/目录**                 | **用途**                                                     |
| ----------------------------- | ------------------------------------------------------------ |
| **`.gradle/`**                | Gradle 缓存目录（自动生成，不应手动修改）                    |
| **`.idea/`**                  | Android Studio 项目元数据（自动生成，不应手动修改）          |
| **`build.gradle(.kts)`**      | **根构建脚本**，仅用于声明全局插件和依赖（如 `com.android.application` 或 `com.android.library`） |
| **`gradle.properties`**       | 配置 Gradle 构建环境（如 JVM 堆大小、缓存策略）              |
| **`gradlew` / `gradlew.bat`** | Gradle 封装器脚本（允许项目使用指定版本的 Gradle）           |
| **`local.properties`**        | 本地机器配置（如 Android SDK 路径，**不应提交到版本控制**）  |
| **`settings.gradle(.kts)`**   | **项目初始化脚本**，定义： - 包含的子项目（模块） - 依赖仓库（如 Maven、Google） - 版本目录（如 `libs.versions.toml`） |
| **`gradle/`**                 | 存放 Gradle 封装器和版本目录： - `wrapper/`（Gradle 封装器配置） - `libs.versions.toml`（依赖版本管理） |

##### 📦 模块（子项目）结构

每个模块（如 `app/`）包含以下关键文件：

| **文件/目录**            | **用途**                                                     |
| ------------------------ | ------------------------------------------------------------ |
| **`build.gradle(.kts)`** | **模块级构建脚本**，定义： - 插件（如 `com.android.application`） - Android 配置（`compileSdk`、`minSdk`） - 依赖项（`implementation`、`testImplementation`） |
| **`src/`**               | 源代码和资源： - `main/`（主代码） - `androidTest/`（设备测试） - `test/`（单元测试） |
| **`src/main/`**          | **主源代码集**（所有变体共享）： - `java/` 或 `kotlin/`（Kotlin/Java 代码） - `res/`（XML 布局、字符串、图片等） - `AndroidManifest.xml`（应用元数据） |
| **`src/androidTest/`**   | **设备测试**（运行在模拟器/真机）                            |
| **`src/test/`**          | **单元测试**（运行在本地 JVM）                               |
| **`proguard-rules.pro`** | R8/ProGuard 混淆规则（优化和缩减代码）                       |

##### 🔑 关键概念

1. **Gradle 封装器（Wrapper）**

   - 确保项目使用指定版本的 Gradle（避免环境差异）。
   - 配置文件：`gradle/wrapper/gradle-wrapper.properties`。

2. **版本目录（`libs.versions.toml`）**

   - 集中管理依赖版本（如 `compose-bom`、`kotlin`）。

   - 示例：

     ```
     [versions]
     compose = "1.6.0"
     
     [libraries]
     compose-ui = { group = "androidx.compose.ui", name = "ui", version.ref = "compose" }
     ```

3. **构建逻辑分离**

   - **`build.gradle` 应只声明配置**，不包含复杂逻辑（如 `if-else`）。
   - 自定义逻辑应封装在 **Gradle 插件** 中。

4. **源代码集（Source Sets）**

   - `main/`：基础代码（所有变体共享）。
   - `debug/`、`release/`：变体专属代码（覆盖 `main/` 中的文件）。

5. **R8/ProGuard**

   - 优化 APK：移除未使用的代码、混淆类名（`proguard-rules.pro`）。

##### 🚀 最佳实践

-  ✅ **使用 `libs.versions.toml` 统一管理依赖版本**（避免冲突）。
-  ✅ ​**​避免在 `build.gradle` 中写复杂逻辑​**​（改用自定义插件）。
-  ✅ ​**​模块化开发​**​（将功能拆分为独立模块，如 `:feature:auth`）。
-  ✅ ​**​区分 `test`（单元测试）和 `androidTest`（设备测试）​**​。
-  ✅ ​**​`.gitignore` 排除 `local.properties` 和 `.gradle/`​**​（避免环境差异）。

以下是 **Android 项目构建文件的详细解析**，涵盖每个核心文件的作用、配置示例及最佳实践：

#####  根目录文件

###### 📄 `settings.gradle(.kts)`

**作用**：定义项目的全局配置，包括模块列表和依赖仓库。
 ​**​关键内容​**​：

```
// settings.gradle.kts
dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
    }
}
include(":app", ":feature:auth") // 包含的模块
```

**最佳实践**：

- 使用 `dependencyResolutionManagement` 统一管理仓库。
- 模块路径用 `:` 分隔（如 `:feature:auth`）。

##### 📄 `build.gradle(.kts)`（根目录）

**作用**：配置全局插件和依赖，**不包含模块逻辑**。
 ​**​示例​**​：

```
// build.gradle.kts
plugins {
    id("com.android.application") version "8.1.0" apply false // 仅声明，不应用
    id("org.jetbrains.kotlin.android") version "1.9.0" apply false
}
```

**注意**：

- `apply false` 表示插件在子模块中按需应用。

##### 📄 `gradle.properties`

**作用**：配置 Gradle 和 Android 构建环境。
 ​**​常用配置​**​：

```
# 提升构建性能
org.gradle.jvmargs=-Xmx4096m -Dfile.encoding=UTF-8
# 启用并行构建
org.gradle.parallel=true
# Android 专属配置
android.useAndroidX=true
android.enableJetifier=true
```

##### 📄 `libs.versions.toml`（版本目录）

**路径**: `gradle/libs.versions.toml`
 ​**​作用​**​：集中管理依赖版本，避免冲突。
 ​**​示例​**​：

```
[versions]
kotlin = "1.9.0"
compose = "1.6.0"

[libraries]
androidx-core-ktx = { group = "androidx.core", name = "core-ktx", version.ref = "kotlin" }
compose-ui = { group = "androidx.compose.ui", name = "ui", version.ref = "compose" }

[plugins]
android-application = { id = "com.android.application", version = "8.1.0" }
```

**模块中引用**：

```
// build.gradle.kts
dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.compose.ui)
}
```

##### 模块目录（如 `app/`）

###### 📄 `build.gradle(.kts)`（模块级）

**作用**：定义模块的构建配置和依赖。
 ​**​完整示例​**​：

```
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.example.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.example.app"
        minSdk = 24
        targetSdk = 34
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            proguardFiles(getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro")
        }
    }
}

dependencies {
    implementation(libs.androidx.core.ktx)
    implementation(libs.compose.ui)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.test.ext.junit)
}
```

##### 📁 `src/` 目录结构

| **子目录**     | **用途**                                  |
| -------------- | ----------------------------------------- |
| `main/`        | 主代码和资源（所有构建变体共享）          |
| `debug/`       | 仅 `debug` 变体使用的代码（覆盖 `main/`） |
| `release/`     | 仅 `release` 变体使用的代码               |
| `androidTest/` | 设备测试（运行在模拟器/真机）             |
| `test/`        | 单元测试（运行在本地 JVM）                |

##### 📄 `AndroidManifest.xml`

**路径**: `src/main/AndroidManifest.xml`
 ​**​作用​**​：声明应用组件、权限和元数据。
 ​**​示例​**​：

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app">
    <application
        android:label="@string/app_name"
        android:theme="@style/Theme.App">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

##### 📁 `res/` 资源目录

| **子目录**  | **用途**                       | 示例文件                    |
| ----------- | ------------------------------ | --------------------------- |
| `values/`   | 字符串、颜色、尺寸等           | `strings.xml`, `colors.xml` |
| `layout/`   | XML 布局文件（传统 View 系统） | `activity_main.xml`         |
| `drawable/` | 图片和矢量图                   | `ic_launcher.xml`           |
| `mipmap/`   | 应用图标（不同分辨率）         | `ic_launcher_round.png`     |

------

##### 📄 `proguard-rules.pro`

**作用**：配置代码优化和混淆规则。
 ​**​常用规则​**​：

```
# 保留所有 View 的 setter/getter 方法（避免 ButterKnife 等问题）
-keepclassmembers class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
    public void set*(***);
}
# 保留数据类（避免 Gson 反序列化失败）
-keep class com.example.model.** { *; }
```

##### 测试文件

###### 📁 `test/`（单元测试）

**示例**：

```
// src/test/java/com/example/ExampleUnitTest.kt
class ExampleUnitTest {
    @Test
    fun addition_isCorrect() {
        assertEquals(4, 2 + 2)
    }
}
```

###### 📁 `androidTest/`（设备测试）

**示例**：

```
// src/androidTest/java/com/example/ExampleInstrumentedTest.kt
@RunWith(AndroidJUnit4::class)
class ExampleInstrumentedTest {
    @Test
    fun useAppContext() {
        val appContext = InstrumentationRegistry.getInstrumentation().targetContext
        assertEquals("com.example.app", appContext.packageName)
    }
}
```

## 1.3 UI 组件

- 练习参考项目：https://github.com/vitaviva/Bloom

### 主题

![image-20250604165041412](images/image-20250604165041412.png)

![在这里插入图片描述](images/02c92fc60dc44ecbafc4f7170662dccdtplv-k3u1fbpfcp-zoom-in-crop-mark1512000.webp)

**Color.kt**、**Shape.kt**、**Type.kt**中通过Kotlin的常量分别定义各种样式， **Theme.kt**中将这些样式应用到全局主题：

```kotlin
//Thmem.kt
private val DarkColorPalette = darkColors(
        primary = purple200,
        primaryVariant = purple700,
        secondary = teal200
)

private val LightColorPalette = lightColors(
        primary = purple500,
        primaryVariant = purple700,
        secondary = teal200
)

@Composable
fun MyAppTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable() () -> Unit) {
    //根据theme的不同设置不同颜色
    val colors = if (darkTheme) {
        DarkColorPalette
    } else {
        LightColorPalette
    }

    MaterialTheme(
            colors = colors,
            typography = typography,
            shapes = shapes,
            content = content
    )
}
```

如上，使用Kotlin定义和切换theme都是如此简单，在`Composable`中基于`if`语句选择配置，然后静等下次`composition`生效就好了。

### 布局

|      **组件**      |                   **作用**                   |                        **示例**                         |
| :----------------: | :------------------------------------------: | :-----------------------------------------------------: |
|      `Column`      | 垂直排列子项（类似 `LinearLayout` 垂直方向） |        `kotlin Column { Text("A"); Text("B") }`         |
|       `Row`        | 水平排列子项（类似 `LinearLayout` 水平方向） |          `kotlin Row { Text("A"); Text("B") }`          |
|       `Box`        |      子项堆叠显示（类似 `FrameLayout`）      |          `kotlin Box { Text("A"); Text("B") }`          |
| `ConstraintLayout` |        通过约束定位子项（需额外依赖）        |                                                         |
|    `LazyColumn`    |     垂直滚动列表（类似 `RecyclerView`）      | `kotlin LazyColumn { items(100) { Text("Item $it") } }` |
|     `LazyRow`      |                 水平滚动列表                 |  `kotlin LazyRow { items(100) { Text("Item $it") } }`   |

