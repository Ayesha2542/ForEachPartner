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
    const [selectedCategories, setSelectedCategories] = useState([]);
    const[baseUrl,setBaseUrl]=useState("http://192.168.1.20:8888");
const [currentUser,setCurrentUser] =useState({});

    const storeSelectedFoodFeature= (val)=>{
        setSelectedFoodFeature(val);  
    }
    const storeSelectedCategories= (val)=>{
      setSelectedCategories(val);  
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
      const updateCurrentUser = obj => {
        setCurrentUser(obj);   
           };  
    return <AppContext.Provider value={{
      baseUrl,
      currentUser,
      selectedFoodFeature,
        selectedCategories,
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
        storeIsAddedIntoDonatedData,
        storeSelectedCategories,
        updateCurrentUser


    }} >
        {children}
    </AppContext.Provider>
}

export default AppContext;

