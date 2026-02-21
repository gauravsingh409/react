export const getAccessToken = () => {
    return localStorage.getItem('access_token');
}

export const setAccessToken = (token: string) => {
    localStorage.setItem('access_token', token);
}

export const removeAccessToken = () => {
    localStorage.removeItem('access_token');
}

export const refreshToken = () => {
    // Implement token refresh logic here, e.g., call an API endpoint to get a new token
    // and update it using setAccessToken(newToken)
}

export const clear = () => {
    removeAccessToken();
    // Clear any other auth-related data if needed
}

export const tokenService = {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    refresh: refreshToken,
    clear
}
