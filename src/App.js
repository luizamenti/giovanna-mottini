import { useRef } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Cover from "./pages/Cover/Cover";
import Copywriting from "./pages/Copywriting/Copywriting";
import Method from "./pages/Method/Method";
import Plans from "./pages/Plans/Plans";
import Testimonials from "./pages/Testimonials/Testimonials";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
      <Plans />
      <Testimonials />
      <Profile />
      <Contact ref={pageRef} />
    </>
  );
}

export default App;
