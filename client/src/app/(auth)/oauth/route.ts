// src/app/oauth/route.js

import appwriteAuthService from "@/appwrite/auth/authService";
import { createAdminClient } from "@/appwrite/config";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  if (!userId || !secret) {
    return NextResponse.redirect(`${request.nextUrl.origin}/error`);
  }

  const session = await appwriteAuthService.createSession(userId, secret);

  const cookieStore = await cookies();
  cookieStore.set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return NextResponse.redirect(`${request.nextUrl.origin}/dashboard`);
}
