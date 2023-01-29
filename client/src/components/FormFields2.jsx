import React,{useState} from 'react';

const FormFields2 = ({ labelName, placeholder, handleChange }) => {

    const DropdownMenu = () => {
        const [selectedOption, setSelectedOption] = useState(null);
        const options = ['https://www.tajhotels.com/', 'https://www.goibibo.com/', 'https://www.fernhotels.com/the-fern-gir-forest-resort-gir','https://www.ixigo.com/','https://www.holidify.com/hotel/raas-devigarh-3296.html','https://www.makemytrip.com/'];
        const handleChange = (e) => {
            setSelectedOption(e.target.value);
        }
    }
    return (

        <label className="flex-1 w-full flex flex-col">
            {labelName && (
                <span className="font-Jost font-medium text-[14px] leading-[22px] text-[#85f0e6] mb-[10px]">{labelName}</span>
            )}
            <div>
              <select onChange={handleChange} value={selectedOption}>
                {options.map((option, index) => {
                  return <option 
                        key={index} 
                        value={option}

                        className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#5BDFD1] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
                        >{option}</option>
                })}
              </select>
              {selectedOption && <p>Selected option: {selectedOption}</p>}
            </div>
        </label>
    )
}

export default FormFields2