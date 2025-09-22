import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export async function POST(request: Request) {
  try {
    const {
      AWS_REGION,
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY,
      SES_FROM_ADDRESS,
      SHEET_WEB_APP,
    } = process.env as Record<string, string | undefined>;

    if (!SHEET_WEB_APP) {
      return NextResponse.json(
        {
          status: "error",
          message: "Server misconfigured: SHEET_WEB_APP is not set",
        },
        { status: 500 },
      );
    }

    const body = await request.json();

    const payload = {
      ...body,
    };

    const res = await fetch(SHEET_WEB_APP, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const sheetResponse = await res.json();

    if (
      sheetResponse.status === "success" &&
      AWS_REGION &&
      AWS_ACCESS_KEY_ID &&
      AWS_SECRET_ACCESS_KEY &&
      SES_FROM_ADDRESS &&
      body?.email
    ) {
      const ses = new SESClient({
        region: AWS_REGION,
        credentials: {
          accessKeyId: AWS_ACCESS_KEY_ID,
          secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
      });

      const sendEmail = async ({
        to,
        subject,
        html,
      }: {
        to: string;
        subject: string;
        html: string;
      }) => {
        const params = {
          Source: SES_FROM_ADDRESS,
          Destination: {
            ToAddresses: [to],
          },
          Message: {
            Subject: {
              Data: subject,
              Charset: "UTF-8",
            },
            Body: {
              Html: {
                Data: html,
                Charset: "UTF-8",
              },
            },
          },
        };

        const command = new SendEmailCommand(params);
        return await ses.send(command);
      };

      const htmlMessage = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2C3E50;">Hi ${body.name},</h2>
          <p>We've received your request to be part of the <strong>MYDS Community</strong>!</p>
          <p>Our team has recorded your information and will contact you as soon as possible.</p>
          <p>Thank you for your interest in shaping <strong>Malaysia's Design System</strong>.</p>
          <br />
          <p style="margin-top: 20px;">Best regards,</p>
          <p><strong>MYDS Team</strong></p>
        </div>
      `;

      await sendEmail({
        to: body.email,
        subject: "MYDS Community Submission Received",
        html: htmlMessage,
      });
    }

    return NextResponse.json(sheetResponse);
  } catch (err) {
    console.error("API Proxy Error:", err);
    const message =
      err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
    return NextResponse.json(
      { status: "error", message: `Internal server error ${message}` },
      { status: 500 },
    );
  }
}
