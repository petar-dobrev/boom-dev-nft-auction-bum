import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profileHero/ProfileHero";
import ProfileUser from "../../src/components/profileUser/ProfileUser";
import ProfileCollection from "../../src/components/profileCollection/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

export default function Profile() {
  const { query, isReady } = useRouter();
  const [profile, setProfile] = useState({});
  const [profileFilters, setProfileFilters] = useState({});

  const apiUrl = process.env.apiUrl;
  const id = query.id;

  useEffect(() => {
    if (id != undefined) {
      fetch(`${apiUrl}/users/${id}`)
        .then((response) => response.json())
        .then((data) => setProfile(data.user));
    }
  }, [isReady]);

  return Object.keys(profile).length == 0 ? (
    <div>Loading</div>
  ) : (
    <>
      <Header />
      <ProfileHero image={profile.avatar.backgroundUrl} />
      <ProfileUser
        name={profile.username}
        info={profile.info}
        verified={profile.verifed}
        avatar={profile.avatar.url}
      />
      <ProfileCollection
        user={profile}
        items={profile.nfts}
        filters={profileFilters}
      />
      <Footer />
    </>
  );
}
