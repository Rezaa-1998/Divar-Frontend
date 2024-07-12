import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "src/components/modules/Loader";
import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";
import { getAllPosts } from "src/services/user";

function HomePage() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  const style = { display: "flex" };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar />
          <Main posts={data} />
        </div>
      )}
    </>
  );
}

export default HomePage;
