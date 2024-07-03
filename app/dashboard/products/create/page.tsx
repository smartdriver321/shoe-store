'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import { UploadDropzone } from '@/lib/uploadthing'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ProductCreateRoute() {
  return (
    <form>
      <div className='flex items-center gap-4'>
        <Button variant='outline' size='icon' asChild>
          <Link href='/dashboard/products'>
            <ChevronLeft className='w-4 h-4' />
          </Link>
        </Button>
        <h1 className='text-xl font-semibold tracking-tight'>New Product</h1>
      </div>

      <Card className='mt-5'>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            In this form you can create your product
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <Label>Name</Label>
              <Input
                type='text'
                className='w-full'
                placeholder='Product Name'
              />

              <p className='text-red-500'>name</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Label>Description</Label>
              <Textarea placeholder='Write your description right here...' />
              <p className='text-red-500'>description</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Label>Price</Label>
              <Input type='number' placeholder='$55' />
              <p className='text-red-500'>price</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Label>Featured Product</Label>
              <Switch />
              <p className='text-red-500'>featured</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='draft'>Draft</SelectItem>
                  <SelectItem value='published'>Published</SelectItem>
                  <SelectItem value='archived'>Archived</SelectItem>
                </SelectContent>
              </Select>
              <p className='text-red-500'>status</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Label>Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select Category' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='y'>category</SelectItem>
                </SelectContent>
              </Select>
              <p className='text-red-500'>category</p>
            </div>

            <div className='flex flex-col gap-3'>
              <Label>Images</Label>

              <UploadDropzone
                endpoint='imageUploader'
                onClientUploadComplete={(res) => {
                  alert('Finish uploading')
                }}
                onUploadError={() => {
                  alert('Something went wrong')
                }}
              />

              <p className='text-red-500'>images</p>
            </div>
          </div>
        </CardContent>

        <CardFooter>Create Product</CardFooter>
      </Card>
    </form>
  )
}
