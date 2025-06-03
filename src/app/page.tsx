'use client'

import { Button } from "@/components/ui/button";
import { useStore } from "@/stores/useStore";

export default function Home() {
  const { count, increase, decrease } = useStore();

  return (
    <div className="max-w-[80rem] mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold">2025년 보일러 플레이트</h1>
      <p className="text-sm text-gray-500">
        2025년 보일러 플레이트는 2025년 현재 가장 좋은 방법으로 프로젝트를
        시작하기 위한 프로젝트입니다.
      </p>


    <div className="mt-4">
      <p>Count: {count}</p>
      <div className="flex gap-2 mt-2">
      <Button className="cursor-pointer" onClick={increase}>+</Button>
      <Button className="cursor-pointer" onClick={decrease}>-</Button></div>
    </div>
    </div>
  );
}