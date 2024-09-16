import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "~/utils/uploadthing";
import { FaFilePdf } from "react-icons/fa";

export default function HRForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pdfName, setPdfName] = useState("");
	const [pdfPath, setPdfPath] = useState(null);
	const [fileCount, setFileCount] = useState(0);
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
		setPdfPath(null);
		setPdfName("");
		setFileCount(0);
		setPot("");
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
			channel: "#hr-form-submissions",
			username: `${name}`,
			type: "mrkdwn",
			pretext: "_ https://www.finarkurumsal.com/hr-form/ - *Bizimle çalışmak ister misiniz?* formundan gelen mesaj:_",
			text: `*${name}:* ${email}\n<${pdfPath}|Yüklenen PDF>`,
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
						<div className="mb-6 h-0">&nbsp;</div>
						{pdfPath ? (
							<>
								<div className="mb-2 mt-4 block text-sm font-normal uppercase tracking-[1px] text-gray-700">CV'NİZ EKLENDİ</div>
								<div className="mb-2 mt-0 flex text-sm font-normal italic tracking-[0px] text-mavi">
									<FaFilePdf className="mr-2 text-xl" />
									<a href={pdfPath} target="_blank" aria-label="CV şuraya yüklendi">
										{pdfName}
									</a>
								</div>
								<button type="submit" className="focus:shadow-outline mt-4 rounded bg-mavi px-4 py-2 font-bold uppercase tracking-[1px] text-white shadow hover:bg-gok focus:outline-none">
									Gönder
								</button>
							</>
						) : (
							<UploadDropzone
								endpoint="pdfFileRoute"
								onClientUploadComplete={(res) => {
									setPdfPath(res[0].url);
								}}
								onChange={(files) => {
									setFileCount(files.length);
									setPdfName(files[0].name);
								}}
								onUploadError={(error) => {
									alert(`HATA! ${error.message}\n\nSayfayı yenileyip tekrar deneyiniz.\n\nYüklemek istediğiniz dosyanın bir PDF dosyası olduğundan ve 4MB'dan küçük olduğundan emin olunuz.`);
									window.location.reload();
								}}
								config={{ appendOnPaste: false, mode: "auto", maxFiles: 1 }}
								className="ut-button:w-full ut-button:bg-gok ut-button:after:bg-mavi ut-button:focus-within:ring-2 ut-button:focus-within:ring-gok ut-button:focus-within:ring-offset-2 ut-allowed-content:mt-4 ut-allowed-content:uppercase ut-label:w-full ut-label:text-balance ut-label:leading-tight ut-button:ut-readying:bg-mavi2"
								content={{
									label({ ready }) {
										if (!ready) return "Kontrol ediliyor...";
										return `Dosyaları seçmek için: Tıkla ya da Sürükle-Bırak`;
									},
									button({ uploadProgress }) {
										if (uploadProgress) return <div className="z-[100] font-normal">{fileCount} adet pdf yükleniyor...</div>;
										if (fileCount > 0)
											return (
												<div className="text-md flex text-center font-normal">
													{fileCount} adet dosya yükle <FaFilePdf className="ml-2 text-xl" />
												</div>
											);
										return <div className="text-md font-bold uppercase tracking-[1px]">Dosya seç</div>;
									},
								}}
							/>
						)}
					</form>
				</div>
			</div>
		</>
	);
}
