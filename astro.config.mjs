// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// docs.rufree.app — RUFREE 使用手册 / RUFREE user guide
export default defineConfig({
  site: "https://docs.rufree.app",
  integrations: [
    starlight({
      title: { "zh-CN": "RUFREE 使用手册", en: "RUFREE Docs" },
      defaultLocale: "root",
      locales: {
        root: { label: "简体中文", lang: "zh-CN" },
        en: { label: "English", lang: "en" },
      },
      favicon: "/favicon.ico",
      logo: { src: "./src/assets/logo.png", alt: "RUFREE" },
      lastUpdated: true,
      // Our own 404 content lives in src/content/docs/404.md and en/404.md.
      disable404Route: true,
      customCss: ["./src/styles/custom.css"],
      editLink: { baseUrl: "https://github.com/Dos7t3r/rufree-docs/edit/main/" },
      sidebar: [
        {
          label: "开始使用",
          translations: { en: "Getting started" },
          items: [
            { slug: "start/what-is-rufree", label: "RUFREE 是什么", translations: { en: "What is RUFREE" } },
            { slug: "start/accounts", label: "账号与登录", translations: { en: "Accounts and sign-in" } },
            { slug: "start/clients", label: "各平台客户端", translations: { en: "Apps and clients" } },
          ],
        },
        {
          label: "课表",
          translations: { en: "Your timetable" },
          items: [
            { slug: "timetable/import", label: "导入课表", translations: { en: "Importing your timetable" } },
            { slug: "timetable/versions", label: "版本与学期", translations: { en: "Versions and terms" } },
            { slug: "timetable/events", label: "事件与分类", translations: { en: "Events and categories" } },
          ],
        },
        {
          label: "课程通知与考试",
          translations: { en: "Course feeds and exams" },
          items: [
            { slug: "feeds/subscribe", label: "订阅课程通知", translations: { en: "Subscribing to a course feed" } },
            { slug: "feeds/exams", label: "考试时间与考场", translations: { en: "Exam times and rooms" } },
            { slug: "feeds/sharing", label: "与同学共享通知", translations: { en: "Sharing feeds with classmates" } },
          ],
        },
        {
          label: "Assistant 与资料",
          translations: { en: "Assistant and materials" },
          items: [
            { slug: "assistant/syllabus", label: "上传 syllabus", translations: { en: "Uploading a syllabus" } },
            { slug: "assistant/review", label: "审核草稿", translations: { en: "Reviewing drafts" } },
            { slug: "assistant/materials", label: "课程资料库", translations: { en: "Course materials" } },
          ],
        },
        {
          label: "好友与群组",
          translations: { en: "Friends and groups" },
          items: [
            { slug: "social/friends", label: "添加好友", translations: { en: "Adding friends" } },
            { slug: "social/groups", label: "群组与共同空闲", translations: { en: "Groups and shared free time" } },
            { slug: "social/calendar-links", label: "日历订阅链接", translations: { en: "Calendar subscription links" } },
          ],
        },
        {
          label: "隐私",
          translations: { en: "Privacy" },
          items: [
            { slug: "privacy/visibility", label: "可见性设置", translations: { en: "Visibility settings" } },
            { slug: "privacy/data", label: "数据与删除", translations: { en: "Your data" } },
          ],
        },
      ],
    }),
  ],
});
