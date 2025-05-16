import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const TimerBlock = lazy(() => import("../../components/TimerBlock"));
const TitleBlock = lazy(() => import("../../components/TitleBlock"));
const NoticeBlock = lazy(() => import("../../components/NoticeBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <TitleBlock/>
      <TimerBlock />
      <NoticeBlock/>
    </Container>
  );
};

export default Home;
