export const hrmsSetLocal = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export const hrmsGetLocal = (key) => {
    let value = sessionStorage.getItem(key)
    if (value !== undefined) {
        return JSON.parse(value)
    } else {
        return null
    }
}

export const hrmsClearLocal = (key) => {
    sessionStorage.removeItem(key);
}

export const hrmsStorageKey = {
    username: 'username',
    password: 'password'
}