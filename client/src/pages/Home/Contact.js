import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import {useSelector} from "react-redux";

function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const {contact} = portfolioData;
  return (
    <div>
      <SectionTitle title="Hello!" />
      <div className='flex sm:flex-col items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-tertiary text-sm'>{'{'}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className='text-tertiary text-p'>{'}'}</p>
        </div>
        <div className='h-[400px]'>
<dotlottie-player src="https://lottie.host/00effc0b-f2bd-4a0c-aed3-cb01d8971bfa/o2VoED3IX6.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
        </div>
      </div>
    </div >
  )
}

export default Contact
