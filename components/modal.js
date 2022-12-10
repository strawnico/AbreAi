import { useState, useEffect } from "react";
import ReactDom from "react-dom";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Modal({ show, onClose, demand }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, [demand]);

  const handleClose = (event) => {
    event.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <section className="fixed top-0 left-0 w-full h-full flex content-center items-center bg-center bg-black bg-opacity-70">
      <div className="WppModal w-5/6 max-w-3xl rounded-2xl m-auto h-[500px] bg-[#171717] z-50">
        <div className="flex justify-end text-2xl text-white">
          <a href="#" onClick={handleClose} className=" mt-2 mr-3">
            {/* <Image src={CloseButton} alt="Close" /> */}X
          </a>
        </div>
        <div className="center pl-10 pb-10 flex">
          <div className="flex-col ml-6">
            <h1 className="pt-4 py-1 font-semibold inter text-2xl">oii</h1>
          </div>
        </div>
      </div>
    </section>
  ) : null;
  return modalContent;
}
