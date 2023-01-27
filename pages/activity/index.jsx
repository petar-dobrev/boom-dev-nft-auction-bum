import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activityFilters/ActivityFilters";
import ActivityList from "../../src/components/activityList/ActivityList";
import Footer from "../../src/components/footer/Footer";

import dataActivity from "../../data/activity.json";

export default function Activity() {
  return (
    <>
      <Header />
      <Hero text="activity" capitalize={true} />
      <ActivityFilters />
      <ActivityList items={dataActivity} />
      <Footer />
    </>
  );
}
