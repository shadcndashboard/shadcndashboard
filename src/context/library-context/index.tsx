
import { useLocation } from 'react-router'
import { createContext, useEffect, useState } from 'react'

type LibraryContextType = {
  selectedLibrary: string
  setSelectedLibrary: React.Dispatch<React.SetStateAction<string>>
}


export const LibraryContext = createContext<LibraryContextType>({
  selectedLibrary: 'flowbite',
  setSelectedLibrary: () => { },
})

const libraries = ['flowbite', 'shadcn', 'headlessui']

export const LibraryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const location = useLocation()
  const [selectedLibrary, setSelectedLibrary] = useState('flowbite')

  useEffect(() => {
    const matchedLibrary = libraries.find((lib) =>
      location.pathname.includes(`/${lib}/`)
    )
    if (matchedLibrary) {
      setSelectedLibrary(matchedLibrary)
    }
  }, [location.pathname])

  return (
    <LibraryContext.Provider value={{ selectedLibrary, setSelectedLibrary }}>
      {children}
    </LibraryContext.Provider>
  )
}
