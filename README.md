# Simple-file-store

简易文件存储服务

## 如何用？

```bash
# 上传文件API
POST /upload/:filename?

Request: FormData = {
  store: string? = 'default',
  file: File
}

Response: string # 文件路径，如 /xxx/xxxxxxxxxx.jpg

# 查看文件/图片API
GET /:store/:filepath?w=100&h=100
Request: N/A
Response: File

# 查看文件/图片API2（通过别名访问资源）
GET /:aliasName?w=100&h=100
Request: N/A
Response: File

查看文件API，如果是查看图片，支持图片裁剪，
只需要在查询API上带上QueryString(w:number, h:number)即可。
如：/default/42c793cc-1985-41a3-8d36-7e059ee55a5a.png?w=100
```

## 依赖说明

项目使用了图片库 ``gm`` ([Github地址](https://github.com/aheckmann/gm))，该库依赖于第三方图片处理库： [GraphicsMagick](http://www.graphicsmagick.org/) 或者是 [ImageMagick](http://www.imagemagick.org/script/index.php)，请务必先安装其中一个依赖库。

## 如何开发？

```bash
# 下载代码
git clone

# 初始化依赖
npm i

# 启动构建并运行
npm run dev 

# 生成部署包（不包含node_modules）
npm run build

# 生成部署包（包含node_modules）
npm run release
```

## 其他

请自行查看源代码
