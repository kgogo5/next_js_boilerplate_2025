import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // 예제: 인증되지 않은 사용자를 로그인 페이지로 리디렉트
  const isLoggedIn = req.cookies.get("token"); // JWT 토큰 쿠키 확인
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// 특정 경로에서만 미들웨어 실행 (선택 사항)
export const config = {
  matcher: ["/mypage"], // 이 경로에서만 실행됨
};
