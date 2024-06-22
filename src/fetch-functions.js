const userUrl = 'https://jsonplaceholder.typicode.com/users';

export const checkResponseStatus = () => {

  return fetch(userUrl).then(({ status, ok, url }) => ({ status, ok, url }))
    ;
};

export const getUsers = () => {
  return fetch(userUrl).then((userArr) => userArr.json())
};

export const getUserPosts = (userId, maxNumberPosts = 3) => {
  const userPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  return fetch(userPosts)
    .then((postsArr) => postsArr.json())
    .then((dataArr) => dataArr.splice(0, maxNumberPosts))
};

export const createNewUser = (newUserData) => {
  const postNewUser = {
    method: "POST",                      // The type of HTTP request (type of method)
    body: JSON.stringify(newUserData),       // The data to be sent to the API ()
    headers: {
      "Content-Type": "application/json" // The format of the body's data (what type of content it is)
    }
  }
  return fetch(userUrl, postNewUser).then((newUserObj) => newUserObj.json())
}
