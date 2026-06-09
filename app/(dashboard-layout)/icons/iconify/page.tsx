import { Metadata } from 'next'


import BreadcrumbComp from '../../layout/shared/breadcrumb/breadcrumb-comp'
import IconifyIcon from '@/app/components/icons/iconify-icons'
import StyleAwareWrapper from '@/app/components/shared/StyleAwareWrapper'

export const metadata: Metadata = {
  title: 'Iconify Tabler Icons',
}

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Iconify Icons',
  },
]

const page = () => {
  return (
    <StyleAwareWrapper
      lyraClassName="flex flex-col p-px gap-px bg-border"
    >
      <BreadcrumbComp title='Iconify Icons' items={BCrumb} />
      <IconifyIcon />
    </StyleAwareWrapper>
  )
}

export default page
