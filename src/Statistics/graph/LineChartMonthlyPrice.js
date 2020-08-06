import React from 'react';
import * as dummy from '../dummyData';
import { VictoryLine, VictoryScatter, VictoryChart, VictoryLabel, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import * as utils from '../statisticsUtils';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text } from 'react-native'
import NoStatisticsData from './NoStatisticsData';
export default function LineChartMonthlyPrice({ wardrobe }) {


    console.log('선 그래프', wardrobe);
    /*
        THINK 도메인은 실수좌표계 이다. 
        
    */
    // 실제 data 



    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);



    //  dummy data 

    // const clothes = utils.clothes;

    const [monthDomain, setMonthDomain] = React.useState({ x: [0.5, 6.5], y: [0, 900000] });


    function handleMonthDomain(domain) {

        setMonthDomain(domain)
    }



    var lineData = utils.getAnnualPurchaseData(clothes);
    console.log('data', lineData);
    let isExistData = lineData.find((priceObj) => {

        if (priceObj.price !== 0) {
            return true;
        }
    })
    if (!isExistData) {
        return <NoStatisticsData />
    }
    return (<VictoryChart width={400} theme={VictoryTheme.material}

        domainPadding={10} containerComponent={<VictoryZoomContainer
            zoomDimension='x'
            zoomDomain={monthDomain}
            onZoomDomainChange={handleMonthDomain}
        />}
    >
        <VictoryLine
            style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" }
            }}
            data={lineData} x={utils.transformBuydate} y={'price'}

        />

        <VictoryScatter data={lineData} x={utils.transformBuydate} y={'price'}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
            labels={({ datum }) => `${datum.price / 10000}만원`}
        />
        <VictoryAxis crossAxis

            domain={[1, 12]}
        />
        <VictoryAxis dependentAxis crossAxis
            domain={[1, 10]}
            tickFormat={(data) => (`${data / 10000}만원`)}
        />

    </VictoryChart>)
}