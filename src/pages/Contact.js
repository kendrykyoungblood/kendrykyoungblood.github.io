import '../css/Contact.css'
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"
import { FaCheck, FaExclamation } from 'react-icons/fa'

const Contact = () => {
	const initialFormData = {
		name: '',
		businessName: '',
		email: '',
		instagram: '',
		tiktok: '',
		message: ''
	}
	const initialMessageData = {
		class: '',
		text: ''
	}

	const [formData, setFormData] = useState(initialFormData)
	const [submitting, setSubmitting] = useState(false)
	const [message, setMessage] = useState(initialMessageData)
	const [recaptchaToken, setRecaptchaToken] = useState()

	const formId = 'X9fHgJOq'
	const formUrl = `https://submit-form.com/${formId}`

	const recaptchaKey = '6LeADLggAAAAAMXo4_msz_YbvApbXDXZSiwTZgGZ'
	const recaptchaRef = useRef()

	async function submitForm(event) {
		event.preventDefault()
		setSubmitting(true)
		await postSubmission()
		setSubmitting(false)
	}

	async function postSubmission() {
		const payload = {
			...formData,
			'g-recaptcha-response': recaptchaToken
		}

		try {
			const result = await axios.post(formUrl, payload)
			console.log(result)
			setMessage({
				class: 'success',
				text: 'Message sent successfully!'
			})
			setFormData(initialFormData)
			recaptchaRef.current.reset()
		} catch(error) {
			console.log(error)
			setMessage({
				class: 'failure',
				text: 'Message failed to send. Please try again.'
			})
		}
	}

	function onChange(event) {
		const { id, value } = event.target
		setFormData(oldFormData => ({
			...oldFormData,
			[id]: value
		}))
	}

	function updateRecaptchaToken(token) {
		setRecaptchaToken(token)
	}

	if (message.class === 'success') {
		return (
			<main className="Contact">
				<section className="success">
					<FaCheck />
					<h2>Thank you!</h2>
					<p>{message.text}</p>
					<Link to="/">
						Back to homepage
					</Link>
				</section>
			</main>
		)
	} else {
		return (
			<main className="Contact">
				<h1>Contact</h1>
				<section>
					<p>
						Feel free to message me for more information about the services I provide, for projects and event collaborations, or to simply share your thoughts with me about my poetry and my YouTube channel.
					</p>
				</section>
				<form className="contact-form" onSubmit={submitForm}>
					<div className="item">
						<p>* indicates required field</p>
					</div>
					<div className="item">
						<label htmlFor="name" className='required'>Name</label>
						<input
							type="text"
							id="name"
							placeholder='Your Name'
							required
							onChange={onChange}
							value={formData.name}
						/>
					</div>
					<div className="item">
						<label htmlFor="name">Business Name</label>
						<input
							type="text"
							id="businessName"
							placeholder='ABC Organization'
							onChange={onChange}
							value={formData.businessName}
						/>
					</div>
					<div className="item">
						<label htmlFor="email" className='required'>Email</label>
						<input
							type="email"
							id="email"
							placeholder='example@email.com'
							required
							onChange={onChange}
							value={formData.email}
						/>
					</div>
					<div className="item inline">
						<div className="item">
							<label htmlFor="name">Instagram</label>
							<input
								type="text"
								id="instagram"
								placeholder='@example'
								onChange={onChange}
								value={formData.instagram}
							/>
						</div>
						<div className="item">
							<label htmlFor="name">TikTok</label>
							<input
								type="text"
								id="tiktok"
								placeholder='@example'
								onChange={onChange}
								value={formData.tiktok}
							/>
						</div>
					</div>
					<div className="item">
						<label htmlFor="message" className='required'>Message</label>
						<textarea
							id="message"
							required
							onChange={onChange}
							value={formData.message}
						/>
					</div>
					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey={recaptchaKey}
						onChange={updateRecaptchaToken}
					/>
					<button disabled={submitting}>
						{submitting ? 'Sending...' : 'Send'}
					</button>
					{message.class.length > 0 &&
						<div className={`message ${message.class}`}>
							{message.class === 'failed' && <FaExclamation />}<div>{message.text}</div>
						</div>
					}
				</form>
			</main>
		)
	}
}

export default Contact