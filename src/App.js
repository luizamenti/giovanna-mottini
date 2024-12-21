import { useRef } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Cover from "./pages/Cover/Cover";
import Copywriting from "./pages/Copywriting/Copywriting";
import Method from "./pages/Method/Method";
import Testimonials from "./pages/Testimonials/Testimonials";
import Profile from "./pages/Profile/Profile";

function App() {
  const profilePageRef = useRef(null);

  const scrollToProfile = () => {
    profilePageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <Cover onButtonClick={scrollToProfile} />
      <Copywriting />
      <Method />
      <Testimonials />
      <Profile ref={profilePageRef} />
    </>
  );
}

export default App;
