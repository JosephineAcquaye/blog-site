import { NextResponse } from "next/server";


export async function POST() {
  console.log("Hello from server side");

  return NextResponse.json({ success: true });
}