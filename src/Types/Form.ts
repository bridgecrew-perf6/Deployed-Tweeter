export type registrationForm = {
    email: string,
    username: string,
    password1: string,
    password2: string
}

export type loginForm = {
    usernameOrEmail: string,
    password: string 
}

export type settingForm = {
    image_url: string,
    bio: string,
    doj: string,
    first: string,
    last: string,
    dob: null,
    gender: string
}

