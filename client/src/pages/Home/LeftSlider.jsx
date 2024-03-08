import React from 'react'
function LeftSlider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:hidden'>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-3 ">
                    <a href='https://www.linkedin.com/in/saikat-manna-52084614a' target="_blank">
                        <i class="ri-linkedin-fill  text-gray-400 "></i>
                    </a>
                    <a href='https://github.com/saikat112' target="_blank">
                        <i class="ri-github-line text-gray-400 "></i>
                    </a>
                    <a href='https://x.com/RaydoxYt15952?t=OaSYnd7BRaiU5C_1PbVCwg&s=09' target="_blank">
                        <i class="ri-twitter-x-line text-gray-400 "></i>
                    </a>
                    <a href='https://wa.me/8967181069?text=Hello%20Saikat" ' target="_blank"><i class="ri-whatsapp-line text-gray-400 " ></i>
                    </a>
                </div>
                <div className='w-[1px] h-32 bg-[#125f63]'>
                </div>

            </div>
        </div>
    )

}

export default LeftSlider
