import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Chip } from 'react-native-paper'
import Menu, { MenuItem, } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import LineChartMonthlyPrice from './graph/LineChartMonthlyPrice';
import PieChartClothingTypePercentage from './graph/PieChartCategoryPercentage';
import BarChartSeasonsAmount from './graph/BarChartSeasonsAmount';
import BarChartSeasonsPrice from './graph/BarChartSeasonsPrice';
import BarChartCategoryAmount from './graph/BarChartCategoryAmount';
import BarChartCategoryPrice from './graph/BarChartCategoryPrice';
import BarChartClothingPrice from './graph/BarChartClothingPrice';
import BarChartClothingAmount from './graph/BarChartClothingAmount';
import PieChartClothingPercentage from './graph/PieChartClothingPercentage';
import BarChartShoesPrice from './graph/BarChartShoesPrice';
import BarChartShoesAmount from './graph/BarChartShoesAmount';
import PieChartShoesPercentage from './graph/PieChartShoesPercentage';
import BarChartAccessoriesPrice from './graph/BarChartAccessoriesPrice';
import BarChartAccessoriesAmount from './graph/BarChartAccessoriesAmount';
import PieChartAccessoriesPercentage from './graph/PieChartAccessoriesPercentage'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },

    selectionWraper: {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    selectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    popupMenuContainer: {
        flex: 0.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20

    },

    popupMenuButton: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
    },

    graphContainer: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    popupMenu: {

        marginHorizontal: 10,
    }
});



