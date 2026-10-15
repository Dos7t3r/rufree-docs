# RUFREE 文档站

[docs.rufree.app](https://docs.rufree.app) 的源码。面向用户的功能说明，中英双语。

用 [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) 构建，纯静态输出。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果（搜索功能只在构建后可用）
```

## 目录结构

```
src/
  content/docs/        中文页面（根 locale）
  content/docs/en/     英文页面
  content/i18n/        Starlight 界面文字的覆盖
  components/Shot.astro 截图组件（没有图时显示占位框）
  assets/              会被 Astro 处理的图片（截图放这里）
  styles/custom.css
public/                原样复制的静态文件（favicon 等）
astro.config.mjs       站点配置与侧边栏
```

## 加一个页面

1. 在 `src/content/docs/<分组>/` 下新建 `.md` 或 `.mdx`，写好 frontmatter 的 `title` 和 `description`
2. 在 `src/content/docs/en/<分组>/` 下建同名英文文件
3. 在 `astro.config.mjs` 的 `sidebar` 里加一项，带上 `translations.en`

侧边栏里引用了不存在的 slug 会导致构建失败，所以两个语言的文件都要有。

## 加截图

截图放进 `src/assets/`，然后在页面里：

```mdx
import Shot from '@/components/Shot.astro';
import shot from '@/assets/timetable-import-01.png';

<Shot
  id="timetable-import-01"
  src={shot}
  caption="导入时的新旧课表差异"
  alt="RUFREE 显示新旧课表的差异对比"
/>
```

不传 `src` 就显示占位框。待补的截图见 [SCREENSHOTS.md](./SCREENSHOTS.md)。

## 内容边界

这个站只写**功能怎么用**和**每个功能会公开什么**。不要写进来：

- 源码、密钥、token、环境变量
- 数据库结构、表名、RPC 名称
- AI 的提示词、模型名称、算法细节
- 内部部署配置、服务器信息

## 部署：Cloudflare Pages

这个仓库和主仓库 `Dos7t3r/RUFREE` 是分开的，**不会触发主站服务器的构建**。

在 Cloudflare 面板里连接这个仓库，构建设置：

| 项目 | 值 |
| --- | --- |
| 框架预设 | Astro |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| Node 版本 | 22 |

然后在 Pages 项目的 **Custom domains** 里添加 `docs.rufree.app`，
Cloudflare 会自动在 `rufree.app` 这个 zone 下建好 DNS 记录和证书。

> Node 版本如果没自动识别，在 Pages 的环境变量里加 `NODE_VERSION = 22`。
