
import { ContactType } from '@/app/(dashboard-layout)/types/apps/contact'
import { Chance } from 'chance'
import { NextResponse } from 'next/server'

const chance = new Chance()

let ContactList: ContactType[] = [
  {
    id: 1,
    firstname: 'Georgeanna',
    lastname: 'Ramero',
    image: '/images/profile/user-2.png',
    department: 'Sales',
    company: 'Muller Inc',
    phone: '456-485-5623',
    email: 'qq739v47ggn@claimab.com',
    address: '19214 110th Rd, Saint Albans, NY, 1141',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 2,
    firstname: 'Cami',
    lastname: 'Macha',
    image: '/images/profile/user-3.png',
    department: 'Support',
    company: 'Zboncak LLC',
    phone: '999-895-9652',
    email: 'Camisad@claimab.com',
    address: '76 Hamilton Ave, Yonkers, NY, 10705',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 3,
    firstname: 'Alda',
    lastname: 'Ziemer',
    image: '/images/profile/user-4.png',
    department: 'Engineering',
    company: 'Lehner-Jacobson',
    phone: '789-854-8950',
    email: 'Ziemer234@claimab.com',
    address: '930 Fruit Ave, Farrell, PA, 16121',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },
  {
    id: 4,
    firstname: 'Luciano',
    lastname: 'Macpherson',
    image: '/images/profile/user-5.png',
    department: 'Support',
    company: 'Champlin',
    phone: '452-652-5230',
    email: 'Macpherson34@claimab.com',
    address: '19103 Stefani Ave, Cerritos, CA, 90703',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
  {
    id: 5,
    firstname: 'Dalton',
    lastname: 'Paden',
    image: '/images/profile/user-6.png',
    department: 'Engineering',
    company: 'Balistreri',
    phone: '985-985-7850',
    email: 'Dalton321@claimab.com',
    address: '3059 Edgewood Park Ct, Commerce Township',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 6,
    firstname: 'Juan',
    lastname: 'Granado',
    image: '/images/profile/user-7.png',
    department: 'Support',
    company: 'Bernier-Ankunding',
    phone: '230-541-5231',
    email: 'Granado567@claimab.com',
    address: '1330 N Douglas Ave, Arlington Heights',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: true,
  },
  {
    id: 7,
    firstname: 'Revan',
    lastname: 'Allen',
    image: '/images/profile/user-8.png',
    department: 'Support',
    company: 'Rosenbaum Inc',
    phone: '478-582-6520',
    email: 'Allen326@claimab.com',
    address: '180 Topp Ln, Tupelo, MS',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 8,
    firstname: 'Juley',
    lastname: 'Huseman',
    image: '/images/profile/user-9.png',
    department: 'Sales',
    company: 'Smith-Romaguera',
    phone: '123-652-2301',
    email: 'Huseman458@claimab.com',
    address: '33 Caraway Rd, Reisterstown, MD',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: true,
  },
  {
    id: 9,
    firstname: 'Bridgette',
    lastname: 'Phung',
    image: '/images/profile/user-10.png',
    department: 'Engineering',
    company: 'Corwin-Kassulke',
    phone: '652-452-6521',
    email: 'Bridgette890@claimab.com',
    address: '#RR, Bruceton Mills, WV',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
  {
    id: 10,
    firstname: 'Ernest',
    lastname: 'Cousins',
    image: '/images/profile/user-2.png',
    department: 'Support',
    company: 'Homenick-Hartmann',
    phone: '785-985-6541',
    email: 'Ernest6543@claimab.com',
    address: 'Michael I. Days 3756 Preston Street Wichita',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 11,
    firstname: 'Nicolette',
    lastname: 'Trapani',
    image: '/images/profile/user-3.png',
    department: 'Engineering',
    company: 'Gleason',
    phone: '652-632-6520',
    email: 'Nicoletteesdasd4@claimab.com',
    address: 'Carol J. Stephens 1635 Franklin Street Montgomery',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 12,
    firstname: 'Virginia',
    lastname: 'Bourdeau',
    image: '/images/profile/user-4.png',
    department: 'Support',
    company: 'McKenzie and Sons',
    phone: '125-985-3210',
    email: 'Bourdeauerwe@claimab.com',
    address: 'Donald M. Palmer 2595 Pearlman Avenue',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },
  {
    id: 13,
    firstname: 'Janit',
    lastname: 'Vogl',
    image: '/images/profile/user-5.png',
    department: 'Sales',
    company: 'Erdman-Moen',
    phone: '541-521-6320',
    email: 'Janitafdaa@claimab.com',
    address: 'Micheal R. Porterfield 508 Virginia Street',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 14,
    firstname: 'Jeneva',
    lastname: 'Bridgeforth',
    image: '/images/profile/user-10.png',
    department: 'Engineering',
    company: 'Fay LLC',
    phone: '975-895-5240',
    email: 'Bridgeforth564@claimab.com',
    address: 'Nathan K. Flores 1516 Holt Street West Palm',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 15,
    firstname: 'Roselia',
    lastname: 'Principe',
    image: '/images/profile/user-4.png',
    department: 'Sales',
    company: 'Bode-Oberbrunner',
    phone: '874-546-6521',
    email: 'Principe326@claimab.com',
    address: '2915 Auburn Creek LnLeague City',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: true,
    deleted: false,
  },
  {
    id: 16,
    firstname: 'Elvir',
    lastname: 'Hylton',
    image: '/images/profile/user-7.png',
    department: 'Support',
    company: 'Pagac Group',
    phone: '652-542-5200',
    email: 'Elviraoknsss@claimab.com',
    address: '2725 Cottage Rd Alpine',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 17,
    firstname: 'Maragaret',
    lastname: 'Pecor',
    image: '/images/profile/user-10.png',
    department: 'Sales',
    company: 'Predovic and Sons',
    phone: '326-984-1200',
    email: 'Maragaret4352@mediafire.com',
    address: '307 Hardy St Aberdeen',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 18,
    firstname: 'Willena',
    lastname: 'Sugrue',
    image: '/images/profile/user-2.png',
    department: 'Support',
    company: 'Graham Group',
    phone: '265-632-4521',
    email: 'Willena75637@claimab.com',
    address: '15919 Golf Club Dr Crosby',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 19,
    firstname: 'Euran',
    lastname: 'Solley',
    image: '/images/profile/user-3.png',
    department: 'Sales',
    company: 'Toy-Ryan',
    phone: '645-647-4800',
    email: 'Solley6472@claimab.com',
    address: 'Po Box 144 Rhome',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 20,
    firstname: 'Velva',
    lastname: 'Brockett',
    image: '/images/profile/user-4.png',
    department: 'Support',
    company: 'Walsh Ltd',
    phone: '654-985-6520',
    email: 'Brocketterewgdb@claimab.com',
    address: '34 Fairview Ln Palm Coast',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
  {
    id: 21,
    firstname: 'Anay',
    lastname: 'Snapp',
    image: '/images/profile/user-5.png',
    department: 'Support',
    company: 'Romaguera Inc',
    phone: '456-652-3210',
    email: 'Snapp76848@claimab.com',
    address: '17919 Barney Dr Accokeek',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: false,
  },
  {
    id: 22,
    firstname: 'Latoria',
    lastname: 'Penaloza',
    image: '/images/profile/user-6.png',
    department: 'Engineering',
    company: 'Leuschke',
    phone: '459-985-4520',
    email: 'Penaloza3546@claimab.com',
    address: '14 Huntington Dr Greenbrier',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: true,
  },
  {
    id: 23,
    firstname: 'Tamik',
    lastname: 'Inman',
    image: '/images/profile/user-7.png',
    department: 'Sales',
    company: 'Schumm',
    phone: '645-978-4150',
    email: 'Tamikadfdf45@claimab.com',
    address: '1341 Mentionville Rd Darien',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: false,
    deleted: true,
  },
  {
    id: 24,
    firstname: 'Erich',
    lastname: 'Aragon',
    image: '/images/profile/user-8.png',
    department: 'Business Development',
    company: 'Brakus',
    phone: '450-980-6520',
    email: 'Aragondfdf4567@claimab.com',
    address: '13 Pent Rd Branford',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 25,
    firstname: 'Johanna',
    lastname: 'Randel',
    image: '/images/profile/user-9.png',
    department: 'Sales',
    company: 'Goyette',
    phone: '120-320-4520',
    email: 'Johanna456@claimab.com',
    address: '5791 S Staghorn Cholla Ct Apache Junction',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: true,
  },
  {
    id: 26,
    firstname: 'Victorina',
    lastname: 'Heinze',
    image: '/images/profile/user-10.png',
    department: 'Business Development',
    company: 'Fritsch',
    phone: '452-521-1230',
    email: 'Victorina4545@claimab.com',
    address: '69 El Molino Dr Clayton',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: true,
  },
  {
    id: 27,
    firstname: 'Kimon',
    lastname: 'Light',
    image: '/images/profile/user-8.png',
    department: 'Sales',
    company: 'Langosh',
    phone: '652-452-1230',
    email: 'Kileydfdfd45@claimab.com',
    address: '215 Waterfront Ct Noblesville',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: true,
    deleted: false,
  },
  {
    id: 28,
    firstname: 'Sanford',
    lastname: 'Delorenzo',
    image: '/images/profile/user-3.png',
    department: 'Engineering',
    company: 'Huels',
    phone: '963-652-1230',
    email: 'Delorenzo3456@claimab.com',
    address: '11212 Amber Rd Manistee',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: true,
    starred: true,
    deleted: false,
  },
  {
    id: 290,
    firstname: 'Hansi',
    lastname: 'Strebel',
    image: '/images/profile/user-4.png',
    department: 'Sales',
    company: 'Kohler',
    phone: '546-654-1230',
    email: 'Strebel345@claimab.com',
    address: '2009 W Azalea Ave Baker',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: false,
    deleted: false,
  },
  {
    id: 30,
    firstname: 'Roger',
    lastname: 'Trinidad',
    image: '/images/profile/user-5.png',
    department: 'Sales',
    company: 'Kling-Hintz',
    phone: '123-456-7890',
    email: '3mcrz8gmymd@claimab.com',
    address: '203 Dawn Dr, Mount Holly, NC, 28120',
    notes: chance.paragraph({ sentences: 2 }),
    frequentlycontacted: false,
    starred: true,
    deleted: true,
  },
]

// Reset Contacts
const resetContacts = [...ContactList]

export async function GET(req: Request) {
  const isBrowserRefreshed = req.headers.get('browserrefreshed')
  try {
    if (isBrowserRefreshed === 'false') {
      return NextResponse.json({
        status: 200,
        msg: 'Success',
        data: ContactList,
      })
    } else {
      ContactList = resetContacts
      return NextResponse.json({
        status: 200,
        msg: 'Success',
        data: resetContacts,
      })
    }
  } catch (error: unknown) {
    return NextResponse.json({
      status: 400,
      msg: 'Internal server error',
      error,
    })
  }
}

export async function POST(req: Request) {
  try {
    const newContact = (await req.json()) as ContactType
    newContact.id = ContactList.length + 1
    ContactList.push(newContact)
    return NextResponse.json({ status: 200, msg: 'success', data: ContactList })
  } catch (error: unknown) {
    return NextResponse.json({ status: 400, msg: 'failed', data: error })
  }
}

export async function DELETE(req: Request) {
  try {
    const { data } = (await req.json()) as {
      data: { contactId: number | string }
    }
    const contactId = data.contactId
    const contactIndex = ContactList.findIndex(
      (contact) => contact.id === contactId
    )
    if (contactIndex !== -1) {
      ContactList = ContactList.filter((contact) => contact.id !== contactId)
      return NextResponse.json({
        status: 200,
        msg: 'success',
        data: ContactList,
      })
    } else {
      return NextResponse.json({ status: 404, msg: 'Contact not found' })
    }
  } catch (error: unknown) {
    return NextResponse.json({ status: 400, msg: 'failed', data: error })
  }
}

export async function PUT(req: Request) {
  try {
    const updatedContactData = (await req.json()) as ContactType
    const updatedContactIndex = ContactList.findIndex(
      (contact) => contact.id === updatedContactData.id
    )
    if (updatedContactIndex !== -1) {
      ContactList[updatedContactIndex] = {
        ...ContactList[updatedContactIndex],
        ...updatedContactData,
      }
      return NextResponse.json({
        status: 200,
        msg: 'success',
        data: ContactList,
      })
    } else {
      return NextResponse.json({ status: 404, msg: 'Contact not found' })
    }
  } catch (error: unknown) {
    return NextResponse.json({ status: 400, msg: 'failed', data: error })
  }
}
