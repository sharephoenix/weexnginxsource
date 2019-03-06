# weexnginxsource
# 安装 weex
# 创建工程
    weex create projectname
# android 工程运行
1. weex platform add androidpwd -> 创建 weex 工程
2. npm run android -> 运行 android 工程
3. npm run build -> 编译工程

# android studio 3.1.0 
## 找不到 mipsel-linux-android-4.9 文件
### 解决方法
    下载 NDK 16 ，把 NDK 中的 toolchains/mipsel-linux-android-4.9 移到 响应的 NDK 位置
## 报错

     Error:Cannot set the value of read-only property 'outputFile' for ApkVariantOutputImpl_Decorated{apkData=Main{type=MAIN, fullName=debug, filters=[]}} of type com.android.build.gradle.internal.api.ApkVariantOutputImpl.
    
### 修改
    这是由于升级Android studio3以后，buide.gradle里老的写法不顶用了，要改成如下：

    android.applicationVariants.all { variant ->
        variant.outputs.all {
            outputFileName = "weex-app.apk"
        }
    }
## 报错
    Error:Execution failed for task ':app:javaPreCompileDebug'.Annotation processors must be explicitly declared now.  The following dependencies on the compile classpath are found to contain annotation processor.  Please add them to the annotationProcessor configuration.
    - weexplugin-processor-1.3.jar (com.taobao.android:weexplugin-processor:1.3)
    Alternatively, set android.defaultConfig.javaCompileOptions.annotationProcessorOptions.includeCompileClasspath = true to continue with previous behavior.  Note that this option is deprecated and will be removed in the future.
    See https://developer.android.com/r/tools/annotation-processor-error-message.html for more details.
### 修改
    需要在build.gradle文件的defaultConfig中添加相关设置
    javaCompileOptions {
            annotationProcessorOptions {
                includeCompileClasspath = true
            }
        }

# module 调用时候的坑
## 同步调用
