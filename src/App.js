import { useRef } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Cover from "./pages/Cover/Cover";
import Copywriting from "./pages/Copywriting/Copywriting";
import Method from "./pages/Method/Method";
import Testimonials from "./pages/Testimonials/Testimonials";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";

function App() {
  const pageRef = useRef(null);

  const scrollToProfile = () => {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <Cover onButtonClick={scrollToProfile} />
      <Copywriting onButtonClick={scrollToProfile} />
      <Method onButtonClick={scrollToProfile} />
      <Testimonials />
      <Profile />
      <Contact ref={pageRef} />
    </>
  );
}

export default App;
