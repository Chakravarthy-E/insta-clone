import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Landing from "../components/landing/Landing";
import NewPost from "../components/Post/New/NewPost";
const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/postview" element={<NewPost />} />
       { /*<Route path="post" Component={<PostView />}>
          <Route path="new" Component={<landingPage />} />
          <Route path="all" Component={<landingPage />} />
  </Route> */ }
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
