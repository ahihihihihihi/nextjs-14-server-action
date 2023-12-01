'use server'

export const handleLogin = async (preState: any, formData: FormData) => {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // console.log(">>> check formData: username ", formData.get('username'))
    // console.log(">>> check formData: password ", formData.get('password'))
    const res = await fetch(
        "http://localhost:8000/api/v1/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password')
            })
        })
    return await res.json();
}

export const handleLoginAntd = async (formData: any) => {
    console.log(">>> check formData: ", formData)
    await new Promise(resolve => setTimeout(resolve, 1000));
    const res = await fetch(
        "http://localhost:8000/api/v1/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        })
    return await res.json();
}


