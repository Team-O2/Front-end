# 🐳 O2-Frontend

## 서비스명

💙 O2 : open together 

-함께 성장하는 공간, CEO들이 마시는 산소

Project Period : 2021.06.26 ~ 2021.07.17

## 프로젝트 소개

<img src="https://user-images.githubusercontent.com/60960130/124759231-63462180-df6a-11eb-8aaf-80cd9f3e17c7.PNG" width="590">

💡 O2는 타인과의 정보를 공유하여 성장하고 
마침내 성공적인 결과를 만들어 낼 수 있는 가치를 추구합니다. 

## 개발 담당 부분

🧑🏻‍💻 강영우

```
* My Page
* Setting 
* Archiving
```

👩🏻‍💻 김효인

```
* Learn Myself
* Id, Pwd 찾기
```

👩🏻‍💻 배수빈

```
* Header
* Login, Signin
* Landing Page
* Admin Page
```

👩🏻‍💻 현지영

```
* Share Together
* Footer
* Notice Page
```

## 기술 스택 및 사용 라이브러리

```jsx

"@testing-library/jest-dom": "^5.14.1",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",
"@types/jest": "^26.0.23",
"@types/node": "^12.20.15",
"@types/react": "^17.0.11",
"@types/react-dom": "^17.0.8",
"@types/react-router-dom": "^5.1.7",
"@types/styled-components": "^5.1.10",
"axios": "^0.21.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.3",
"recoil": "^0.3.1",
"styled-components": "^5.3.0",
"styled-reset": "^4.3.4",
"styled-tools": "^1.7.2",
"typescript": "^4.3.4",
"web-vitals": "^1.1.2"
"@typescript-eslint/eslint-plugin": "^4.28.1",
"@typescript-eslint/parser": "^4.28.1",
"eslint": "^7.29.0",
"eslint-config-prettier": "^8.3.0",
"eslint-plugin-prettier": "^3.4.0",
"eslint-plugin-react": "^7.24.0",
"prettier": "^2.3.2"
```

## 프로젝트 구조

```jsx
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┣ 📂images
 ┃ ┗ 📂styles
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂CheckBox
 ┃ ┃ ┣ 📂HashTag
 ┃ ┃ ┣ 📂Icon
 ┃ ┃ ┣ 📂ImgSelector
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┣ 📂Label
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┗ 📂TextArea 
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┣ 📂Concert
 ┃ ┃ ┣ 📂DetailTitle
 ┃ ┃ ┣ 📂DropDown
 ┃ ┃ ┣ 📂HamDropDown
 ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┗ 📂SingleComment
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂CommentList
 ┃ ┃ ┣ 📂ConcertList
 ┃ ┃ ┣ 📂DetailContent
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂Hamburger
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┗ 📂SearchForm
 ┃ ┣ 📂templates
 ┃ ┃ ┣ 📂Base
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂Join
 ┃ ┃ ┣ 📂LearnMyself
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂Notice
 ┃ ┃ ┣ 📂Setting
 ┃ ┃ ┗ 📂ShareTogether
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┣ 📂libs
 ┃ ┗ 📜axios.ts
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┣ 📂Join
 ┃ ┣ 📂LearnMyself
 ┃ ┣ 📂Login
 ┃ ┣ 📂MyPage
 ┃ ┣ 📂Notice
 ┃ ┣ 📂Setting
 ┃ ┣ 📂ShareTogether
 ┃ ┗ 📜index.ts
 ┣ 📂resources
 ┃ ┗ 📜string.ts
 ┣ 📂stores
 ┃ ┗ 📜user.ts
 ┣ 📂types
 ┃ ┣ 📜learnMySelf.ts
 ┃ ┗ 📜shareTogether.ts
 ┣ 📂utils
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┗ 📜Router.tsx
```

## Code Convention

### 🏝 브랜치 중심 운영

**`main`  `develop`**  **`feat/`**  **`fix/`** 

### 🔤 **커밋 메세지**

```jsx
Feat: 기능 추가
Fix: 오류 수정
Refactor: 코드 수정 //기능까지 변경
Style: 코드 수정 //기능은 수정되지 않음
Docs: 문서 변경
Fix: 오류 수정
Etc: 기타 

✅ 한글로 Commit
```
