import React from "react";
import Image from "next/image";
import hero from "../../public/hero-banner.png";
import userIcon from "../../public/user-icon.svg";
import locationIcon from "../../public/location-icon.svg";
import serverIcon from "../../public/server-icon.svg";

export default function Hero() {
  return (
    <>
      <main className="flex flex-row my-20">
        <div className="mr-8">
          <h1 className="font-base text-5xl leading-[70px] py-7">
            Want anything to be
            <br />
            easy with
            <span className="font-bold"> SmartVPN.</span>
          </h1>
          <p className="text-sm text-gray-600">
            Provide a network for all your needs with ease and fun using
            SmartVPN <br />
            and discover interesting features from us.
          </p>
          <button className="my-12 min-h-11 min-w-45 py-4 px-16 bg-red-500 text-white font-bold rounded-lg hover:brightness-95 transition duration-300 ease-in-out shadow-2xl shadow-red-500/50">
            Get Started
          </button>
        </div>
        <div>
          <Image
            className="min-h-96 "
            src={hero}
            alt="SmartVPN Hero Banner: A man with an orange shirt in his desk usin his notebook"
            width={500}
            height={382}
          />
        </div>
      </main>

      <div className="flex flex-row justify-between min-w-full px-20 py-10">
        <div className="flex flex-row border-r-2 border-r-gray-100 pr-24 min-h-28 items-center">
          <div className="mr-7">
            <Image src={userIcon} alt="Smart" />
          </div>
          <div>
            <p className="font-bold text-2xl">90+</p>
            <p className="text-xl">Users</p>
          </div>
        </div>

        <div className="flex flex-row border-r-2 border-r-gray-100 pr-24 min-h-28 items-center">
          <div className="mr-7">
            <Image src={locationIcon} alt="Smart" />
          </div>
          <div>
            <p className="font-bold text-2xl">30+</p>
            <p className="text-xl">Locations</p>
          </div>
        </div>

        <div className="flex flex-row min-h-28 items-center">
          <div className="mr-7">
            <Image src={serverIcon} alt="Smart" />
          </div>
          <div>
            <p className="font-bold text-2xl">50+</p>
            <p className="text-xl">Servers</p>
          </div>
        </div>
      </div>
    </>
  );
}
