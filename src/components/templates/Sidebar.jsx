import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "src/services/admin";
import styles from "./Sidebar.module.css"
function Sidebar() {
  const { data } = useQuery(["get-categories"], getCategory);

  return (
    <div className={styles.sidebar}>
      <h4>دسته ها</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
