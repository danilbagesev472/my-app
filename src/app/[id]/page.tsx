import { getTodoID, getTodos } from '@/utils/Functions'
import axios from 'axios'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { redirect } from 'next/navigation'

type Todo = {
	id: string
	title: string
}
export async function generateStaticParams() {
	const posts: Todo[] = await getTodos()
	return posts.map(post => ({
		slug: post.id,
	}))
}
export default async function Id({ params: { id } }: Todo) {
	const post = await getTodoID(id)
	if (!post) {
		return {
			notFound: true,
		}
	}
	async function handler(formData: FormData) {
		'use server'
		const FormData = {
			title: formData.get('inp'),
		}
		await axios.put(
			`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users/${id}`,
			FormData
		)
		revalidatePath(`/${id}`) // Update cached posts
		redirect(`/`)
	}

	return (
		<>
			<section className='flex min-h-screen flex-col items-center justify-center p-24 gap-10'>
				<Link href={'/'}>Back</Link>
				<form action={handler} className='grid grid-flow-col gap-3'>
					<input
						name='inp'
						type='text'
						placeholder='edit post'
						className=' bg-zinc-950 border rounded-s-sm px-6 py-2'
					/>
					<button
						type='submit'
						className=' bg-zinc-950 border rounded-s-sm px-6 py-2'
					>
						Send
					</button>
				</form>

				<code>ID: {post?.id}</code>
				<p>{post?.title}</p>
			</section>
		</>
	)
}
