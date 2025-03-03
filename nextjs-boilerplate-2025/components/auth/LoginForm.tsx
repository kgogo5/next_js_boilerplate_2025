"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // 로그인 실패 시 리디렉트 방지
    });

    if (result?.error) {
      setError("로그인 실패! 이메일 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">로그인</h2>
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        로그인
      </button>
    </div>
  );
}
