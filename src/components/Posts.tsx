'use client'
import { delPost, getTodos } from '@/utils/Functions'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Posts() {
	const [post, setPost] = useState([])

	useEffect(() => {
		const fn = async () => {
			const res = await getTodos()
			setPost(res)
		}
		fn()
	}, [])
	return (
		<>
			{post?.map((deteils: any) => (
				<div key={deteils.id} className='flex gap-10'>
					<div className='grid gap-3 s'>
						<code>ID: {deteils.id}</code>
						<h4>{deteils.title}</h4>
					</div>
					<div className='grid gap-3'>
						<Link
							href={`/${deteils.id}`}
							className=' hover:text-black/80 border border-white px-7 rounded-md hover:bg-white/85 transition-all'
						>
							Edit
						</Link>
						<button
							onClick={() => {
								delPost(deteils.id)
							}}
							className='hover:text-black/80 border border-white px-7 rounded-md hover:bg-white/85 transition-all'
						>
							Del
						</button>
					</div>
				</div>
			))}
		</>
	)
}
