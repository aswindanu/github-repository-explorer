export interface userStruct {
  id: number;
  username: string;
}

export interface repoStruct {
  id: number;
  name: string;
  desc: string;
  rating: number;
}

export interface repoStructObj {
  [key: string]: Array<repoStruct>;
}

export const fetchUser = async (query: string) => {
  let newUsers: Array<userStruct> = [];
  await fetch(process.env.REACT_APP_URL + "/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((res) => {
      console.log("users", res);
      res.map((item: any) => {
        if (!item.login.includes(query)) return;
        newUsers.push({
          id: item.id,
          username: item.login,
        });
      });
    })
    .catch((error) => {});
  return newUsers;
};

export const fetchRepos = async (username: string) => {
  let newRepos: repoStructObj = {};
  await fetch(process.env.REACT_APP_URL + `/users/${username}/repos`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((res) => {
      console.log("repos", res);
      res.map((item: any) => {
        if (newRepos[username])
          newRepos[username].push({
            id: item.id,
            name: item.name,
            desc: item.description,
            rating: item.stargazers_count,
          });
        else {
          newRepos[username] = [
            {
              id: item.id,
              name: item.name,
              desc: item.description,
              rating: item.stargazers_count,
            },
          ];
        }
      });
    })
    .catch((error) => {});
  return newRepos;
};
