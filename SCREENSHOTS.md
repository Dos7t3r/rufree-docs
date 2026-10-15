# 截图清单

文档里一共有 **28 个截图位**。在图片补齐之前，页面上会显示一个虚线占位框，
标明该位置的 id —— 所以缺哪张图，打开页面就能看见。

## 你需要做的

按下面的清单截图，文件名直接用 **id**（例如 `timetable-import-01.png`），
然后整批发给我。我负责裁切、缩放、打码和接到页面上。

### 截图要求

- **浏览器窗口宽度 1280px 左右**，这样在文档里缩放后字还看得清
- **深色或浅色都行**，但同一组（同一个页面里的几张）尽量统一
- **用测试账号**，或者截完自己先确认没有真实个人信息
- 不需要自己裁剪，原图发来就行

### 必须打码或避开的内容

> 这几样一旦截进去就是泄露，我会再检查一遍，但你截的时候先避开最稳妥。

- Quercus feed 链接（`https://q.utoronto.ca/feeds/announcements/enrollment_….atom`）
- 日历订阅链接（`/api/calendar/subscriptions/….ics`）
- 邮箱、验证码、学号
- 同学的真实姓名和头像
- 群组邀请链接

---

## 清单

### 账号（1 张）

| id | 内容 |
| --- | --- |
| `account-profile-01` | 个人资料页，能看到用户名和校区的设置位置 |

### 客户端（1 张）

| id | 内容 |
| --- | --- |
| `clients-ios-pwa-01` | iPhone Safari 的分享菜单，「添加到主屏幕」那一项 |

### 课表（6 张）

| id | 内容 |
| --- | --- |
| `timetable-import-01` | **学校课表系统**里导出 `.ics` 的按钮位置（不是 RUFREE 的界面） |
| `timetable-import-02` | 导入时的新旧课表差异对比 |
| `timetable-versions-01` | 某个学期的课表版本列表，能看到生效/归档状态 |
| `timetable-versions-02` | 切换版本前的差异确认 |
| `timetable-events-01` | 日历视图，最好同时有课程、考试、个人事件三种颜色 |
| `timetable-events-02` | 单个事件的可见性下拉菜单（展开状态） |

### 课程通知（6 张）

| id | 内容 |
| --- | --- |
| `feeds-subscribe-01` | **Quercus** 通知页面上 RSS 链接的位置（链接本身我会打码） |
| `feeds-subscribe-02` | 贴入链接后的预览结果 |
| `feeds-exams-01` | 一次检查后的处理结果列表，最好包含几种不同的结果 |
| `feeds-exams-02` | 考试姓氏的设置输入框 |
| `feeds-sharing-01` | 订阅表单里的两个共享开关 |
| `feeds-sharing-02` | 同学共享过来的课程通知（同学名字我会打码） |

### Assistant 与资料（6 张）

| id | 内容 |
| --- | --- |
| `assistant-syllabus-01` | syllabus 上传入口 |
| `assistant-syllabus-02` | 文件的分析状态（「分析中」那一刻最好） |
| `assistant-review-01` | 待审核草稿列表，**要能看到每条下面的 syllabus 出处** |
| `assistant-review-02` | 单条草稿展开后的确认/修改界面 |
| `assistant-materials-01` | 资料库文件列表，能看到共享状态 |
| `assistant-materials-02` | 针对资料提问的界面 |

### 好友与群组（6 张）

| id | 内容 |
| --- | --- |
| `social-friends-01` | 搜索用户并添加好友 |
| `social-friends-02` | 从你的视角看一个好友的课表 |
| `social-groups-01` | 群组成员列表，能看到群主/管理员/成员的角色区别 |
| `social-groups-02` | 群组的邀请管理（邀请链接我会打码） |
| `social-calendar-01` | 生成日历订阅链接的那一刻（**链接会打码**，但要能看到「只显示一次」的提示） |
| `social-calendar-02` | 已有订阅链接的列表和作废按钮 |

### 隐私（2 张）

| id | 内容 |
| --- | --- |
| `privacy-visibility-01` | 单个事件的可见性选项（四档都要能看到） |
| `privacy-visibility-02` | 设置页里的那一组隐私开关 |

---

## 优先级

如果不想一次截完，按这个顺序最划算 —— 前两组是最讲不清楚、最需要图的：

1. **课表导入**：`timetable-import-01`、`timetable-import-02`
2. **订阅课程通知**：`feeds-subscribe-01`、`feeds-subscribe-02`
3. **隐私开关**：`privacy-visibility-01`、`privacy-visibility-02`
4. **草稿审核**：`assistant-review-01`
5. 其余
