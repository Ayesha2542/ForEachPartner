import React,{useState} from 'react'
const AppContext = React.createContext();

export const AppProvider =({children})=>{

    const[selectedFoodFeature,setSelectedFoodFeature]=useState([]);
    const[selectedSubCategoryFeature,setSelectedSubCategoryFoodFeature]=useState([]);
    const[selectedRestaurants,setSelectedRestaurants]=useState([]);
    const [isAddedIntoSchedule, setIsAddedIntoSchedule] = useState('');
    const [isAddedIntoCart, setIsAddedIntoCart] = useState('');
    const [mySchedule, setMySchedule] = useState([]);
    const [myCart, setMyCart] = useState([]);
    const [donatedData, setDonatedData] = useState([]);
    const [isAddedIntoDonatedData, setIsAddedIntoDonatedData] = useState('');

    const storeSelectedFoodFeature= (val)=>{
        setSelectedFoodFeature(val);  
    }
    const storeSelectedSubCategoryFeature= (val)=>{
        setSelectedSubCategoryFoodFeature(val);  
    }
    const storeSelectedRestaurants= (val)=>{
        setSelectedRestaurants(val);  
    }
    const storeIsAddedIntoSchedule = val => {
        setIsAddedIntoSchedule(val);
      };
    const storeInSchedule = item => {
        setMySchedule(oldSchedule => [...oldSchedule, item]);
      };
      const storeIsAddedIntoCart = val => {
        setIsAddedIntoCart(val);
      };
    const storeInCart = item => {
        setMyCart(oldCart => [...oldCart, item]);
    };
      const ScheduleEmpty = item => {
        setMySchedule([]);
      };  
      const storeInDonatedData = item => {
        setDonatedData(oldDonatedData => [...oldDonatedData, item]);
      }; 
      const storeIsAddedIntoDonatedData = val => {
        setIsAddedIntoDonatedData(val);
      };  
    return <AppContext.Provider value={{
        selectedFoodFeature,
        selectedSubCategoryFeature,
        selectedRestaurants,
        mySchedule,
        isAddedIntoSchedule,
        myCart,
        isAddedIntoCart,
        donatedData,
        isAddedIntoDonatedData,
        storeSelectedSubCategoryFeature,
        storeSelectedFoodFeature,  
        storeSelectedRestaurants,
        storeIsAddedIntoSchedule,
        storeInSchedule,
        storeIsAddedIntoCart,
        storeInCart,
        ScheduleEmpty,
        storeInDonatedData,
        storeIsAddedIntoDonatedData

    }} >
        {children}
    </AppContext.Provider>
}

export default AppContext;

