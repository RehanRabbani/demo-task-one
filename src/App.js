import "./App.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import NormalLoginForm from "./components/NormalLoginForm";
import DescriptionSection from "./components/DescriotionSection";
import { RightCircleFilled } from "@ant-design/icons";

const App = () => {
  return (
    <div className="parent">
      <section className="section-one">
        <div className="heading">
          <h1>global</h1>
          <p>control center</p>
        </div>
        <Card
          title={
            <div>
              <h1 className="title">Welcome</h1>
              <p className="sub-title">
                Please login to your account to continue
              </p>
            </div>
          }
          className="card"
          style={{ width: 500 }}
        >
          <NormalLoginForm />
          <RightCircleFilled className="right-arrow-icon" />
        </Card>
      </section>
      <section className="section-two">
        <DescriptionSection />
      </section>
    </div>
  );
};

export default App;
