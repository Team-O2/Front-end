# 🐳 O2-Frontend

## 서비스명

💙 O2 : open together 

-함께 성장하는 공간, CEO들이 마시는 산소

Project Period : 2021.06.26 ~ 2021.07.17

## 프로젝트 소개

<img src="https://user-images.githubusercontent.com/60960130/124759231-63462180-df6a-11eb-8aaf-80cd9f3e17c7.PNG" width="590">

💡 O2는 타인과의 정보를 공유하여 성장하고 
마침내 성공적인 결과를 만들어 낼 수 있는 가치를 추구합니다. 

## 프로젝트 뷰
<br />
O2의 랜딩 페이지 입니다
<br />
<br />
<img src="https://user-images.githubusercontent.com/60960130/125966502-8a363ce7-7b9a-4673-8137-e0a197b25e07.PNG" width="590" >
<br />
나의 창업 스토리를 기록하는 LearMySelf페이지 입니다
<br />
<br />
<img src="https://user-images.githubusercontent.com/60960130/125966704-180127fa-79d7-4a5e-bc9f-6b272d49f988.PNG" width="590" >
<br />
창업 성장 스토리를 나누는 ShareTogether 페이지 입니다
<br />
<br />
<img src="https://user-images.githubusercontent.com/60960130/125966781-056edfd0-db5b-43f4-b517-54ee1680fe3b.PNG" width="590" >
<br />
마이페이지 입니다
<br />
<br />
<img src="https://user-images.githubusercontent.com/60960130/125966849-08f6398a-3d1f-40af-9aa4-77d359e57a20.PNG" width="590" >
로그인 회원가입 페이지입니다
<br />
<br />
<img src="https://user-images.githubusercontent.com/60960130/125967720-1e50d268-d202-464e-85fc-1ed5b9c1732b.png" width="590" >
<img src="https://user-images.githubusercontent.com/60960130/125967776-b2fae6a0-c81b-4ddb-a019-a764b62135c0.png" width="590" >



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
 ┃ ┣ 📂ShareTogether
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜myPage.ts
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📂mypage
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜animation.ts
 ┃ ┃ ┣ 📜GlobalStyles.ts
 ┃ ┃ ┗ 📜theme.ts
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂CheckBox
 ┃ ┃ ┣ 📂ChipBtn
 ┃ ┃ ┣ 📂DotText
 ┃ ┃ ┣ 📂fileUpload
 ┃ ┃ ┣ 📂HashTag
 ┃ ┃ ┣ 📂Icon
 ┃ ┃ ┣ 📂Img
 ┃ ┃ ┣ 📂ImgSelector
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┣ 📂Label
 ┃ ┃ ┣ 📂Link
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂MyPageCard
 ┃ ┃ ┣ 📂StyledInput
 ┃ ┃ ┣ 📂Tag
 ┃ ┃ ┣ 📂TextArea
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂AdminChallengeCard
 ┃ ┃ ┣ 📂AdminChallengeOpenForm
 ┃ ┃ ┣ 📂AdminWriteForm
 ┃ ┃ ┣ 📂BadgeExpCard
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┣ 📂CategoryButton
 ┃ ┃ ┣ 📂ChallengeComment
 ┃ ┃ ┣ 📂ChallengeCommentWrite
 ┃ ┃ ┣ 📂ChallengeHeader.tsx
 ┃ ┃ ┣ 📂ChallengeRegister
 ┃ ┃ ┣ 📂ChallengeReplyComment
 ┃ ┃ ┣ 📂ChallengeSingleWrite
 ┃ ┃ ┣ 📂ChallengeWriteTag
 ┃ ┃ ┣ 📂CommentedBoardRow
 ┃ ┃ ┣ 📂CommentWrite
 ┃ ┃ ┣ 📂Concert
 ┃ ┃ ┣ 📂ConcertCard
 ┃ ┃ ┣ 📂ConcertTitle
 ┃ ┃ ┣ 📂DeleteModal
 ┃ ┃ ┣ 📂DetailTitle
 ┃ ┃ ┣ 📂DropDown
 ┃ ┃ ┣ 📂DropDownMulti
 ┃ ┃ ┣ 📂EditCard
 ┃ ┃ ┣ 📂EditorForm
 ┃ ┃ ┣ 📂FindPwdForm
 ┃ ┃ ┣ 📂HamDropDown
 ┃ ┃ ┣ 📂JoinCheck
 ┃ ┃ ┣ 📂Joinform
 ┃ ┃ ┣ 📂LearnMyselfCard
 ┃ ┃ ┣ 📂Loginform
 ┃ ┃ ┣ 📂MyPageSection
 ┃ ┃ ┣ 📂MyPageSlider
 ┃ ┃ ┣ 📂Notice
 ┃ ┃ ┣ 📂NoticeDetailTitle
 ┃ ┃ ┣ 📂NoticeSingleComment
 ┃ ┃ ┣ 📂RegisterHeader
 ┃ ┃ ┣ 📂ReplyComment
 ┃ ┃ ┣ 📂SearchBar
 ┃ ┃ ┣ 📂ShareTogetherCard
 ┃ ┃ ┣ 📂SingleComment
 ┃ ┃ ┣ 📂ViewListCard
 ┃ ┃ ┣ 📂WriteCard
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂AdminChallengeList
 ┃ ┃ ┣ 📂AdminChallengeOpen
 ┃ ┃ ┣ 📂AdminWrite
 ┃ ┃ ┣ 📂CategoryList
 ┃ ┃ ┣ 📂CommentList
 ┃ ┃ ┣ 📂ConcertCardList
 ┃ ┃ ┣ 📂ConcertList
 ┃ ┃ ┣ 📂DetailContent
 ┃ ┃ ┣ 📂FindPwd
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂Hamburger
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂Join
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂MyCommentList
 ┃ ┃ ┣ 📂MyPageHeader
 ┃ ┃ ┣ 📂NoticeCommentList
 ┃ ┃ ┣ 📂NoticeDetailContent
 ┃ ┃ ┣ 📂NoticeHeader
 ┃ ┃ ┣ 📂NoticeList
 ┃ ┃ ┣ 📂SearchForm
 ┃ ┃ ┣ 📂ViewCardList
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂templates
 ┃ ┃ ┣ 📂Base
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂Join
 ┃ ┃ ┣ 📂LearnMyself
 ┃ ┃ ┃ ┣ 📜ChallengeEdit.tsx
 ┃ ┃ ┃ ┣ 📜ChallengeList.tsx
 ┃ ┃ ┃ ┣ 📜ChallengeRegister.tsx
 ┃ ┃ ┃ ┣ 📜ChallengeWrite.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂Login
 ┃ ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂Notice
 ┃ ┃ ┣ 📂Setting
 ┃ ┃ ┣ 📂ShareTogether
 ┃ ┃ ┗ 📂ShareTogetherDetail
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┗ 📜index.ts
 ┣ 📂libs
 ┃ ┣ 📜axios.ts
 ┃ ┗ 📜getChallenge.ts
 ┣ 📂pages
 ┃ ┣ 📂AdminChallengeList
 ┃ ┣ 📂AdminChallengeOpen
 ┃ ┣ 📂AdminWrite
 ┃ ┣ 📂FindPwd
 ┃ ┣ 📂Home
 ┃ ┣ 📂Join
 ┃ ┣ 📂LearnMyself
 ┃ ┣ 📂Login
 ┃ ┣ 📂MyPage
 ┃ ┃ ┣ 📂ScrappedLearnMyself
 ┃ ┃ ┣ 📂ScrappedShareTogether
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Notice
 ┃ ┣ 📂NoticeDetail
 ┃ ┣ 📂SetPwd
 ┃ ┣ 📂Setting
 ┃ ┣ 📂ShareTogether
 ┃ ┣ 📂ShareTogetherDetail
 ┃ ┗ 📜index.ts
 ┣ 📂resources
 ┃ ┗ 📜string.ts
 ┣ 📂stores
 ┃ ┗ 📜user.ts
 ┣ 📂types
 ┃ ┣ 📜learnMySelf.ts
 ┃ ┣ 📜myPage.ts
 ┃ ┗ 📜shareTogether.ts
 ┣ 📂utils
 ┃ ┗ 📜index.ts
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
