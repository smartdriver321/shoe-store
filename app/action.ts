'use server'

import { redirect } from 'next/navigation'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { parseWithZod } from '@conform-to/zod'

import { productSchema } from './lib/zodSchemas'

export async function createProduct(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || user.email !== 'tinggaldidisneyland@gmail.com') {
    return redirect('/')
  }

  const submission = parseWithZod(formData, {
    schema: productSchema,
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  redirect('/dashboard/products')
}
