function SizeCup(props:any){
    const {size,price} = props;
    return(
        <div>
        <button >{size}<br />{price}</button>
        </div>
    );
}
export default SizeCup;