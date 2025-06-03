import React, { ReactElement, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../assets/scss/App.scss";
import Dropdown from "./dropdown";
import Button from "./button";
import Card from "./card";
import * as apiGit from "../api/git";

const TableSearch = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [users, setUsers] = useState<apiGit.userStruct[]>([]);
  const [repos, setRepos] = useState<apiGit.repoStructObj>({});

  useEffect(() => {}, [users, repos, active]);

  const fetchUsers = async () => {
    let newUsers: Array<apiGit.userStruct> = await apiGit.fetchUser(query);
    await setUsers(newUsers);
  };

  const fetchRepos = async (username: string) => {
    let newRepos: apiGit.repoStructObj = await apiGit.fetchRepos(username);
    await setRepos({ ...repos, ...newRepos });
  };

  const onSearch = async () => {
    await fetchUsers();
    setActive(true);
  };

  let listDropdown = users.map((user: apiGit.userStruct) => {
    let listCards: any = [];
    Object.keys(repos).forEach((key) => {
      if (user.username != key) return;
      repos[key].map((repo: apiGit.repoStruct) => {
        listCards.push(
          <Card
            key={repo.id}
            data={{
              name: repo.name,
              desc: repo.desc,
              rating: repo.rating,
            }}
          />
        );
      });
    });

    return (
      <Dropdown key={user.id} name={user.username} onClickDropdown={fetchRepos}>
        {listCards}
      </Dropdown>
    );
  });

  return (
    <>
      <div className="container table-search">
        <div className="table-input">
          <input
            name="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Button
            data={{ name: "Search", type: "primary" }}
            height={50}
            onClick={() => {
              onSearch();
            }}
          />
        </div>
        {active ? (
          <>
            <p style={{ marginTop: "15px", color: "grey" }}>
              Showing user for {query}
            </p>
            {listDropdown}
          </>
        ) : null}
      </div>
    </>
  );
};

export default TableSearch;
