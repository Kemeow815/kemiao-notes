---
layout: home
layoutClass: 'kemiao-home-layout'

hero:
  name: 克喵の博客站
  text: Ke Miao的前端博客，记录学习过程中的一些心得和踩坑经验。
  tagline: 知识是进步的阶梯，争取每天都有资源更新
  image:
    src: https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/kemeow815@avatar.png
    alt: 克喵爱吃卤面
  actions:
    - text: 前端物语
      link: /fe/es6/
    - text: 前端导航
      link: /nav
      theme: alt
    - text: 日常笔记
      link: /daily-notes/
    - text: mmPlayer
      link: https://netease-music.fe-mm.com
      theme: alt
# features:
#   - icon: 📖
#     title: 前端物语
#     details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
#     link: /fe/javascript/types
#     linkText: 前端常用知识
#   - icon: 📘
#     title: 源码阅读
#     details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
#     link: /analysis/utils/only-allow
#     linkText: 源码阅读
#   - icon: 💡
#     title: Workflow
#     details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
#     link: /workflow/utils/library
#     linkText: 常用工具库
#   - icon: 🧰
#     title: 提效工具
#     details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
#     link: /efficiency/online-tools
#     linkText: 提效工具
#   - icon: 🐞
#     title: 踩坑记录
#     details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
#     link: /pit/npm
#     linkText: 踩坑记录
#   - icon: 💯
#     title: 吾志所向，一往无前。
#     details: '<small class="bottom-small">一个想躺平的小开发</small>'
#     link: /mao
---

<script setup>
import MFriends from './home/MFriends.vue'
</script>

<ClientOnly>
  <MFriends/>
</ClientOnly>

::: details 申请友链

**友链要求**:

- 网站应保持清洁，避免过多广告内容
- 网站需要有良好的稳定性和可靠性

**申请方式**:

1. 在本页面留言
2. 直接访问 [GitHub 友链申请页面](https://github.com/maomao1996/mm-notes/issues/95) 提交您的申请

**本站信息**：

- 网站名称: **克喵の博客站**
- 网站描述: **克喵的博客站，包含常用知识、阅读笔记、各种奇淫技巧、日常提效工具等**
- 网站地址：**<https://notes.kemeow.top>**
- 网站图标：**<https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/logo.webp>**

```json
{
  "title": "克喵の博客站",
  "desc": "克喵的博客站，包含常用知识、阅读笔记、各种奇淫技巧、日常提效工具等",
  "link": "https://notes.kemeow.top",
  "icon": "https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/logo.webp"
}
```

:::

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end instead;
}
</style>
