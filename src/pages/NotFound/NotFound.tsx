import { ToggleTheme } from "../../components";
import { YellowLogo, GoldLogo } from "../../constants";
import { StaticTelevision } from "./../../constants";

export const NotFound = () => {

    return (
      <div className="flex flex-col content-center h-auto w-full bg-shade-blue">
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32 text-center lg:text-left">
              <div className="container mx-auto xl:px-32 text-center lg:text-left">
                <div className="grid lg:grid-cols-2 items-center">
                  <div className="mb-12 lg:mb-0">
                    <div className="relative block rounded-lg z-1 backdrop-blur-3 shadow-lg px-6 py-12 md:px-12 lg:-mr-14"></div>
                    <a href="/" className="flex items-center justify-center py-6">
                      <ToggleTheme
                        dark={
                          <>
                            <img
                              src={YellowLogo}
                              alt=""
                              className="w-auto h-10"
                            />
                          </>
                        }
                        light={
                          <>
                            <img
                              src={GoldLogo}
                              alt=""
                              className="w-auto h-10"
                            />
                          </>
                        }
                      />
                    </a>
                    <div className="font-title font-bold text-5xl text-sun ">
                      Error - 404 <br /> Page Not Found
                    </div>
                    <div className="font-p text-lg py-4 text-white">
                      I'm sure this isn't the page you are looking for!
                      <a href="/" className="underline"> Click here </a> to visit my actual homepage
                    </div>
                  </div>
                  <div>
                    <img
                      src={StaticTelevision}
                      className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };