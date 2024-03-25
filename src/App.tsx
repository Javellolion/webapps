import './App.css'
import { Button, Input, Modal } from "antd"
import AppHeader from './components/AppHeader';
import Menus from './components/Menus';
import { FC, useState } from "react";
import SizeCup from './components/SizeCup';

    const App:FC = () => {
        const [menuSelected, setMenuSelected] = useState(null);
        const [size, setSize] = useState<string>('');
        const [type, setType] = useState<string>('');
        
        function selectMenu(menu:any){
          setMenuSelected(menu);
        }
        const handleSizeChange = (size: string) => {
          setSize(size);
        };
      
        const handleTypeChange = (type: string) => {
          setType(type);
        };

        function onSubmit(event:any){
            event.preventDefault();
        }

  return (
    <div>
      <div>
        <AppHeader />
      </div>
      
        <div className='container'>
          <Menus txt="นํ้าเต้าหู้" url="/images/soymilk.png"  selectDrink={selectMenu}/>
          <Menus txt="นํ้าลำไย" url="/images/lamyai.png"  selectDrink={selectMenu}/>
          <Menus txt="นํ้าจับเลี้ยง" url="/images/่ีิjubleag.png" selectDrink={selectMenu}/>
          <Menus txt="นมสด" url="'/images/milk.png'" selectDrink={selectMenu}/>
          <Menus txt="นํ้าขิง" url="/images/namking.png" selectDrink={selectMenu}/>
{/* 
          <Menus txt="นํ้าลำไย" url="/images/lamyai.png" onClick={() => handleMenuSelect('นํ้าลำไย')}/>
          <Menus txt="นํ้าจับเลี้ยง" url="/images/่ีิjubleag.png" onClick={() => handleMenuSelect('นํ้าจับเลี้ยง')}/>
          <Menus txt="นมสด" url="'/images/milk.png'" onClick={() => handleMenuSelect('นมสด')}/>
          <Menus txt="นํ้าขิง" url="/images/namking.png" onClick={() => handleMenuSelect('นํ้าขิง')}/> */}
        </div>
        <p>{menuSelected}</p>

        <div className='size-cup'>
          <p className='header-size'>โปรดเลือกขนาด</p>
          <form />
          <SizeCup size="เล็ก" price="30" onClick={()=> handleSizeChange("30")} />
          <SizeCup size="กลาง" price="40" onClick={()=> handleSizeChange("40")} />
          <SizeCup size="ใหญ่" price="55" onClick={()=> handleSizeChange("55")} />
          <SizeCup size="มโหฬาร" price="70" onClick={()=> handleSizeChange("70")} />
        </div>

        <div className='typeDrink'>
        <p className='header-type'>ชนิดเครื่องดื่ม</p>
          <button className='button5' onClick={()=> handleTypeChange("Hot")} >ร้อน</button>
          <button className='button6' onClick={()=> handleTypeChange("Cool")} >เย็น</button>
        </div>


        <div className='container1'>
        <p className='header-Topping'>โควต้าท็อปปิ้ง</p>
          <table>
            <tbody>
            <tr>
              <td className='topping'> <img src='images/ORDER - 12.png' /><br /><p>ปาท่องโก๋</p> </td>
              <td className='topping'><img src='images/ORDER - 14.png' /><br /><p>แปะก๊วย</p></td>
              <td className='topping'><img src='images/toulhuae.png' /><br /><p>เต้าฮวย</p></td>
              <td className='topping'><img src='images/ORDER - 18.png' /><br /><p>รากบัว</p></td>
              <td className='topping'> <img src='images/ORDER - 20.png' /><br /><p>ผงไมโล</p></td>
            </tr>
            <tr>
              <td className='topping'><img src='images/ORDER - 13.png' /><br /><p>รวมถั่ว</p></td>
              <td className='topping'> <img src='images/showkuy.png' /><br /><p>เฉาก๊วย</p></td>
              <td className='topping'>  <img src='images/maklung.png' /><br /><p>เม็ดแมงลัก</p></td>
              <td className='topping'>  <img src='images/ORDER - 19.png' /><br /><p>ไขมุก</p></td>
              <td className='topping'> <img src='images/ORDER - 21.png' /><br /><p>ลูกชิด</p></td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className='bill-image'>
          <p>กดด้านล่างเพื่อเพิ่มลงตะกร้า</p>
          <button type="submit"><img src='images/bill.png' /></button>
        </div>
      
    </div>
  );
}

export default App;
