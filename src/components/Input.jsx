
import useWeather from "../context/WeatherContext"

function Input() {
  const { setCity} = useWeather()
  const handleKeyDown=(e)=>{
    if(e.key === 'Enter'){
      setCity(e.target.value)
    }
  }
  return (
      <input type="text" 
      onKeyDown={handleKeyDown}
      className='w-full outline-none text-white bg-[#202C3C] rounded-md p-2'
      placeholder='Search for cities'
      />
  )
}

export default Input
