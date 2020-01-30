# ghost-blog-theme

[![HitCount](http://hits.dwyl.io/luokangyuan/ghost-blog-theme.svg)](http://hits.dwyl.io/luokangyuan/ghost-blog-theme)  [![GitHub issues](https://img.shields.io/github/issues/luokangyuan/ghost-blog-theme.svg)](https://github.com/luokangyuan/ghost-blog-theme/issues)  [![GitHub license](https://img.shields.io/github/license/luokangyuan/ghost-blog-theme.svg)](https://github.com/luokangyuan/ghost-blog-theme/blob/master/LICENSE)  [![Download](https://img.shields.io/badge/downloads-master-green.svg)](https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg) [![GitHub forks](https://img.shields.io/github/forks/luokangyuan/ghost-blog-themey.svg)](https://github.com/luokangyuan/ghost-blog-theme/network)  [![GitHub stars](https://img.shields.io/github/stars/luokangyuan/ghost-blog-theme.svg)](https://github.com/luokangyuan/ghost-blog-theme/stargazers) 

> 这是一个卡片式风格设计的 Ghost 博客主题。

## 特性

- 卡片式风格的文章卡片
- 沉浸式的文章阅读体验
- 清晰明了的首页文章信息统计
- 漂亮的技能雷达图和文章标签词云图以及文章年度数量统计图
- 程序员风格的个人信息页面展示
- 极致简单的使用和一体化的配置
- 支持代码高亮

## 下载

首先，当你阅读到这里的时候，你已经拥有了自己的 `Ghost`博客，你可以下载稳定分支 `master` 的代码，也可以使用 `git`命令直接下载，命令如下：

```bash
git clone https://github.com/luokangyuan/ghost-blog-theme.git
```

## 配置

### 增加动态路由

修改配置文件 /var/www/ghost/content/settings$ vim routes.yaml

```yaml
routes:
  /about/me/: about-me
  /articles/classification/: articles-classification
  /articles/file/: articles-file
  /recard/list/people/: recard-list-people
  /friend/ship/: friend-ship

collections:
  /:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

### 后台新增接口验证信息

在`Integrations`新增一个`theme`用于接口认证，修改主题中的`/assets/js/config.js`中的`key`和`url`。

```bash
/** 访问接口配置*/
const api = new GhostContentAPI({
    url: 'http://localhost:2370',
    key: '3ca5b1a638723b78f35b7d4a07',
    version: "v3"
});
```

![image-20200130174405379](http://image.luokangyuan.com/2020-01-30-094409.png)

### 修改主题中的其它信息

主题中的`/assets/js/config.js`包含了主题所有的可配置的信息，根据自己的需求修改即可。

## 主题部分页面截图

### 首页

![image-20200130175041296](http://image.luokangyuan.com/2020-01-30-095046.png)

### 文章分类页面

![Xnip2020-01-30_18-06-38](http://image.luokangyuan.com/2020-01-30-100734.jpg)

### 赞助墙页面

![Snip20200130_7](http://image.luokangyuan.com/2020-01-30-100926.png)

### 友情链接页面

![Snip20200130_8](http://image.luokangyuan.com/2020-01-30-101032.png)

### 关于我页面

![Snip20200130_10](http://image.luokangyuan.com/2020-01-30-101209.png)