import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';





const Dropmen = ({ labelName,placeholder,handleChange}) => {
  const sizes = ['https://www.tajhotels.com/', 'https://www.goibibo.com/', 'https://www.fernhotels.com/the-fern-gir-forest-resort-gir','https://www.ixigo.com/','https://www.holidify.com/hotel/raas-devigarh-3296.html','https://www.makemytrip.com/'];
  const [value, setValue] = React.useState('https://www.tajhotels.com/');
  return <label className="flex-1 w-full flex flex-col">
        <div>
        {labelName && (
        <span className="font-Jost font-medium text-[14px] leading-[22px] mr-[10px] text-[#85f0e6] mb-[10px]">{labelName}</span>
        )}
        <DropDownList data={sizes} value={value} onChange={handleChange} className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#5BDFD1] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]" />
        </div>
    </label>
};
// ReactDOM.render(<App />, document.querySelector('my-app'));
export default Dropmen
