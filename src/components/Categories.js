import React, { Component } from "react";
import styles from "../css/Categories.module.css";
export class Categories extends Component {
  render() {
    return (
      <div
        className="flex justify-between items-center pl-4 pr-1 mx-9 mt-6"
        style={{
          background:
            "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
          boxShadow: "0 0 3px rgba(0, 0, 0, 0.4)",
        }}
      >
        <ul className="flex items-center gap-10 py-1.5 text-[#e5e5e5] text-[13px] leading-[34px]">
          <li className="font-bold">您的商店</li>
          <li>新鲜推荐</li>
          <li>类别</li>
          <li>点数商店</li>
          <li>新闻</li>
          <li>实验室</li>
        </ul>
        <div>
          <input
            placeholder="搜索"
            className={styles.input}
            name="text"
            type="text"
          />
        </div>
      </div>
    );
  }
}

export default Categories;
