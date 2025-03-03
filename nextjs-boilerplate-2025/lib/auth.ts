import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// 서버에서 세션 가져오기
export async function getSession() {
  return await getServerSession(authOptions);
}
