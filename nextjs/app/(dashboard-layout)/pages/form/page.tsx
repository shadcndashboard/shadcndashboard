'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Icon } from '@iconify/react'
import { Button } from '@/components/ui/button'
import { Calendar1, Clock } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import StyleAwareWrapper from '@/app/components/shared/StyleAwareWrapper'
import BreadcrumbComp from '../../layout/shared/breadcrumb/breadcrumb-comp'
import StyleDivider from '@/app/components/shared/StyleDivider'

const BCrumb = [{ to: '/', title: 'Home' }, { title: 'Forms' }]

const Page = () => {
  const [time, setTime] = useState('')
  const [copied, setCopied] = useState(false)
  const [website, setWebsite] = useState('www.tailwind-admin.com')
  const [switch1, setSwitch1] = useState(false)
  const [switch2, setSwitch2] = useState(true)
  const [switch3, setSwitch3] = useState(true)

  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(website)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
    >
      <BreadcrumbComp title="Form Elements" items={BCrumb} />
      <StyleDivider />
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-px'>
        <div className='flex flex-col gap-px'>
          {/* Default Inputs */}
          <div className='md:p-6 p-4 bg-background'>
            <h5 className='card-title'>Default Inputs</h5>
            <div className='mt-6 flex flex-col gap-6'>
              {/* Basic Input */}
              <div>
                <Label htmlFor='name'>Input</Label>
                <Input id='name' type='text' required className='mt-2' />
              </div>

              {/* Input with placeholder */}
              <div>
                <Label htmlFor='firstname'>Input with Placeholder</Label>
                <Input
                  id='firstname'
                  type='text'
                  placeholder='Firstname'
                  required
                  className='mt-2'
                />
              </div>

              {/* Select */}
              <div>
                <Label htmlFor='countries'>Select Input</Label>
                <Select>
                  <SelectTrigger className='mt-2 w-full'>
                    <SelectValue placeholder='Select an option' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='us'>United States</SelectItem>
                    <SelectItem value='ca'>Canada</SelectItem>
                    <SelectItem value='fr'>France</SelectItem>
                    <SelectItem value='de'>Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor='password'>Password Input</Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your Password'
                  required
                  className='mt-2'
                />
              </div>

              {/* Datepicker */}
              <div className='flex flex-col gap-3'>
                <Label htmlFor='date' className='px-1'>
                  Date of birth
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger>
                    <Button
                      variant='outline'
                      id='date'
                      className='w-full justify-between font-normal hover:bg-transparent focus:border-primary'>
                      {date ? date.toLocaleDateString() : 'Select date'}
                      <Icon
                        icon='solar:calendar-minimalistic-linear'
                        width={18}
                        height={18}
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto overflow-hidden p-0'
                    align='start'>
                    <Calendar
                      mode='single'
                      selected={date}
                      captionLayout='dropdown'
                      onSelect={(date) => {
                        setDate(date)
                        setOpen(false)
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time */}
              <div>
                <Label htmlFor='time'>Time Picker Input</Label>
                <div className='relative mt-2'>
                  <Input
                    id='time'
                    type='time'
                    min='09:00'
                    max='18:00'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className='pr-10 [&::-webkit-calendar-picker-indicator]:hidden'
                  />
                  <Icon
                    icon='solar:clock-circle-linear'
                    width='18'
                    height='18'
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none'
                  />
                </div>
              </div>

              {/* Card Input with Icon */}
              <div>
                <Label htmlFor='card'>Card</Label>
                <div className='relative mt-2'>
                  <Icon
                    icon='uim:master-card'
                    width='20'
                    height='20'
                    className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'
                  />
                  <Input
                    id='card'
                    type='text'
                    placeholder='Card number'
                    className='pl-10!'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div className='bg-background md:p-6 p-4 gap-px'>
            <h5 className='card-title'>Textarea Input</h5>
            <div className='mt-6 flex flex-col gap-6'>
              <div>
                <Label htmlFor='comment'>Description</Label>
                <Textarea
                  id='comment'
                  placeholder='Leave a comment...'
                  rows={4}
                  className='mt-2'
                />
              </div>

              <div>
                <Label htmlFor='disabled-comment'>Description</Label>
                <Textarea
                  id='disabled-comment'
                  placeholder='Disabled'
                  disabled
                  rows={4}
                  className='mt-2'
                />
              </div>

              <div>
                <Label htmlFor='error-comment' className='text-red-600'>
                  Description
                </Label>
                <Textarea
                  id='error-comment'
                  placeholder='Leave a comment...'
                  rows={4}
                  className='border-red-600 text-red-600 focus-visible:border-red-600 mt-2'
                />
              </div>
            </div>
          </div>

          {/* Input Colors */}
          <div className='bg-background gap-px md:p-6 p-4'>
            <h5 className='card-title'>Input Colors</h5>
            <div className='mt-6 flex flex-col gap-6'>
              <div>
                <Label htmlFor='warning' className='text-warning'>
                  Warning
                </Label>
                <Input
                  id='warning'
                  placeholder='Warning input'
                  className='mt-2'
                />
              </div>
              <div>
                <Label htmlFor='info' className='text-info'>
                  Info
                </Label>
                <Input
                  id='info'
                  placeholder='Info input'
                  className='mt-2'
                />
              </div>
              <div>
                <Label htmlFor='success' className='text-success'>
                  Success
                </Label>
                <Input
                  id='success'
                  placeholder='Success input'
                  className='mt-2'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='flex flex-col gap-px'>
          {/* Input Group with Icons */}
          <div className='bg-background md:p-6 p-4'>
            <h5 className='card-title'>Input Group</h5>
            <div className='mt-6 flex flex-col gap-6'>
              <div className='relative'>
                <Icon
                  icon='solar:letter-linear'
                  width={18}
                  height={18}
                  className='absolute left-3 top-1/2 -translate-y-1/2'
                />
                <Input
                  type='email'
                  placeholder='name@example.com'
                  className='pl-10!'
                />
              </div>

              <div className='relative'>
                <Icon
                  icon='solar:phone-rounded-linear'
                  width={18}
                  height={18}
                  className='absolute left-3 top-1/2 -translate-y-1/2'
                />
                <Input type='tel' placeholder='+1' className='pl-10!' />
              </div>

              <div className='relative'>
                <Icon
                  icon='solar:global-linear'
                  width={18}
                  height={18}
                  className='absolute left-3 top-1/2 -translate-y-1/2'
                />
                <Input
                  type='text'
                  placeholder='www.example.com'
                  className='pl-10!'
                />
              </div>

              <div className='relative'>
                <Icon
                  icon='solar:link-round-angle-linear'
                  width={18}
                  height={18}
                  className='absolute left-3 top-1/2 -translate-y-1/2'
                />
                <Input
                  type='text'
                  placeholder='www.tailwind-admin.com'
                  className='pl-10!'
                />
              </div>

              {/* Copy input */}
              <div>
                <Label htmlFor='website'>Website</Label>
                <div className='flex gap-2 mt-2'>
                  <Input
                    id='website'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <button
                    onClick={handleCopy}
                    className='px-3 py-1 text-sm rounded-md border border-ld bg-primary/10 dark:bg-primary/10 text-primary hover:bg-gray-200'>
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* File Input */}
          <div className='bg-background md:p-6 p-4'>
            <h5 className='card-title'>File Input</h5>
            <Input type='file' className='mt-6' />
          </div>

          {/* Checkbox */}
          <div className='bg-background md:p-6 p-4'>
            <h5 className='card-title'>Checkbox</h5>
            <div className='flex gap-6 mt-6'>
              <div className='flex items-center gap-2'>
                <Checkbox id='default' />
                <Label htmlFor='default'>Default</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='checked' defaultChecked />
                <Label htmlFor='checked'>Checked</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id='disabled' disabled />
                <Label htmlFor='disabled'>Disabled</Label>
              </div>
            </div>
          </div>

          {/* Radio */}
          <div className='bg-background md:p-6 p-4'>
            <h5 className='card-title'>Radio Buttons</h5>
            <RadioGroup defaultValue='default' className='mt-6 flex gap-6'>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='default' id='default' />
                <Label htmlFor='default'>Default</Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='selected' id='selected' />
                <Label htmlFor='selected'>Selected</Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='disabled' id='disabled' disabled />
                <Label htmlFor='disabled'>Disabled</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Switch */}
          <div className='bg-background md:p-6 p-4 h-full'>
            <h5 className='card-title'>Toggle Switch</h5>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6'>
              <div className='flex items-center gap-2'>
                <Switch checked={switch1} onCheckedChange={setSwitch1} />
                <Label>Toggle me</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Switch checked={switch2} onCheckedChange={setSwitch2} />
                <Label>Toggle me (checked)</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Switch disabled />
                <Label>Disabled</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Switch checked disabled />
                <Label>Disabled (checked)</Label>
              </div>
              <Switch checked={switch3} onCheckedChange={setSwitch3} />
            </div>
          </div>
        </div>
      </div>
    </StyleAwareWrapper>
  )
}

export default Page
