import React from 'react'

export interface navItemProps {
  item: {
    icon: string
    href?: string
    disabled?: boolean
    title?: string
    subtitle?: string
    chip?: string
    chipColor?: string
    variant?: string
    external?: boolean
    id: number | string
  }
}

export interface listItemType {
  component: React.ElementType
  href?: string
  target?: string
  to?: string
}
