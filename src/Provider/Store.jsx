import React, { useEffect, useState, createContext } from 'react';
import { app, db } from '../config/firebase';
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore"; 
import { useTranslation } from 'react-i18next';

const adddata = async (data) => {
 const{Name,address}  = data;

  await setDoc(doc(db, 'Demo', Date.now().toString()), {
  Name,
  Address:address
  });
  console.log("successfully added to firebase");
}

export const StoreProvider = createContext(null);

const Store = (props) => {
  const [mydata, setdata] = useState([]);
  const { i18n } = useTranslation();

  const getData = async () => {
    const q = query(collection(db, 'Demo'));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setdata(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const translatedData = mydata.map(item => ({
    ...item,
    Name: item.Name?.[i18n.language] || item.Name?.['en'] || '',
    Address: item.Address?.[i18n.language] || item.Address?.['en'] || ''
  }));
  
 
  const contextvalue = { adddata, mydata: translatedData };

  return (
    <StoreProvider.Provider value={contextvalue}>
      {props.children}
    </StoreProvider.Provider>
  );
}

export default Store;
