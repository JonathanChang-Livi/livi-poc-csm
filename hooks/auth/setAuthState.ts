import { setCookie } from "cookies-next";

const setAuthState = (value: string) => setCookie('auth-token', value)

export default setAuthState