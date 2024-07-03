'use client'

import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface buttonProps {
  text: string
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined
}

export function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus()
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          Please Wait
        </Button>
      ) : (
        <Button variant={variant} type='submit'>
          {text}
        </Button>
      )}
    </>
  )
}
