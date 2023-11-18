import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

const initialState: InitialStateType = {

    info: {
        picture: '',
        name: '',
        email: '',


        itSupportManager: '',
        department: '',
        organization: '',
        location: '',
    }


}

interface InitialStateType {
    info: userInfo

}

interface userInfo {
    picture: string | undefined | null,
    name: string | undefined | null,
    email: string | undefined | null,

    itSupportManager: string,
    department: string,
    organization: string,
    location: string,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUserInfo(state: InitialStateType, action: PayloadAction<{ infoName: string, str: string }>) {

            switch (action.payload.str) {

                case 'Your location': {
                    state.info.location = action.payload.infoName
                    break
                }

                case 'IT Support Manager': {
                    state.info.itSupportManager = action.payload.infoName
                    break
                }

                case 'Your department': {
                    state.info.department = action.payload.infoName
                    break
                }

                case 'Your organization': {
                    state.info.organization = action.payload.infoName
                    break
                }


                default: break
            }
            console.log(action.payload, current(state))
        },
        changeUserOtherInfoFBFunc(state: InitialStateType, action: PayloadAction<{ name: string | undefined | null, picture: string | undefined | null, email: string | undefined | null }>) {
            state.info.picture = action.payload.picture
            state.info.name = action.payload.name
            state.info.email = action.payload.email

        }
    }
})

export const { changeUserInfo, changeUserOtherInfoFBFunc } = userSlice.actions


export default userSlice.reducer


