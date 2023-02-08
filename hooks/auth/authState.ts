import { getCookie } from "cookies-next";

const authState = getCookie('auth-token')

export default authState