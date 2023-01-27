import { useState, useEffect } from "react";

import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activityFilters/ActivityFilters";
import ActivityList from "../../src/components/activityList/ActivityList";
import Footer from "../../src/components/footer/Footer";

export default function Activity() {
  const [activity, setActivity] = useState([]);
  const [activityFilters, setActivityFilters] = useState({});
  const [sortMethod, setSortMethod] = useState("");
  const [filterTypeMethod, setFilterTypeMethod] = useState("");

  const handleChangeSort = (event) => {
    setSortMethod(event.target.value);
  };
  const handleChangeFilterType = (event) => {
    setFilterTypeMethod(event.target.value);
  };

  const sortMethods = {
    "": { method: (a, b) => null },
    1: { method: (a, b) => new Date(a.created_at) - new Date(b.created_at) },
    2: { method: (a, b) => new Date(b.created_at) - new Date(a.created_at) },
    3: { method: (a, b) => (a.nft.name > b.nft.name ? 1 : -1) },
    4: { method: (a, b) => (a.nft.name > b.nft.name ? -1 : 1) },
    5: { method: (a, b) => a.nft.price - b.nft.price },
    6: { method: (a, b) => b.nft.price - a.nft.price },
  };

  const filterTypeMethods = {
    "": { method: (activity) => activity.type },
    1: { method: (activity) => activity.type == "like" },
    8: { method: (activity) => activity.type == "buy" },
  };

  const apiUrl = process.env.apiUrl;

  useEffect(() => {
    fetch(`${apiUrl}/activities`)
      .then((response) => response.json())
      .then((data) => {
        const dataActivities = data.activities.filter(
          filterTypeMethods[filterTypeMethod].method
        );
        dataActivities.sort(sortMethods[sortMethod].method);
        setActivity(dataActivities);
        setActivityFilters(data.filters);
      });
  }, [sortMethod, filterTypeMethod]);

  return (
    <>
      <Header />
      <Hero text="activity" capitalize={true} />
      <ActivityFilters
        filters={activityFilters}
        sortMethod={sortMethod}
        filterTypeMethod={filterTypeMethod}
        handleChangeSort={handleChangeSort}
        handleChangeFilterType={handleChangeFilterType}
      />
      <ActivityList items={activity} />
      <Footer />
    </>
  );
}
