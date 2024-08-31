import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static sm:py-10'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href="https://www.facebook.com/durgaprasad.salva"><i class="ri-facebook-circle-fill text-gray-600 text-xl"></i></a>
                    <a href="mailto:shalvadurgaprasad020@gmail.com"><i class="ri-mail-line text-gray-600 text-xl"></i></a>
                    <a href="https://www.instagram.com/durga_prasad_shalva/"><i class="ri-instagram-line text-gray-600 text-xl"></i></a>
                    <a href="https://www.linkedin.com/in/durga-prasad-shalva-37b8951a3"><i class="ri-linkedin-box-line text-gray-600 text-xl"></i></a>
                    <a href="https://github.com/Durgaprasadshalva"><i class="ri-github-line text-gray-600 text-xl"></i></a>
                </div>
                <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>
                </div>
            </div>
        </div>
    )
}

export default LeftSider