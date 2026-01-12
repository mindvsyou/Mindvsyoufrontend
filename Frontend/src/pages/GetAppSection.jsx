const GetAppSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3c4852]">
            Get the learning <br /> app
          </h2>

          <p className="mt-4 text-gray-600 text-base max-w-md">
            Download lessons and learn anytime, anywhere with the Unacademy app
          </p>

          {/* Store Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <img
              src="/app-store.png"
              alt="Download on the App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="/google-play.png"
              alt="Get it on Google Play"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center">
          <img
            src="/app-android.png"
            alt="Unacademy App Android"
            className="h-[420px] z-10"
          />
          <img
            src="/app-ios.png"
            alt="Unacademy App iOS"
            className="h-[380px] absolute right-0 top-10"
          />
        </div>
      </div>
    </section>
  );
};

export default GetAppSection;
