import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {

  const cookie = await cookies();

  const current =
    cookie.get("locale")?.value ?? "en";


  return NextResponse.json({
    lang: current
  });

}

export async function POST() {

  const cookie = await cookies();

  const current =
    cookie.get("locale")?.value ?? "en";


  const nextLocale =
    current === "fa"
      ? "en"
      : "fa";


  cookie.set(
    "locale",
    nextLocale,
  );


  return NextResponse.json({
    lang: nextLocale
  });

}