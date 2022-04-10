import React, { useState } from "react";
import styles from "./Body.module.scss";
import { Tabs, Input } from "../../components";
import ActionTable from "../ActionTable";

function Body() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className={styles.main}>
      <section className={styles.display}>
        <Input />
      </section>
      <Tabs
        labels={["Controls", "Events"]}
        contents={[<ActionTable />]}
        value={activeTab}
        onChange={setActiveTab}
        shrinkable
      />
    </main>
  );
}

export default Body;
