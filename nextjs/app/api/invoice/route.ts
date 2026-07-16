

import { InvoiceList } from '@/app/(dashboard-layout)/types/apps/invoice'
import { NextResponse } from 'next/server'

let invoceLists: InvoiceList[] = [
    {
        id: 101,
        billFrom: 'PineappleInc.',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'Redq Inc.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date(),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Paid',
        createdDate: new Date('2025-04-01'),
        dueDate: new Date('2025-04-05'),
        completed: false,
        isSelected: false,
    },
    {
        id: 102,
        billFrom: 'Pineapple.',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'ME Inc.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date(),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Overdue',
        createdDate: new Date('2025-04-02'),
        dueDate: new Date('2025-04-07'),
        completed: false,
        isSelected: false,
    },
    {
        id: 103,
        billFrom: 'Incorporation.',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'Redirwed.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date(),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Pending',
        createdDate: new Date('2025-04-03'),
        dueDate: new Date('2025-04-08'),
        completed: false,
        isSelected: false,
    },
    {
        id: 104,
        billFrom: 'PineappleTimes.',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'RFc.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date(),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Paid',
        createdDate: new Date('2025-04-04'),
        dueDate: new Date('2025-04-09'),
        completed: false,
        isSelected: false,
    },
    {
        id: 105,
        billFrom: 'FortuneCreation',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'Soft solution.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date('2020-10-15'),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Overdue',
        createdDate: new Date('2025-04-05'),
        dueDate: new Date('2025-04-10'),
        completed: false,
        isSelected: false,
    },
    {
        id: 106,
        billFrom: 'PineappleTimes.',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'RFc.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date(),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Draft',
        createdDate: new Date('2025-04-06'),
        dueDate: new Date('2025-04-11'),
        completed: false,
        isSelected: false,
    },
    {
        id: 107,
        billFrom: 'FortuneCreation',
        billFromEmail: 'first@xabz.com',
        billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
        billFromPhone: 979796786,
        billFromFax: 13,
        billTo: 'Soft solution.',
        billToEmail: 'toFirst@agth.com',
        billToAddress: 'Godrej garden city,Ahmedabad.',
        billToPhone: 757575233,
        billToFax: 76,
        orders: [
            {
                itemName: 'Courge',
                unitPrice: 10,
                units: 9,
                unitTotalPrice: 90,
            },
        ],
        orderDate: new Date('2020-10-15'),
        totalCost: 90,
        vat: 9,
        grandTotal: 99,
        status: 'Overdue',
        createdDate: new Date('2025-04-07'),
        dueDate: new Date('2025-04-12'),
        completed: false,
        isSelected: false,
    },
]

// Reset InvoiceList
const resetInvoiceList = [...invoceLists]

// Endpoint to get all invoice
export async function GET(req: Request) {
    let isBrowserRefreshed = req.headers.get('browserrefreshed')
    try {
        if (isBrowserRefreshed === 'false') {
            return NextResponse.json({
                status: 200,
                msg: 'Success',
                data: invoceLists,
            })
        } else {
            invoceLists = resetInvoiceList
            return NextResponse.json({
                status: 200,
                msg: 'Success',
                data: resetInvoiceList,
            })
        }
    } catch (error) {
        return NextResponse.json({
            status: 400,
            msg: 'Internal server error',
            error,
        })
    }
}

// Endpoint to delete an invoice
export async function DELETE(req: Request) {
    try {
        const { invoiceId } = await req.json()
        const invoiceIndex = invoceLists.findIndex(
            (invoice) => invoice.id === invoiceId
        )
        if (invoiceIndex !== -1) {
            const remainingInvoice = invoceLists.filter(
                (invoice) => invoice.id !== invoiceId
            )
            invoceLists = remainingInvoice
            return NextResponse.json({
                status: 200,
                msg: 'success',
                data: invoceLists,
            })
        } else {
            return NextResponse.json({ status: 400, msg: 'invoice not found' })
        }
    } catch (error) {
        return NextResponse.json({
            status: 400,
            msg: 'Internal server error',
            error,
        })
    }
}

const getNextId = () => {
    const maxId = Math.max(...invoceLists.map((invoice) => invoice.id))
    return maxId + 1
}

// Endpoint to add an invoice
export async function POST(req: Request) {
    try {
        const newInvoice = await req.json()
        newInvoice.id = getNextId()
        invoceLists.push(newInvoice)
        return NextResponse.json({ status: 200, msg: 'success', data: invoceLists })
    } catch (error) {
        return NextResponse.json({
            status: 400,
            msg: 'Internal server error',
            error,
        })
    }
}

// Endpoint to update an invoice
export async function PUT(req: Request) {
    try {
        const updatedInvoice = await req.json()
        const invoiceIndex = invoceLists.findIndex(
            (invoice) => invoice.id === updatedInvoice.id
        )

        if (invoiceIndex !== -1) {
            invoceLists[invoiceIndex] = { ...updatedInvoice }
            return NextResponse.json({
                status: 200,
                msg: 'success',
                data: invoceLists,
            })
        } else {
            return NextResponse.json({ status: 400, msg: 'Invoice not found' })
        }
    } catch (error) {
        return NextResponse.json({
            status: 400,
            msg: 'Internal server error',
            error,
        })
    }
}
