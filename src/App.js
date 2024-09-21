import React, { useState } from "react";

function App() {
  const unlockedScreen = () => (
    <div style={{ textAlign: "center", color:"red",fontSize: "50px" }}>Login oldunuz.🎉</div>
  );

  return (
    <CombinationLock combination={[1, 2, 3, 4]} NextScreen={unlockedScreen} />
  );
}

const CombinationLock = ({ combination, NextScreen }) => {
const [input, setInput] = useState([])
const [error, setError] =  useState(false)
const [unloced, setUnloced] = useState(false)


const handleButtonClick = (num) => {
  if(input.length <4) {
    setInput([...input, num]) // kombınasyona sayı ekle
  }
  if ( input.length +1 === 4) {
    //kombınasyona tam gırıldıgınde kontrol et
    if ( [...input,num].join('') === combination.join('')){
      setUnloced(true)
    } else{
      setError(true)
        alert ("Yalniş kombınasyon")
        setTimeout(() =>{
          setInput([])
          setError(false)
        },1000)
      }
    }
  

}
 if(unloced){
  return <NextScreen/>
 }
return (
  <div className="h-screen bg-slate-500  grid justify-center items-center ">
    
    <div className="border border-white max-w-[250px] h-22 text-center mt-60">
      
      {input.map((num,idx) =>(
        <span key={idx} className="text-[55px]">{num}</span>
      ))}
      {Array(4 - input.length).fill('_').map((_,idx) => (
        <span key={idx} className="text-[55px]" >*</span>
      ))}

    </div>
    {/* {error && <div style={{ color: "red", marginBottom: "10px" }}>Yanlış kombinasyon!</div>} */}

    <div className="grid grid-cols-3  gap-1 text-[55px]">
      {[1,2,3,4,5,6,7,8,9,0].map((num) => (
        <button key={num}
        onClick={() => handleButtonClick(num)}
        className=" border  border-white w-20 h-20 rounded-3xl hover:bg-slate-600  cursor-pointer"
        >
          {num}
        </button>
      ))}
    </div>
  
  </div>
)

}

export default App;
