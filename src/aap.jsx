// import parsan from "./parsan";
// import Parsan from "./parsan"


import './style.css'
import Personsecond from './Personsecond';  
// import parsan from './parsan'
function App() {
  return (
    // console.log(parsan)
    <div className="container">

    < Personsecond imges="https://picsum.photos/100/100?random=1" price="1500" />
<br />
    < Personsecond imges="https://picsum.photos/100/100?random=2" price="1600" />
   <br />
    < Personsecond imges="https://picsum.photos/100/100?random=3" price="1100" />
<br />
    < Personsecond imges="https://picsum.photos/100/100?random=4" price="300" />
<br />
    < Personsecond imges="https://picsum.photos/100/100?random=5" price="5000" />


 </div> 
   
    
    
  )
}
export default App;