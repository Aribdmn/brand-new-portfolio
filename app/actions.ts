"use server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PRIVATE_SUPABASE_ROLE_KEY!,
);

const resend = new Resend(process.env.NEXT_PRIVATE_RESEND_API_KEY);

export async function handleContactForm(formData: FormData) {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const intent = formData.get("intent") as string;
	const message = formData.get("message") as string;

	if (!name || !email || !intent || !message) {
		return { success: false, error: "All parameters must be filled in!" };
	}

	try {
		const { error: dbError } = await supabase
			.from("inquiries")
			.insert([{ name, email, intent, message }]);

		if (dbError) {
			console.error("Server error:", dbError);
			return { success: false, error: "Transmission error. Please try again." };
		}
	} catch (error) {
		console.error("Server error:", error);
		return { success: false, error: "Transmission error. Please try again." };
	}
}

export async function sendEmailNotification(formData: FormData) {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const intent = formData.get("intent") as string;
	const message = formData.get("message") as string;

	if (!name || !email || !intent || !message) {
		return { success: false, error: "All parameters must be filled in!" };
	}

	const intentLabel =
		intent === "networking"
			? "01 - Networking / Connect"
			: "02 - Hiring / Project Inquiry";

	try {
		await resend.emails.send(
			// developer end
			{
				from: "Terminal Contact <onboarding@resend.dev>",
				to: "aribdmn.dev@gmail.com",
				subject: `[TRANSMISSION] New Contact from ${name} (${intentLabel})`,
				html: `
                <h3>New Transmission Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Connection Type:</strong> ${intentLabel}</p>
                <p><strong>Query / Specs:</strong></p>
                <p>${message}</p>
            `,
			},
		);

		await resend.emails.send(
			// client end
			{
				from: "Ariyanto Budiman<onboarding@resend.dev>",
				to: "aribdmn.dev@gmail.com",
				subject: "Transmission Received - Thank You",
				html: `
		        <h2>Hello ${name},</h2>
		        <p>Thank you for initiating contact. I have successfully received your transmission regarding <strong>${intentLabel}</strong>.</p>
		        <p>I will review your specs and get back to you shortly.</p>
		        <br/>
		        <p>Best regards,</p>
		        <p><strong>Ariyanto Budiman</strong></p>
		    `,
			},
		);
		return { success: true };
	} catch (error) {
		console.error("Transmission failed:", error);
		return { success: false, error: "Transmission error. Please try again." };
	}
}
