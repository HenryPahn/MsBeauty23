// import Welcome from ""
import Email from "../components/Email";

import { Resend } from "resend"
const resend = new Resend('e_j1uDYaPZ_FboD1AGWG6pzBxsRwB7FPV7L');

export async function sendingEmail() {
    await resend.emails.send({
        from: 'phanthanhhoang06@gmail.com',
        to: 'phanthanhhoang06@gmail.com',
        subject: 'MSBEAUTY | New inquiry from',
        react: Email(),
    });
}


// re_j1uDYaPZ_FboD1AGWG6pzBxsRwB7FPV7L