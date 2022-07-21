import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "lang":"en",
          "New & upcoming":"New & upcoming",
          "Popular":"Popular",
          "More":"More",
          "Let's review":"Let's review",
          "All Movies":"All Movies",
          "Sign in":"Sign in",
          "Sort by":"Sort by",
          "Category":"Category",
          "Runtime":"Runtime",
          "min":"min",
          "Rate":"Rate",
          "Director":"Director",
          "Stars":"Stars",
          "Summary":"Summary",
          "Rate and Review":"Rate and Review",
          "Videos":"Videos",
          "Photos":"Photos",
          "User Reviews":"User Reviews",
          "Username":"Username",
          "Now Playing":"Now Playing",
          "Top rated":"Top rated",
          "Action":"Action",
          "Adventure":"Adventure",
          "Animation":"Animation",
          "Comedy":"Comedy",
          "Crime":"Crime",
          "Documentary":"Documentary",
          "Drama":"Drama",
          "Family":"Family",
          "Fantasy":"Fantasy",
          "History":"History",
          "Horror":"Horror",
          "Music":"Music",
          "Romance":"Romance",
          "Science Fiction":"Science Fiction",
          "TV Movie":"TV Movie",
          "War":"War",
        }
      }
      ,zh: {
        translation: {
          "lang":"zh",
          "New & upcoming":"最新和即将上映",
          "Popular":"流行",
          "More":"更多",
          "Let's review":"来讨论",
          "All Movies":"所有电影",
          "Sign in":"登录",
          "Sort by":"排序",
          "Category":"类别",
          "Runtime":"时长",
          "min":"分钟",
          "Rate":"评分",
          "Director":"导演",
          "Stars":"演员",
          "Summary":"简介",
          "Rate and Review":"评分和评论",
          "Videos":"视频",
          "Photos":"照片",
          "User Reviews":"用户评论",
          "Username":"用户名",
          "Now Playing":"正在上映",
          "Top rated":"最高评分",
          "Action":"动作",
          "Adventure":"冒险",
          "Animation":"动画",
          "Comedy":"喜剧",
          "Crime":"犯罪",
          "Documentary":"纪录片",
          "Drama":"剧情",
          "Family":"家庭",
          "Fantasy":"奇幻",
          "History":"历史",
          "Horror":"惊悚",
          "Music":"音乐",
          "Romance":"爱情",
          "Science Fiction":"科幻",
          "War":"战争"
        }
      }
    },
    lng: document.querySelector('html').lang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

