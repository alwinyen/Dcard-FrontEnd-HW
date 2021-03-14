<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>目錄</summary>
  <ol>
    <li>
      <a href="#關於專案">關於專案</a>
      <ul>
        <li><a href="#使用框架">使用框架</a></li>
        <li><a href="#專案架構">專案架構</a></li>
      </ul>
    </li>
    <li>
      <a href="#如何開始">如何開始</a>
      <ul>
        <li><a href="#安裝">安裝</a></li>
      </ul>
    </li>
    <li><a href="#聯絡">聯絡</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## 關於專案

此專案目的為串接交通部觀光景點 API (MOTC Transport API V2),並使用 React 實作一個瀏覽景點的網站。

### 使用框架

* [ReactJS](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.netlify.app/)

### 專案架構
```sh
 src
 |
 |--components (React Compnents)
 |      |
 |      |--GridDisplay (景點Grid主要顯示)
 |      |      |
 |      |      |--ErrorBox.jsx (API錯誤提示通知)
 |      |      |
 |      |      |--HasMoreBox.jsx (資料讀取完畢提示通知)
 |      |      |
 |      |      |--index.jsx (顯示邏輯處理)
 |      |
 |      |--Switcher (切換全部景點與城市景點)
 |             |
 |             |--index.jsx (切換邏輯與資料處理)
 |      
 |--contexts (Contexts 專案狀態)
 |      |
 |      |--Contexts.jsx (存取目前城市與狀態-全部顯示 或是 單一城市)
 |
 |--pages (React Router 導向頁面)
 |      |
 |      |--ScenicSpot.jsx (風景介紹頁面)
 |
 |--App.js (React Router 與 Context Provider 處理)
 |
 |--constant.js (Constant 定義)
 |
 |--index.js (主要載入點)
 |
 |--reportWebVitals.js
 |
 |--setupTests.js
```

<!-- GETTING STARTED -->
## 如何開始

### 安裝

開始前請先安裝相關套件

1. Clone 此專案
   ```sh
   git clone https://github.com/alwinyen/DcardFrontEndHW.git
   ```
2. cd 至專案目錄

3. Install NPM packages
   ```sh
   npm install
   ```
   or
   
   ```sh
   yarn install
   ```
   
4. 執行專案
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```

<!-- CONTACT -->
## 聯絡

Alwin Yen - alwin60805[at]gmail.com

