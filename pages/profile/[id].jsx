import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profileHero/ProfileHero";
import ProfileUser from "../../src/components/profileUser/ProfileUser";
import ProfileCollection from "../../src/components/profileCollection/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

import dataProfile from "../../data/profile.json";

export default function Profile() {
  const { query, isReady } = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(dataProfile || {});
  }, [isReady]);

  const { username, info, verifed, avatar, nfts } = user || {};

  return Object.keys(user).length == 0 ? (
    <div>Loading</div>
  ) : (
    <>
      <Header />
      <ProfileHero image={avatar.backgroundUrl} />
      <ProfileUser
        name={username}
        info={info}
        verified={verifed}
        avatar={avatar.url}
      />
      <ProfileCollection user={user} items={nfts} />
      <Footer />
    </>
  );
}
