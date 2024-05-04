import { Navbar, Footer } from "@/components";
import {
  Hero,
  Vision,
  HackathonInfo,
  Events,
  Partner,
  Contributor_Team,
  LastNews,
} from "@/app/components";

export default function Profile() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <HackathonInfo />
      <Events />
      <Partner />
      <Contributor_Team />
      <LastNews />
      <Footer />
    </>
  );
}
