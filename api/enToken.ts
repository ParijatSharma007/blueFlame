let accessToken : null|string|undefined = undefined

export const getAccessToken = () => {
    return accessToken
}

export const setAccessToken = (token : string) => {
    accessToken = token
}