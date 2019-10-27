
export const getLS = (key) => {
  return localStorage.getItem(key)
}

export const setLS = (key, value) => {
  return localStorage.setItem(key, value)
}