function Statistics({ wardrobe }) {




    const [selectStatistics, setStatistics] = React.useState({ duration: true, category: false, season: false, type: false });
    const [categoryMenu, setCategoryMenu] = React.useState({ price: true, percentage: false, amount: false });
    const [seasonMenu, setSeasonMenu] = React.useState({ price: true, amount: false });
    const [categoryInType, setcategoryInType] = React.useState({ clothing: true, shoes: false, accessories: false })
    const [typeMenu, setTypeMenu] = React.useState({

        clothingPrice: true,
        clothingAmount: false,
        clothingPercentage: false,
        shoesPrice: false,
        shoesAmount: false,
        shoesPercentage: false,
        accessoriesPrice: false,
        accessoriesAmount: false,
        accessoriesPercentage: false,
    })
    function handleDuration() {

        setStatistics({ duration: true, category: false, season: false, type: false })
    }
    function handleCategory() {

        setStatistics({ duration: false, category: true, season: false, type: false })
    }
    function handleSeason() {

        setStatistics({ duration: false, category: false, season: true, type: false })
    }
    function handleType() {

        setStatistics({ duration: false, category: false, season: false, type: true })
    }





    var _menu = null;
    var hideMenu = () => {
        _menu.hide();
    };

    var showMenu = () => {
        _menu.show();
    };


    var setMenuRef = ref => {
        _menu = ref;
    };

    var _categoryMenu = null;
    var hideCategoryMenu = () => {
        _categoryMenu.hide();
    };

    var showCategoryMenu = () => {
        _categoryMenu.show();
    };


    var setCategoryMenuRef = ref => {
        _categoryMenu = ref;
    };


    function renderTypeGraph() {




        function chooseTypeGraph() {

            if (categoryInType.clothing) {

                if (typeMenu.clothingPrice) {

                    return <BarChartClothingPrice wardrobe={wardrobe} />

                }

                else if (typeMenu.clothingAmount) {
                    return <BarChartClothingAmount wardrobe={wardrobe} />
                }

                else if (typeMenu.clothingPercentage) {

                    return <PieChartClothingPercentage wardrobe={wardrobe} />
                }
            }

            else if (categoryInType.shoes) {

                if (typeMenu.shoesPrice) {
                    return <BarChartShoesPrice wardrobe={wardrobe} />

                }

                else if (typeMenu.shoesAmount) {
                    return <BarChartShoesAmount wardrobe={wardrobe} />
                }

                else if (typeMenu.shoesPercentage) {
                    return <PieChartShoesPercentage wardrobe={wardrobe} />
                }
            }

            else if (categoryInType.accessories) {

                if (typeMenu.accessoriesPrice) {

                    return <BarChartAccessoriesPrice wardrobe={wardrobe} />
                }

                else if (typeMenu.accessoriesAmount) {
                    return <BarChartAccessoriesAmount wardrobe={wardrobe} />
                }

                else if (typeMenu.accessoriesPercentage) {
                    return <PieChartAccessoriesPercentage wardrobe={wardrobe} />
                }
            }

        }

        const AllFalseObj = {

            clothingPrice: false,
            clothingAmount: false,
            clothingPercentage: false,
            shoesPrice: false,
            shoesAmount: false,
            shoesPercentage: false,
            accessoriesPrice: false,
            accessoriesAmount: false,
            accessoriesPercentage: false,
        }

        function setTypeGraphMenu() {

            if (categoryInType.clothing) {
                return (
                    <>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, clothingPrice: true })
                            _menu.hide();
                        }}>의류 구매 금액</MenuItem>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, clothingPercentage: true })
                            _menu.hide();
                        }}>의류 구매 비율</MenuItem>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, clothingAmount: true })
                            _menu.hide();
                        }}>의류 보유 수량</MenuItem>
                    </>)
            }

            else if (categoryInType.shoes) {
                return (
                    <>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, shoesPrice: true })
                            _menu.hide();
                        }}>신발 구매 금액</MenuItem>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, shoesPercentage: true })
                            _menu.hide();
                        }}>신발 구매 비율</MenuItem>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, shoesAmount: true })
                            _menu.hide();
                        }}>신발 보유 수량</MenuItem>
                    </>)
            }

            else if (categoryInType.accessories) {
                return (
                    <>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, accessoriesPrice: true })
                            _menu.hide();
                        }}>잡화 구매 금액</MenuItem>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, accessoriesPercentage: true })
                            _menu.hide();
                        }}>잡화 구매 비율</MenuItem>
                        <MenuItem onPress={() => {
                            setTypeMenu({ ...AllFalseObj, accessoriesAmount: true })
                            _menu.hide();
                        }}>잡화 보유 수량</MenuItem>
                    </>)
            }


        }

        function selectClothing() {

            setcategoryInType({ clothing: true, shoes: false, accessories: false });
            setTypeMenu({ ...AllFalseObj, clothingPrice: true })
            hideCategoryMenu();
        }

        function selectShoes() {
            setcategoryInType({ clothing: false, shoes: true, accessories: false });
            setTypeMenu({ ...AllFalseObj, shoesPrice: true })
            _categoryMenu.hide();

        }

        function selectAccessories() {
            setcategoryInType({ clothing: false, shoes: false, accessories: true });
            setTypeMenu({ ...AllFalseObj, accessoriesPrice: true })
            _categoryMenu.hide();
        }



        return (


            <>
                <View style={styles.popupMenuContainer}>
                    <Menu
                        ref={setCategoryMenuRef}
                        button={<Pressable onPress={showCategoryMenu} style={styles.popupMenuButton}>
                            <Text >카테고리  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >

                        {/* 카테고리에 따라서 onPress 내용이 달라져야 함  */}
                        <MenuItem onPress={selectClothing} >의류</MenuItem>
                        <MenuItem onPress={selectShoes}>신발</MenuItem>
                        <MenuItem onPress={selectAccessories} >잡화</MenuItem>

                    </Menu>
                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >조회  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        {setTypeGraphMenu()}
                    </Menu>
                </View>
                <View style={styles.graphContainer}>

                    {chooseTypeGraph()}
                </View>
            </>
        )


    }
    function renderDurationGraph() {

        return (


            <>
                <View style={styles.popupMenuContainer}>

                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >조회  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        <MenuItem onPress={hideMenu}>월별 구매 금액</MenuItem>
                    </Menu>
                </View>
                <View style={styles.graphContainer}>
                    <LineChartMonthlyPrice wardrobe={wardrobe} />
                </View>
            </>
        )

    }

    function renderCategoryGraph() {

        function chooseCategoryGraph() {


            if (categoryMenu.price) {

                return <BarChartCategoryPrice wardrobe={wardrobe} />
            }

            else if (categoryMenu.percentage) {
                return <PieChartClothingTypePercentage wardrobe={wardrobe} />
            }

            else if (categoryMenu.amount) {
                return <BarChartCategoryAmount wardrobe={wardrobe} />
            }
        }


        function chooseCategoryPrice() {
            setCategoryMenu({ price: true, percentage: false, amount: false });
            _menu.hide();
        }

        function chooseCategoryPercentage() {
            setCategoryMenu({ price: false, percentage: true, amount: false });
            _menu.hide();
        }

        function chooseCategoryAmount() {
            setCategoryMenu({ price: false, percentage: false, amount: true });
            _menu.hide();
        }


        return (


            <>
                <View style={styles.popupMenuContainer}>

                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >조회  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        <MenuItem onPress={chooseCategoryPrice}>카테고리별 구매 금액</MenuItem>
                        <MenuItem onPress={chooseCategoryPercentage}>카테고리별 구매 비율</MenuItem>
                        <MenuItem onPress={chooseCategoryAmount}>카테고리별 보유 수량</MenuItem>

                    </Menu>
                </View>
                <View style={styles.graphContainer}>
                    {chooseCategoryGraph()}
                </View>
            </>
        )

    }

    function renderSeasonGraph() {
        function chooseSeasonGraph() {


            if (seasonMenu.price) {

                return <BarChartSeasonsPrice wardrobe={wardrobe} />
            }

            else if (seasonMenu.amount) {
                return <BarChartSeasonsAmount wardrobe={wardrobe} />
            }
        }


        function chooseSeasonPrice() {
            setSeasonMenu({ price: true, amount: false });
            _menu.hide();
        }


        function chooseSeasonAmount() {
            setSeasonMenu({ price: false, amount: true });
            _menu.hide();
        }


        return (


            <>
                <View style={styles.popupMenuContainer}>

                    <Menu
                        ref={setMenuRef}
                        button={<Pressable onPress={showMenu} style={styles.popupMenuButton}>
                            <Text >조회  </Text>
                            <View>
                                <Icon name='caret-down' size={22} />
                            </View>

                        </Pressable>}
                    >
                        <MenuItem onPress={chooseSeasonPrice}>계절별 구매 금액</MenuItem>
                        <MenuItem onPress={chooseSeasonAmount}>계절별 보유 수량</MenuItem>

                    </Menu>
                </View>
                <View style={styles.graphContainer}>
                    {chooseSeasonGraph()}
                </View>
            </>
        )


    }

    function renderGraph() {


        if (selectStatistics.duration) {
            return renderDurationGraph();
        }

        else if (selectStatistics.category) {
            return renderCategoryGraph();
        }

        else if (selectStatistics.season) {
            return renderSeasonGraph();
        }

        else if (selectStatistics.type) {
            return renderTypeGraph();
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.selectionWraper}>

                <View style={styles.selectionContainer}>
                    <Chip icon="calendar-month" onPress={handleDuration} selected={selectStatistics.duration}>기간</Chip>
                    <Chip icon="weather-partly-snowy-rainy" onPress={handleSeason} selected={selectStatistics.season}>계절</Chip>
                    <Chip icon="hat-fedora" onPress={handleCategory} selected={selectStatistics.category}>카테고리</Chip>
                    <Chip icon="tshirt-v" onPress={handleType} selected={selectStatistics.type}>타입</Chip>
                </View>

            </View>
            {renderGraph()}
        </View>
    );
}



export default Statistics;