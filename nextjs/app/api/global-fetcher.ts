// SWR fetcher function

const getFetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: { browserrefreshed: 'false' },
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to fetch the data')
    }
    return res.json()
  })

const postFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to post data')
    }
    return res.json()
  })

const putFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to updated data')
    }
    return res.json()
  })

const patchFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to updated data')
    }
    return res.json()
  })

const deleteFetcher = (url: string, arg: unknown) =>
  fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Failed to delete data')
    }
    return res.json()
  })

export { getFetcher, postFetcher, putFetcher, deleteFetcher, patchFetcher }
