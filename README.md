## 주요 라이브러리 설명

### 프레임워크 및 핵심

- **[next](https://nextjs.org/)**  
  React 기반의 프레임워크로, SSR/SSG/CSR 지원, 파일 기반 라우팅, App Router 사용 등 최신 기능이 포함됨.

- **[react, react-dom](https://reactjs.org/)**  
  UI 컴포넌트 작성용 핵심 라이브러리. React 19에서는 Server Components 및 concurrent 기능 지원.

---

### 상태 관리

- **[zustand](https://github.com/pmndrs/zustand)**  
  전역 상태 관리용 경량 라이브러리. Redux보다 훨씬 간단하고, TypeScript와 궁합도 좋음.

- **[@tanstack/react-query](https://tanstack.com/query)**  
  서버 상태(=API 데이터)를 관리하는 라이브러리. 캐싱, 리패칭, 로딩 처리, 에러 핸들링이 자동화됨.

---

### 폼 및 유효성 검사

- **[react-hook-form](https://react-hook-form.com/)**  
  가볍고 빠른 폼 처리 라이브러리. 제어 컴포넌트/비제어 컴포넌트 모두 지원.

- **[zod](https://github.com/colinhacks/zod)**  
  스키마 기반 유효성 검사 라이브러리. `react-hook-form`과 결합 시 타입 안전하고 강력한 폼 유효성 검사 가능.

---

### 스타일링 및 UI

- **[tailwindcss](https://tailwindcss.com/)**  
  유틸리티-퍼스트 CSS 프레임워크. 빠르고 일관된 스타일링이 가능하며, 컴포넌트와의 결합성이 뛰어남.

- **[lucide-react](https://lucide.dev/)**  
  깔끔하고 가벼운 아이콘 셋. React 전용 컴포넌트로 제공되어 아이콘 사용이 간편함.

- **[clsx](https://github.com/lukeed/clsx)**  
  조건부 className을 깔끔하게 처리하는 유틸리티. Tailwind 사용 시 매우 유용.

---

### 데이터 통신 및 유틸리티

- **[axios](https://axios-http.com/)**  
  HTTP 클라이언트. REST API와 쉽게 통신할 수 있으며 인터셉터, 에러 핸들링 기능이 풍부함.

- **[lodash-es](https://lodash.com/)**  
  다양한 데이터 처리 유틸 함수 모음. ESM 전용으로 `tree-shaking`에 유리.

- **[dayjs](https://day.js.org/)**  
  날짜/시간 처리용 경량 라이브러리. moment.js보다 가볍고 API 호환성도 유사함.

- **[dotenv](https://github.com/motdotla/dotenv)**  
  `.env` 파일을 읽어서 환경 변수를 `process.env`에 주입해줌 (Next.js에선 일부 기능 제한, 주로 커스텀 서버나 테스트 환경에서 사용).

---

### SEO

- **[next-seo](https://github.com/garmeeh/next-seo)**  
  Next.js에서 SEO 메타 태그 설정을 컴포넌트 기반으로 쉽게 작성할 수 있도록 도와주는 라이브러리.

---

위 라이브러리들은 "경량, 생산성, 실용성"에 중점을 두어 선별하였습니다.  
모두 실무에서 검증되었으며, 빠른 초기 개발과 유지보수에 최적화된 조합입니다.
