export function isLogin() {
    const userInfo = localStorage.getItem("user")
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