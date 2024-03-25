function MenuSoyMilk(props:any){
    const {txt,url,selectDrink} = props;
    return(
        <div className='image'>
            <img src={url} onClick={()=>selectDrink(txt)}/>
            <p>{txt}</p>
        </div>
    );
}
export default MenuSoyMilk;