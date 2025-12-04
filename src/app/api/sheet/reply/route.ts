/* eslint-disable @typescript-eslint/no-explicit-any */
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "reply!A:D", // Sheet tên "reply" với 4 cột
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          name,
          email,
          message,
          new Date().toLocaleString("vi-VN"),
        ]],
      },
    });

    return NextResponse.json({ message: "Reply sent successfully!" });
  } catch (err: any) {
    console.error("Failed to send reply", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}