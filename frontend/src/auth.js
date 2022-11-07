export function isLogin() {
    const userInfo = localStorage.getItem("access_token")
    if (userInfo) {
        return true
    } else {
        return false
    }
}

const auth = {
    isLogin
};

export default auth