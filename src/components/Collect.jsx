import { useState, useEffect } from "react";
import datas from "../assets/data.json";
import styles from "./collect.module.css";

export default function Collect({ data, setData }) {
  useEffect(() => {
    function fetchData() {
      setData(datas);
    }
    fetchData();
  }, [setData]);
  function handleClick() {
    console.log(datas);
  }
  return (
    <div>
      <div>
        <button onClick={handleClick}>Continue</button>
      </div>
    </div>
  );
}
