import Posts from '@/components/Posts'
import axios from 'axios'
import { redirect } from 'next/navigation'

export default function Home() {
	async function handler(formData: FormData) {
		'use server'
		const FormData = {
			title: formData.get('inp'),
		}
		await axios.post(
			`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users`,
			FormData
		)
		redirect(`/`)
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 gap-10'>
			<form action={handler} className='grid grid-flow-col gap-3'>
				<input
					name='inp'
					type='text'
					placeholder='Enter new post'
					className=' bg-zinc-950 border rounded-s-sm px-6 py-2'
				/>
				<button
					type='submit'
					className=' bg-zinc-950 border rounded-s-sm px-6 py-2'
				>
					Send
				</button>
			</form>

			<Posts />
		</main>
	)
}
