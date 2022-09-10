import * as axios from "axios";

/* eslint-disable */
const getUsers = async function () {
    const response = await axios({
        method: "get",
        url: 'https://jsonplaceholder.typicode.com/users',
    });

    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];

    let data = response.data;

    return data;
};

const getUserDetail = async function (id) {
    const response = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });

    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];

    let data = response.data;

    return data;
};

const deleteUser = async function (id) {
    const response = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });

    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];

    return response;
};

const addUser = async function (data) {
    const response = await axios(
        {
            method: "post",
            url: 'https://jsonplaceholder.typicode.com/users/',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];

    return response;
};


export const usersService = {
    getUsers,
    getUserDetail,
    deleteUser,
    addUser
};
