const Button=(props)=>{
    return (
        <button class="btn text-white btn-info" type="submit" id="addUser">{props.children}</button>
    )
}
export default Button