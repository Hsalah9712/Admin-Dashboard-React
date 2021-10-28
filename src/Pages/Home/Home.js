import Charts from "../../Components/Charts/Charts";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../DummyData";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
