import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [pot, setPot] = useState("");
	const [nameErrorMessage, setNameErrorMessage] = useState(null);
	const [emailErrorMessage, setEmailErrorMessage] = useState(null);

	const validateName = (name) => {
		if (name.trim() === "") {
			return "Ad Soyadınızı kontrol ediniz.";
		}
		return null;
	};
	const validateEmail = (email) => {
		const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!re.test(String(email).toLowerCase())) {
			return "E-posta adresinizi kontrol ediniz.";
		}
		return null;
	};
	const handleNameChange = (e) => {
		setName(e.target.value);
		const error = validateName(e.target.value);
		setNameErrorMessage(error);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		const error = validateEmail(e.target.value);
		setEmailErrorMessage(error);
	};
	const clearState = () => {
		setName("");
		setEmail("");
		setPot("");
		setMessage("");
	};

	async function handleSubmit(e) {
		e.preventDefault();
		const webhookUrl = "https://hooks.slack.com/services/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";

		const nameError = validateName(name);
		const emailError = validateEmail(email);
		setEmailErrorMessage(emailError);
		setNameErrorMessage(nameErrorMessage);

		if (pot.length >= 1) {
			console.log("honeypot active!");
			return;
		}

		const data = {
			channel: "#contact-form-submissions",
			username: `${name}`,
			type: "mrkdwn",
			pretext: "_ https://www.finarkurumsal.com/iletisim/ - *Bize Ulaşın* formundan gelen mesaj:_",
			text: `*${name}:* ${email}\n${message}`,
			color: "#00b3e3",
			icon_emoji: ":mailbox_with_mail:",
		};

		if (!nameError) {
			if (!emailError) {
				// Submit form data to server
				let res = await axios.post(webhookUrl, JSON.stringify(data), {
					transformRequest: [
						(data, headers) => {
							//delete headers.post["Content-Type"]
							return data;
						},
					],
				});

				if (res.status === 200 || res.status === 201) {
					toast("Mesajınız gönderilmiştir", { type: "success" });
					setTimeout(() => {
						clearState();
					}, 500);
				} else {
					toast("Bir hata oluştu, lütfen daha sonra tekrar deneyiniz", { type: "error" });
				}
			} else {
				toast("E-posta adresinizi kontrol ediniz.", { type: "error" });
			}
		} else {
			toast("Ad Soyadınızı kontrol ediniz.", { type: "error" });
		}
	}

	return (
		<>
			<ToastContainer />
			<div className="flex">
				<div className="container mx-auto my-5 w-full">
					<form onSubmit={handleSubmit}>
						<input className="hidden" type="text" name="pot" id="pot" value={pot} onChange={(e) => setPot(e.target.value)} tabIndex="-1" autoComplete="off" />
						<label className="mb-2 block text-sm font-normal uppercase tracking-[1px] text-gray-700" htmlFor="name">
							Ad Soyad
						</label>
						<input className="block w-full appearance-none rounded border border-gray-200 bg-gray-100 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none" id="name" type="text" value={name} onChange={handleNameChange} />
						{nameErrorMessage && <div className="mb-4 block text-sm text-red">{nameErrorMessage}</div>}
						<label className="mb-2 mt-4 block text-sm font-normal uppercase tracking-[1px] text-gray-700" htmlFor="email">
							E-posta
						</label>
						<input className="block w-full appearance-none rounded border border-gray-200 bg-gray-100 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none" id="email" type="email" value={email} onChange={handleEmailChange} />
						{emailErrorMessage && <div className="mb-4 block text-sm text-red">{emailErrorMessage}</div>}
						<label className="mb-2 mt-4 block text-sm font-normal uppercase tracking-[1px] text-gray-700" htmlFor="message">
							Mesajınız
						</label>
						<textarea
							className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-100 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
							id="message"
							type="message"
							rows="7"
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						/>
						<button type="submit" className="focus:shadow-outline mt-4 rounded bg-mavi px-4 py-2 font-bold uppercase tracking-[1px] text-white shadow hover:bg-mavi2 focus:outline-none">
							Gönder
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
