import React from 'react'

export const InputField = ({ name, type, placeholder, change }) => {
   
    return (
        <>
            <label htmlFor={name} className="relative flex justify-center items-center w-full h-full rounded">
                {/* <div className="absolute left-2 top-0 flex justify-start items-center w-auto h-auto px-1 -mt-2 bg-white leading-none text-sm font-normal text-[#767676] select-none">
                    {placeholder}
                </div> */}

                {type === 'tel' && <div className="absolute left-1 flex justify-center items-center w-8 h-auto py-2 bg-[#f7f7f7] border border-[#e5e5e5] rounded-[2px] leading-none text-sm font-normal text-[#767676] select-none">
                    +91
                </div>}
                <input
                    type={type}
                    className={`flex justify-center items-center w-full h-full p-2.5 ${((type === 'tel')) ? 'pl-10' : 'pl-2.5'} bg-white rounded border border-[#e5e5e5] focus:border-[#c0c0c0] active:border-[#767676] focus:ring-[2.5px] focus:ring-[#f1f1f1] leading-none font-medium duration-100 bg-transparent placeholder:text-[#767676]  no-focus`}
                    name={name}
                    placeholder={placeholder}
                    onChange={(e) => {
                        change[1](e.target.value);
                    }}
                />
            </label>
        </>
    )
}
