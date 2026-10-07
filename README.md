# Lawrenclia's Personal Website

这是我的个人网站，包含首页、项目展示、博客、留言板和关于页面，支持明暗主题切换，适配各种设备。

## 主要内容

- **首页**：个人简介与导航入口
- **项目**：课程及个人开发作品展示
- **博客**：技术心得与项目经验分享
- **留言板**：访客可留言交流
- **关于**：个人介绍与联系方式

## 技术使用

- HTML5 + CSS3 + 原生JavaScript
- Font Awesome图标、Google Fonts（Inter）
- Supabase（用于留言板数据存储）

## 功能特点

- 响应式设计，适配多设备
- 明暗主题切换，记忆用户偏好
- 玻璃态UI设计，平滑过渡动画
- 基于Supabase的留言功能

## 本地查看

在仓库目录运行 `python -m http.server 8080`，然后访问 `http://localhost:8080`。首页使用 ES modules，需要通过本地 HTTP 服务预览。

首页保留原来的多窗口交错重叠布局。桌面端点击未激活的窗口将其置于最前，再次点击进入对应页面；手机端首次点击展开一个板块，再次点击进入页面。项目页支持分类与名称/技术栈搜索，笔记页支持标题搜索。主题选择在页面间保持一致；浏览器禁止本地存储时仍可正常切换。首页外部模块加载失败时保留页面直达入口。留言功能需 Supabase 配置。

所有页面通过 `<site-dock>` 复用底部导航。入口与行为统一维护在 `js/site-dock.js`，外观维护在 `css/site-dock.css`，页面留白维护在 `css/site-dock-layout.css`。导航图标来自本地 SVG，修改组件即可同步所有页面。

全站配色、字体、圆角、阴影与窗口标题栏统一维护在 `css/site-appearance.css`，在各页面的布局样式之后加载；Dock 也继承这套配色。博客、相册、留言板、简历及提示页面使用 `.site-window` 外框，终端互动页面的内容布局维护在 `css/terminal-page.css`。新生成的笔记通过 `templates/note-page.html` 自动沿用同一套外观。

全站不设顶部导航栏。各内容页通过 `<site-sidebar>` 复用同一侧边导航，由 `js/site-chrome.js` 和 `css/site-chrome.css` 维护。当前导航仅显示主页、项目、笔记、关于，Dock 另保留外观切换；博客、相册等其他页面暂时隐藏入口，文件和内容仍保留。项目筛选位于内容区，长篇笔记保留目录。窗口、标题、列表行、标签和表单控件统一维护在 `css/site-appearance.css`；底部 Dock 使用统一线条图标和文字标签，以淡蓝色标记当前页面。首页保留原来的窗口内容、位置和点击方式。

## 联系方式

- GitHub: [https://github.com/Lawrenclia](https://github.com/Lawrenclia)
- 网站留言板: 访问"留言"页面
