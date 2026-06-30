// Type declarations for the `resend` package
declare module 'resend' {
  interface EmailSendParams {
    from: string;
    to: string;
    subject: string;
    html: string;
    text?: string;
    cc?: string[];
    bcc?: string[];
    reply_to?: string;
    headers?: Record<string, string>;
  }

  interface EmailsApi {
    send(params: EmailSendParams): Promise<any>;
    // other methods can be added as needed
  }

  export class Resend {
    constructor(apiKey: string);
    emails: EmailsApi;
    // other properties can be added as needed
  }
}
