import React, { useState } from 'react';
import { CarBoxCreate, CarBoxOptionAndCatalog } from '../components';
import messageText from '../../../../../../../../public/icons/chatbot/message-text.svg';
import messageTick from '../../../../../../../../public/icons/chatbot/message-tick.svg';
import messageQuestion from '../../../../../../../../public/icons/chatbot/message-question.svg';

import plusicon from '../../../../../../../../public/icons/chatbot/Plus.svg';
import preferences from '../../../../../../../../public/icons/chatbot/Preferences.svg';
import subscribe from '../../../../../../../../public/icons/chatbot/subscribe-chat.svg';
import unsubcribe from '../../../../../../../../public/icons/chatbot/unsubscribe.svg';
import timeDelay from '../../../../../../../../public/icons/chatbot/time-delay.svg';
import triggerSenario from '../../../../../../../../public/icons/chatbot/trigger-senario.svg';
import momoLogos from '../../../../../../../../public/icons/chatbot/momo-logo.svg';
import omLogos from '../../../../../../../../public/icons/chatbot/om-logos.svg';
import arrow from '../../../../../../../../public/icons/chatbot/arrow-circle-left.svg';
import { useSenarioCreate } from '@/zustand_store';
import Image from 'next/image';
import arrowIcon from '../../../../../../../../public/icons/chatbot/arrow-left.svg';

interface SideBarProps {
  updateOrCreate: string | undefined;
}
function SideBar(props: SideBarProps) {
  const [close, setClose] = useState(false);
  const { setNameSenario } = useSenarioCreate();
  const nameSenario = useSenarioCreate((state) => state.nameSenario);
  return (
    <>
      <div
        onClick={() => setClose(!close)}
        className={`absolute shadow-lg  bg-mainDark rounded-full top-[56%] transition-all ease-in-out duration-800 ${close ? ' left-0 rotate-180 ' : 'left-72 '} h-12 w-12 flex justify-center place-item-center cursor-pointer z-20`}
      >
        <Image src={arrow} alt="arrow" />
      </div>
      <div
        className={` absolute  top-14 z-20 flex gap-2 place-items-center ${close ? ' left-0  ' : 'left-80 '} transition-all ease-in-out duration-800 `}
      >
        <Image src={arrowIcon} alt="" width={30} height={5} />
        <input
          type="text"
          className=" text-lg text-white bg-transparent  appearance-none focus:outline-none font-[visby-medium'] font-semibold"
          defaultValue={nameSenario}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNameSenario(e.target.value)
          }
        />{' '}
      </div>
      <div
        className={`absolute left-0 top-0 h-full overflow-y-scroll scrollbar-hide z-20 py-2 transition-all overflow-hidden ease-in-out duration-500 ${close ? ' w-0 opacity-0' : 'w-72 opacity-1'}`}
      >
        <h1 className=" text-xl my-3">
          {props.updateOrCreate ? 'Update' : 'Create'}
        </h1>
        <div className=" flex flex-col gap-3">
          <CarBoxCreate
            title="Send a message"
            description="With no responses required from visitor"
            color="bg-blue-message-primary"
            icon={<Image src={messageText} alt="" />}
            typeNode="messageNode"
          />
          <CarBoxCreate
            title="Ask a question"
            description="Ask question and store user input in variable"
            color="error-default-light"
            icon={<Image src={messageQuestion} alt="" />}
            typeNode="questionNode"
          />
          <CarBoxCreate
            title="Set conditional"
            description="Send message based on logical conditions"
            color="bg-green-emerald"
            icon={<Image src={messageTick} alt="" />}
            typeNode="conditionalNode"
          />
        </div>
        <h1 className=" text-xl my-5  ">Options</h1>
        <div className=" grid grid-cols-2 gap-3">
          <CarBoxOptionAndCatalog
            description="Subscribe to chat"
            icon={<Image src={subscribe} alt="" />}
          />
          <CarBoxOptionAndCatalog
            description="Unsubscribe to chat"
            icon={<Image src={unsubcribe} alt="" />}
          />
          <CarBoxOptionAndCatalog
            description="Trigger scenario"
            icon={<Image src={triggerSenario} alt="" />}
          />
          <CarBoxOptionAndCatalog
            description="Time to delay"
            icon={<Image src={timeDelay} alt="" />}
          />
        </div>
        <h1 className=" text-xl my-5  ">Catalog</h1>
        <div className=" grid grid-cols-2 gap-3">
          <CarBoxOptionAndCatalog
            description="Product Sets"
            icon={<Image src={preferences} alt="" />}
          />
          <CarBoxOptionAndCatalog
            description=" Single Product"
            icon={<Image src={plusicon} alt="" />}
          />
        </div>
        <h1 className=" text-xl my-5  ">Intergrations</h1>
        <div className=" grid grid-cols-2 gap-3">
          <CarBoxOptionAndCatalog
            description="Product Sets"
            icon={<Image src={momoLogos} alt="" />}
          />
          <CarBoxOptionAndCatalog
            description=" Single Product"
            icon={<Image src={omLogos} alt="" />}
          />
        </div>
        <div className=" h-28"></div>
      </div>
    </>
  );
}

export { SideBar };
