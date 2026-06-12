

import React, { useMemo, useState } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  CellContext,
} from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { ColumnDef, SortingState } from '@tanstack/react-table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'
import {
  ArrowUp,
  ArrowDown,
  ChevronsUpDown,
  Trash2,
  Pencil,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const badgeColors = [
  'bg-blue-100 text-blue-700',
  'bg-green-100 text-green-700',
  'bg-yellow-100 text-yellow-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700',
  'bg-indigo-100 text-indigo-700',
  'bg-teal-100 text-teal-700',
  'bg-orange-100 text-orange-700',
]

export function getColorForValue(value: string) {
  const index =
    Math.abs(
      value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % badgeColors.length
  return badgeColors[index]
}

export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

interface DynamicTableProps<T> {
  data?: T[]
}

const DataTable = <T extends Record<string, unknown>>({
  data = [],
}: DynamicTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])

  const renderValue = (val: unknown): React.ReactNode => {
    if (val === null || val === undefined) return '-';
    if (typeof val === 'object') return JSON.stringify(val);
    return String(val);
  };

  const paginationOptions = useMemo(() => {
    const sizes = [5, 10, 20, 50]
    return sizes.filter((size) => size <= data.length)
  }, [data.length])

  const columns = useMemo<ColumnDef<T, unknown>[]>(() => {
    if (!data.length) return []

    const keys = Object.keys(data[0]).filter((key) => {
      const val = data[0][key]
      return !Array.isArray(val) && key !== 'avatar' && key !== 'statuscolor'
    })

    const baseColumns = keys.map((col) => ({
      accessorKey: col as keyof T & string,
      header: toTitleCase(col.replace(/([A-Z])/g, ' $1').trim()),
      cell: (info: CellContext<T, unknown>) => {
        const value = info.getValue()

        if (
          [
            'status',
            'availability',
            'gender',
            'category',
            'genre',
            'position',
          ].some((key) => col.toLowerCase().includes(key))
        ) {
          const rowStatusColor = (info.row.original as Record<string, unknown>).statuscolor as string | undefined
          if (rowStatusColor) {
            return (
              <Badge
                className='px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap'
                style={{
                  backgroundColor: `color-mix(in oklch, var(--color-${rowStatusColor}) 15%, transparent)`,
                  color: `var(--color-${rowStatusColor})`,
                }}>
                {renderValue(value)}
              </Badge>
            )
          }
          const cls = getColorForValue(String(value))
          return (
            <Badge
              className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${cls}`}>
              {renderValue(value)}
            </Badge>
          )
        }

        if (col.toLowerCase().includes('rating')) {
          const ratingValue = Number(value) || 0
          const maxRating = 5
          const fullStars = Math.floor(ratingValue)
          const halfStar = ratingValue % 1 >= 0.5
          const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0)

          return (
            <div className='flex items-center gap-0.5'>
              {[...Array(fullStars)].map((_, i) => (
                <Icon
                  key={`full-${i}`}
                  icon='mdi:star'
                  className='text-[#f3d55b] w-6 h-6 shrink-0'
                />
              ))}
              {halfStar && (
                <Icon
                  icon='mdi:star-half-full'
                  className='text-[#f3d55b] w-6 h-6 shrink-0'
                />
              )}
              {[...Array(emptyStars)].map((_, i) => (
                <Icon
                  key={`empty-${i}`}
                  icon='mdi:star-outline'
                  className='text-[#f3d55b] w-6 h-6 shrink-0'
                />
              ))}
            </div>
          )
        }

        if (typeof value === 'boolean') {
          return value ? (
            <Badge className='px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700'>
              Inactive
            </Badge>
          ) : (
            <Badge className='px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700'>
              Active
            </Badge>
          )
        }

        if (col.toLowerCase().includes('id')) {
          return (
            <span className='text-gray-900 dark:text-white font-medium max-w-50 truncate whitespace-nowrap'>
              {renderValue(value)}
            </span>
          )
        }

        if (typeof value === 'object' && value !== null) {
          const typedValue = value as Record<string, unknown>
          const {
            image,
            imageUrl,
            thumbnailUrl,
            thumbnail,
            image_url,
            avatar,
            qrCode,
            profileImage,
            icon,
            ...rest
          } = typedValue
          const keys = Object.keys(rest)

          return (
            <div className='flex items-center gap-2'>
              {image ||
                imageUrl ||
                thumbnailUrl ||
                thumbnail ||
                image_url ||
                avatar ||
                qrCode ||
                profileImage ||
                icon ? (
                <img
                  src={
                    (image as string) ??
                    (imageUrl as string) ??
                    (thumbnailUrl as string) ??
                    (thumbnail as string) ??
                    (image_url as string) ??
                    (avatar as string) ??
                    (qrCode as string) ??
                    (profileImage as string) ??
                    (icon as string)
                  }
                  width={36}
                  height={36}
                  className='rounded-full'
                />
              ) : (
                <Badge className='size-10 flex items-center justify-center rounded-full shrink-0'>
                  {keys[0]
                    ? String(rest[keys[0]])[0]?.toUpperCase() ?? '?'
                    : '?'}
                </Badge>
              )}
              <div className='flex flex-col'>
                {keys.map((k) => {
                  const val = rest[k]
                  let displayValue

                  const isTimestamp = (v: unknown) => {
                    if (typeof v !== 'string') return false
                    return /^\d{4}-\d{2}-\d{2}(T.*)?$/.test(v)
                  }
                  if (isTimestamp(val)) return null

                  if (typeof val === 'object' && val !== null) {
                    if (
                      typeof val === 'object' &&
                      val !== null &&
                      'lat' in val &&
                      'lng' in val
                    ) {
                      const geo = val as { lat: unknown; lng: unknown }
                      displayValue = `${String(geo.lat)}, ${String(geo.lng)}`
                    } else {
                      displayValue = JSON.stringify(val)
                    }
                  } else {
                    displayValue =
                      val !== null && val !== undefined ? String(val) : '-'
                  }

                  return (
                    <span
                      key={k}
                      className={
                        k === 'name'
                          ? 'text-gray-900 dark:text-white font-semibold max-w-50 truncate whitespace-nowrap pe-6'
                          : 'text-sm text-gray-500 dark:text-gray-400 max-w-50 truncate whitespace-nowrap pe-6'
                      }>
                      {renderValue(displayValue)}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        }

        if (typeof value === 'string') {
          if (
            value?.includes('png') ||
            value?.includes('jpg') ||
            value?.includes('jpeg') ||
            value?.includes('svg') ||
            col.toLowerCase().includes('thumbnail') ||
            col.toLowerCase().includes('image')
          ) {
            return <img src={value} className='size-10 rounded-md' />
          }
        }

        if (
          ['user', 'product', 'fullname', 'name', 'author'].some((key) =>
            col.toLowerCase().includes(key)
          )
        ) {
          const avatar = (info.row.original as Record<string, unknown>).avatar as string | undefined
          return (
            <div className='flex items-center gap-2'>
              {avatar ? (
                <img
                  src={avatar}
                  alt={String(value)}
                  width={36}
                  height={36}
                  className='size-9 rounded-full object-cover shrink-0'
                />
              ) : (
                <Badge
                  className={`size-9 flex items-center justify-center rounded-full shrink-0 ${getColorForValue(String(value))}`}>
                  {value ? String(value)[0]?.toUpperCase() : '?'}
                </Badge>
              )}
              <span className='text-gray-900 dark:text-white font-semibold max-w-50 truncate whitespace-nowrap'>
                {renderValue(value)}
              </span>
            </div>
          )
        }

        return (
          <span className='text-gray-900 dark:text-white font-medium max-w-50 truncate block '>
            {renderValue(value)}
          </span>
        )
      },
      enableSorting: true,
      enableGlobalFilter: true,
    }))

    const actionColumn: ColumnDef<T, unknown> = {
      id: 'action',
      header: 'Action',
      enableSorting: false,
      cell: () => {
        return (
          <div className='flex items-center gap-2'>
            <Button
              className='bg-muted! rounded-md'>
              <Pencil className='size-4 text-primary' />
            </Button>
            <Button
              className='bg-destructive/10! rounded-md'>
              <Trash2 className='size-4 text-destructive' />
            </Button>
          </div>
        )
      },
    }

    return [...baseColumns, actionColumn]
  }, [data])

  // React Table Setup
  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    globalFilterFn: 'includesString',
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: paginationOptions[0] || 5 } },
  })

  // CSV Download
  const handleDownload = () => {
    if (!data.length) return

    const headers = columns.map((col) => String(col.header))
    const rows = data.map((item) =>
      columns.map((col) => {
        const column = col as unknown as { accessorKey?: string }
        const accessorKey = column.accessorKey
        const value = accessorKey ? item[accessorKey] : ''
        if (Array.isArray(value)) return `"[array]"`
        return `"${String(value ?? '').replace(/"/g, '""')}"`
      })
    )

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'table-data.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card>
      <div>
        {data?.length === 0 ? (
          <p className='text-center py-8 text-gray-500'>No data available.</p>
        ) : (
          <>
            {/* Search + Download */}
            <CardHeader className='pb-4'>
              <div className='pt-0 flex items-center justify-between flex-wrap gap-4'>
                <CardTitle>
                  <h3 className='text-xl font-semibold'></h3>
                    Employee Data Table
                  
                </CardTitle>
                <div className='flex items-center gap-2 flex-wrap'>
                  <Input
                    type='text'
                    className='max-w-96 lg:min-w-96 min-w-full placeholder:text-gray-400 dark:placeholder:text-white/20'
                    value={globalFilter ?? ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder='Search your relevant items...'
                  />
                  <Button
                    onClick={handleDownload}
                    className='p-2 px-4 rounded-md '>
                    <Icon
                      icon='material-symbols:download-rounded'
                      width={24}
                      height={24}
                    />
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Table */}
            <CardContent>
              <div className='overflow-x-auto border rounded-md border-ld'>
                <Table>
                  <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <TableRow key={headerGroup.id} className=''>
                        {headerGroup.headers.map((header) => (
                          <TableHead
                            key={header.id}
                            className='cursor-pointer select-none min-w-42 px-0'>
                            {header.isPlaceholder ? null : (
                              <Button variant={"ghost"}
                                className='flex items-center gap-1 px-4 bg-transparent hover:bg-transparent text-foreground font-semibold'
                                onClick={header.column.getToggleSortingHandler()}>
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {{
                                  asc: <ArrowUp className='w-4 h-4 inline' />,
                                  desc: <ArrowDown className='w-4 h-4 inline' />,
                                }[header.column.getIsSorted() as string] ??
                                  (header.column.id !== 'action' ? (
                                    <ChevronsUpDown className='w-2 h-2 inline' />
                                  ) : null)}
                              </Button>
                            )}
                          </TableHead>
                        ))}
                      </TableRow>
                    ))}
                  </TableHeader>

                  <TableBody>
                    {table.getRowModel().rows.length > 0 ? (
                      table.getRowModel().rows.map((row) => (
                        <TableRow
                          key={row.id}
                          className='hover:bg-primary/10 transition-colors'>
                          {row.getVisibleCells().map((cell) => (
                            <TableCell
                              key={cell.id}
                              className='text-gray-700 dark:text-white/70'>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={columns.length}
                          className='text-center p-6 text-gray-500 dark:text-white/70 font-medium'>
                          No results found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>

            {/* Pagination Controls */}
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4 p-4'>
              <div className='flex gap-2'>
                <Button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  variant={'secondary'}>
                  Previous
                </Button>
                <Button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}>
                  Next
                </Button>
              </div>

              <div className='text-forest-black dark:text-white/90 font-medium text-base'>
                Page {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </div>

              <div className='flex items-center gap-2'>
                <Label
                  htmlFor='pageSize'
                  className='mr-0 text-forest-black dark:text-white/90 text-base font-medium whitespace-nowrap min-w-32'>
                  Rows per page:
                </Label>
                <Select
                  value={String(table.getState().pagination.pageSize)}
                  onValueChange={(value) => table.setPageSize(Number(value))}>
                  <SelectTrigger className='w-18! cursor-pointer'>
                    <SelectValue placeholder='Page size' />
                  </SelectTrigger>
                  <SelectContent>
                    {paginationOptions.map((size) => (
                      <SelectItem key={size} value={String(size)}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  )
}

export default DataTable
