import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export async function POST(request: Request) {
  try {
    const ses = new SESClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const sendEmail = async ({
      to,
      subject,
      body,
    }: {
      to: string;
      subject: string;
      body: string;
    }) => {
      const params = {
        Source: process.env.SES_FROM_ADDRESS!,
        Destination: {
          ToAddresses: [to],
        },
        Message: {
          Subject: {
            Data: subject,
          },
          Body: {
            Text: {
              Data: body,
            },
          },
        },
      };

      const command = new SendEmailCommand(params);
      return await ses.send(command);
    };

    const body = await request.json();

    const payload = {
      ...body,
      token: process.env.SHEET_TOKEN,
    };

    const res = await fetch(process.env.SHEET_WEB_APP!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const sheetResponse = await res.json();

    if (sheetResponse.status === "success") {
      const message = `Hi ${body.name},

      We've received your request to be part of the MYDS Community! Our team has recorded your information and will contact you as soon as possible.

      Thank you for your interest in shaping Malaysia's Design System.

      Best regards,  
      MYDS Team`;

      await sendEmail({
        to: body.email,
        subject: "MYDS Community Submission Received",
        body: message,
      });
    }

    return NextResponse.json(sheetResponse);
  } catch (err) {
    console.error("API Proxy Error:", err);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}

