export interface order {
     itemName: string
     unitPrice: number
     units: number
     unitTotalPrice: number
}

export interface InvoiceList {
     id: number
     billFrom: string
     billFromEmail: string
     billFromAddress: string
     billFromPhone: number
     billFromFax: number
     billTo: string
     billToEmail: string
     billToAddress: string
     billToPhone: number
     billToFax: number
     orders: order[]
     orderDate: Date
     totalCost: number
     vat: number
     grandTotal: number
     status: string
     completed: boolean
     isSelected: boolean
     createdDate: string | Date
     dueDate: string | Date
}
