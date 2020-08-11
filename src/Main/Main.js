import React from 'react';
import AllClothesContainer from './BottomTab/AllClothesContainer';
import ClothingContainer from './BottomTab/ClothingContainer';
import ShoeContainer from './BottomTab/ShoeContainer';
import BagAccContainer from './BottomTab/BagAccContainer';
import More from './BottomTab/More';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddButton from '../UIcomponents/AddButton'
import { Map, List } from 'immutable';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();

const emptyClothing = Map({
    item_id: null,
    image: null,
    type: Map({ typeValue: null, top: false, bottom: false, dress: false }),
    category: Map({ categoryValue: null, clothing: false, Shoes: false, Accessories: false }),
    buydate: null,
    price: null,
    brand: null,
    storage: null,
    season: Map({
        seasonArray: List([null, null, null, null]),
        spring: false, summer: false, fall: false, winter: false
    })
})

function Main({ ClothesActions }) {

    const navigation = useNavigation();

    const route = useRoute();
    const routeKeys = Object.keys(route);
    const isInStateInRoute = routeKeys.find((key) => { return key === 'state' });
    var history;
    var currentLocation;
    var isInMore = false;
    if (isInStateInRoute) {
        history = route.state.history;
        currentLocation = history[history.length - 1].key;
        if (currentLocation.includes('More')) {
            isInMore = true;
        }
    }

    //  서버연결시 아래주석 해제

    React.useEffect(() => {
        async function getClothes() {

            let token;
            try {
                token = await AsyncStorage.getItem('TOKEN');
            } catch (error) {

                console.log(error);
            }

            ClothesActions.getClothesFromServer(token);
        }

        try {
            getClothes();
        } catch (error) {
            console.log(error);
        }

    }, []);


    function moveToAddItems() {
        ClothesActions.setTemporaryClothing(emptyClothing);
        navigation.navigate('AddItemsContainer')
    }


    return (

        <>
            <Tab.Navigator
                initialRouteName="AllClothes"
                activeColor="white"
                screenOptions={{ tabBarColor: 'black' }}
            >
                <Tab.Screen name="AllClothes" component={AllClothesContainer}
                    options={{
                        tabBarLabel: '홈',
                        // Tab.Navigator 에서 설정한 color 를 상속받기 위함 
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Clothing" component={ClothingContainer}
                    options={{
                        tabBarLabel: '의류',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5Icons name="tshirt" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen name="Shoe" component={ShoeContainer}
                    options={{
                        tabBarLabel: '신발',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="shoe-formal" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Accessories" component={BagAccContainer}
                    options={{
                        tabBarLabel: '잡화',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="hat-fedora" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="More" component={More}
                    options={{
                        tabBarLabel: '더보기',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="dots-horizontal" color={color} size={26} />
                        ),
                    }}

                />
            </Tab.Navigator>
            {isInMore ? <></> : <AddButton onPress={moveToAddItems} />}
        </>
    );
}

export default Main;