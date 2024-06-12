# react-naver-analytics

## 개요

네이버 애널리틱스를 React에서 사용할 수 있도록 도와주는 라이브러리입니다.

## 설치 방법

```bash
npm install react-naver-analytics
yarn add react-naver-analytics
pnpm add react-naver-analytics
bun add react-naver-analytics
```

## 사용 방법

```tsx
import { NaverAnalytics } from 'react-naver-analytics';

function RootLayout() {
  return (
      <html>
        <head/>
        <body>
          <NaverAnalytics
              accountId={'YOUR_ACCOUNT_ID'}
          />
          <div id="root"/>
        </body>
      </html>
  );
}
```
