import './App.css'

function App() {
  return (
    <>
      <header className='app-header'>
        <div>
          <img className='app-header-logo' src='/images/logo.jpg' />
          <div className='square'></div>
          <img className='basket-header-logo' src='/images/basket.png' />

        </div>
      </header>
      <body>
        <div className='container'>
          <div className='image'>
            <img src='/images/soymilk.png' alt='นํ้าเต้าหู้' />
            <p>นํ้าเต้าหู้</p>
          </div>
          <div className='image'>
            <img  src='/images/lamyai.png' alt='นํ้าลำไย' />
            <p>นํ้าลำไย</p>
          </div>
          <div className='image'>
            <img  src='/images/jubleag.png' alt='นํ้าจับเลี้ยง' />
            <p>นํ้าจับเลี้ยง</p>
          </div>
          <div className='image'>
          <img src='/images/milk.png' alt='นมสด' />
            <p>นมสด</p>
          </div>
          <div className='image'>
            <img src='/images/namking.png' alt='นํ้าขิง' />
            <p>นํ้าขิง</p>
          </div>
        </div>
          <h2 className='header-size'>โปรดเลือกขนาด</h2>
        <div className='size-cup'>
        <button className='button1'>เล็ก<br/>30</button>
        <button className='button2'>กลาง<br/>40</button>
        <button className='button3'>ใหญ่<br/>55</button>
        <button className='button4'>มโหฬาร<br/>70</button>
        </div>
        
        <h2 className='header-type'>ชนิดเครื่องดื่ม</h2>
        <div className='typeDrink'>
        <button className='button5'>ร้อน</button>
        <button className='button6'>เย็น</button>
        </div>
        <h2 className='header-Topping'>โควต้าท็อปปิ้ง  อย่าง</h2>
        <div className='container1'>
          {/* <div className='topping'>
              <img src ='images/ORDER - 12.png' alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/ORDER - 14.png' alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/toulhuae.png' alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/ORDER - 18.png'alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/ORDER - 20.png' alt='ปาท่องโก๋'/>
          </div>
          <br/>
          <div className='topping'>
              <img src ='images/ORDER - 13.png'alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/showkuy.png' alt='ปาท่องโก๋'/>
          </div >
          <div className='topping'>
              <img src ='images/maklung.png' alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/ORDER - 19.png'alt='ปาท่องโก๋'/>
          </div>
          <div className='topping'>
              <img src ='images/ORDER - 21.png' alt='ปาท่องโก๋'/>
          </div> */}
          <table>
              <tr>
                <td className='topping'> <img src ='images/ORDER - 12.png' /><br/><p>ปาท่องโก๋</p> </td>
                <td className='topping'><img src ='images/ORDER - 14.png'/><br/><p>แปะก๊วย</p></td>
                <td className='topping'><img src ='images/toulhuae.png' /><br/><p>เต้าฮวย</p></td>
                <td className='topping'><img src ='images/ORDER - 18.png'/><br/><p>รากบัว</p></td>
                <td className='topping'> <img src ='images/ORDER - 20.png'/><br/><p>ผงไมโล</p></td>
              </tr>
              <tr>
                  <td className='topping'><img src ='images/ORDER - 13.png'/><br/><p>รวมถั่ว</p></td>
                  <td className='topping'> <img src ='images/showkuy.png'/><br/><p>เฉาก๊วย</p></td>
                  <td className='topping'>  <img src ='images/maklung.png'/><br/><p>เม็ดแมงลัก</p></td>
                  <td className='topping'>  <img src ='images/ORDER - 19.png'/><br/><p>ไขมุก</p></td>
                  <td className='topping'> <img src ='images/ORDER - 21.png'/><br/><p>ลูกชิด</p></td>
              </tr>
          </table>
        </div>
        <div className='bill-image'>
          <p>กดด้านล่างเพื่อเพิ่มลงตะกร้า</p>
            <img src='images/bill.png'/>
        </div>

      </body>
    </>
  );
}

export default App;
