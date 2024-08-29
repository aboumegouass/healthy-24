let token: string | null = null;
export async function setToken(newToken: string | null) {
    token = newToken;
    if (token !== null) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}

export async function removeToken() {
    localStorage.removeItem("token");
}

export function getToken() {
    if (token !== null) {
        return token;
    }
    token = localStorage.getItem("token");
    return token;
}
