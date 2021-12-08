export async function apiService(url, method = "GET", headers = {}) {
    try {
    let res = await fetch(url, { mode: "cors", method, headers });

    if (res.ok) {
        console.log(res);
        return await res.json();
    } else return false;
    } catch (error) {
        console.error(error);
        return false;
    }
}