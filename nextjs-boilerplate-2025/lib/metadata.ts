import { Metadata } from "next";

const BASE_URL = "https://homepage.com";
const HOME_TITLE = "홈페이지 이름름";

export const defaultMetadata: Metadata = {
  title: {
    default: `${HOME_TITLE} | 사이트 보조 타이틀`,
    template: `%s | ${HOME_TITLE}`, // 개별 페이지에서 동적 제목 설정 가능
  },
  description: `${HOME_TITLE}에서 최고의 상품을 만나보세요!`,
  keywords: [`쇼핑몰`, `전자제품`, `패션`, `온라인 쇼핑`],
  openGraph: {
    title: `${HOME_TITLE} | 사이트 보조 타이틀`,
    description: `${HOME_TITLE}에서 다양한 상품을 만나보세요.`,
    url: BASE_URL,
    siteName: `${HOME_TITLE}`,
    type: `website`,
    images: [
      {
        url: `${BASE_URL}/default-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${HOME_TITLE} 기본 대표 이미지`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@homepage",
    title: `${HOME_TITLE} | 사이트 보조 타이틀`,
    description: `${HOME_TITLE}에서 다양한 상품을 만나보세요.`,
    images: [`${BASE_URL}/default-og-image.jpg`],
  },
};
