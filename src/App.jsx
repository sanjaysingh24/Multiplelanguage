import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { StoreProvider } from './Provider/Store';

function App() {
  const { t, i18n } = useTranslation();
  const { baba, adddata, mydata } = useContext(StoreProvider);
  const [count, setCount] = useState(0);

  const handleclick = (e) => {
    e.preventDefault();
    let data = {
      Name:{
        /// store the data into the database
         hi:"संdafjashfk ",
         en:"sanju",
         ar:"سانجو"
      },
      address:{
        hi:"jdksja",
        en:"sjadfkjs",
        ar:"jsklffjksa"
      }
    };
    adddata(data);
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <h1>{t('welcome')}</h1>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="ar">العربية</option>
      </select>
      <p>{baba}</p>
      <button onClick={handleclick}>{t('addData')}</button>
      {mydata.map((item) => {
        return (
          <div key={item.id}>
            <li>{t('name')}: {item.Name}</li>
            <li>{t('address')}: {item.Address}</li>
          </div>
        );
      })}
    </>
  );
}

export default App;
