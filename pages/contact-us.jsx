import Input from "../components/input/Input";
import Select from "../components/input/Select";
import TextArea from "../components/input/TextArea";
import InputGroup from "../components/InputGroup";
import { LocationMarkerIcon } from "@heroicons/react/solid";

export default function ContactUs() {
  return (
    <div className="container px-5 mx-auto">
      <div className="py-10">
        <p className="text-5xl font-bold leading-10 text-gray-900 pb-10 w-1/3">
          Let’s start something
          <br />
          great together.
        </p>
        <p className="text-base leading-relaxed text-gray-500 w-1/3">
          Tell us everything about your project, we will be glad to help. Fill
          out the form below or send us an email
        </p>
      </div>
      <div className="flex pb-10 space-x-10">
        <div className="w-1/2 bg-white rounded-lg shadow px-5 py-5">
          <h1>Send Us A Message</h1>
          <form>
            <InputGroup label="Full Name">
              <Input />
            </InputGroup>
            <InputGroup label="Email">
              <Input />
            </InputGroup>
            <div className="flex space-x-2">
              <InputGroup label="Phone">
                <Input />
              </InputGroup>
              <InputGroup label="Type of Enquiry">
                <Select />
              </InputGroup>
            </div>
            <InputGroup label="Message">
              <TextArea />
            </InputGroup>
            <div className="mt-10 flex justify-end">
              <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                <p className="text-xl font-bold text-white">Send Message</p>
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 flex justify-center flex-1">
          <div>
            <h1 className="text-gray-900 font-semibold text-2xl pb-10">
              Contact Information
            </h1>
            <ul className="space-y-10 mx-auto">
              <li className="flex space-x-5">
                <span>
                  <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
                </span>
                <span>
                  <span className="text-gray-900 text-xl flex mb-1">
                    Address
                  </span>
                  <p className="w-1/2 text-gray-500">
                    House- 00, Road- 00, Sector- 00, Uttara model town, Dhaka
                    1230, Bangladesh.
                  </p>
                </span>
              </li>
              <li className="flex space-x-5">
                <span>
                  <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
                </span>
                <span>
                  <span className="text-gray-900 text-xl flex mb-1">Phone</span>
                  <p className="w-1/2 text-gray-500">+8801736548286</p>
                </span>
              </li>
              <li className="flex space-x-5">
                <span>
                  <LocationMarkerIcon className="h-5 w-5 text-blue-500" />
                </span>
                <span>
                  <span className="text-gray-900 text-xl flex mb-1">Email</span>
                  <p className="w-1/2 text-gray-500">info@kodezam.com</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
