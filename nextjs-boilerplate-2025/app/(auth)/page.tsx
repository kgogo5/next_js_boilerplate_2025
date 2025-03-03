import { Metadata } from "next";
import { defaultMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...defaultMetadata,
    title: `로그인 | 홈페이지 내용`,
    description: "디스크립션",
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `로그인 | 홈페이지 내용`,
      description: "디스크립션",
      url: `주소`,
      images: [
        {
          url: "이미지",
          width: 800,
          height: 600,
          alt: "설명",
        },
      ],
    },
  };
}

export default function Auth() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
