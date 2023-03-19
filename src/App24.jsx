import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App24=()=>{
    let handleSubmit=()=>{
        toast.success("Logged in successfully",{
            position:toast.POSITION.TOP_CENTER})
            toast.info("information",{position:toast.POSITION.BOTTOM_CENTER})
        }
     return(
        <div>
            <ToastContainer/>
            <button onClick={handleSubmit}>CLICK FOR BEAUTIFUL MSG</button>
        </div>
)
}
export default App24