import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";
function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage:
            "url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/eiffel.jpg)",
          backgroundSize: "1920px auto",
          backgroundRepeat: "repeat",
        }}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            const Layout = route.Layout || DefaultLayout;
            return (
              <Route
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
                key={index}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
