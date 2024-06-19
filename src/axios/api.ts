import axios from "axios";
import * as Iinterface from "./interface";
const BASE_URL = "https://challenge-d3v-api.azurewebsites.net/api";

const $instance = axios.create({ baseURL: BASE_URL });

// export const setToken = (token) => {
//     $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearToken = () => {
//   $instance.defaults.headers.common.Authorization = "";
// };

// export const signUp = async ({ endPoint, postParams }) => {
//     const { data } = await $instance.post(endPoint, postParams, {
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     });
//     setToken(data.token);
//     return data;
// };
//
// export const signIn = async ({ endPoint, postParams }) => {
//     const { data } = await $instance.post(endPoint, postParams, {
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     });
//     setToken(data.token);
//     return data;
// };
//
// export const logout = async ({ endPoint }) => {
//     const { data } = await $instance.post(endPoint);
//     return data;
// };

// export const forgotPassword = async ({ endPoint, postParams }) => {
//     const { data } = await $instance.post(endPoint, postParams, {
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     });
//     return data;
// };
//
// export const verifyEmail = async ({ endPoint, postParams, token }) => {
//     const { data } = await $instance.post(endPoint, postParams, {
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             Authorization: token,
//         },
//     });
//     return data;
// };
//
// export const changePassword = async ({ endPoint, postParams, token }) => {
//     const { data } = await $instance.post(endPoint, postParams, {
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             Authorization: token,
//         },
//     });
//     return data;
// };

// ====================== info_query

export const getData = async ({
    endPoint,
    getParams,
}: Iinterface.IGetDataParams): Promise<Iinterface.IDataResponse> => {
    const { data } = await $instance.get(endPoint, {
        params: {
            ...getParams,
        },
    });
    return data;
};
//
//
// export const addData = async ({ endPoint, postData, postParams }) => {
//     const { data } = await $instance.post(endPoint, postData, {
//         params: {
//             ...postParams,
//         },
//     });
//     return data;
// };
//
//
//
// export const editData = async ({ endPoint, putData, editParams }) => {
//     const { data } = await $instance.patch(endPoint, putData, {
//         params: {
//             ...editParams,
//         },
//     });
//     return data;
// };
//
//
//
// export const deleteData = async ({ endPoint, deleteParams }) => {
//     const { data } = await $instance.delete(endPoint, {
//         params: {
//             ...deleteParams,
//         },
//     });
//     return data;
// };

// Login User

export const loginUser = async (fetchData: Iinterface.ILoginData) => {
    try {
        const { data } = await $instance.post("/login/", fetchData);
        return data;
    } catch (error) {
        console.log(error);
    }
};

// Create User

export const createUser = async (fetchData: Iinterface.ISignUpData) => {
    try {
        const { data } = await $instance.post("/users/", fetchData);
        return data;
    } catch (error) {
        console.log(error);
    }
};
