import {Footer, NavBar }  from "../../components";

function getAge(){
  const birthDay = 31
  const birthMonth = 10
  const birthYear = 2001

  var date = new Date();

  if (date.getMonth() >= (birthMonth-1)){
    return  date.getFullYear() - birthYear;
  }else if (date.getMonth() === (birthMonth-1)){
    if(date.getDate() === birthDay){
      return  date.getFullYear() - birthYear;
    }
  }else {
    return (date.getFullYear()-1) - birthYear;
  }
}

export const About = () => {
  return (
      <div>
          <NavBar link="About" />
          <div className="flex flex-col flex-wrap dark:text-white text-midnight-blue font-p px-5 justify-center">
            <div className="text-5xl mt-7 md:pl-24 font-title font-bold text-center md:text-6xl md:text-left">
              <h2>About Me</h2>
            </div>
            <div className="flex flex-col md:flex-row pt-8">
              <div className="flex flex-col ml-4 md:basis-1/4 border-1 dark:bg-gray-900 bg-blue-200 bg-blend-lighten rounded-lg">
                <h2 className="font-title font-bold mt-4">Personal Information</h2>
                <span ><i className="bi bi-person-badge"></i> {getAge()} years old </span>
                <span><i className="bi bi-flag"></i> American </span>
                <span><i className="bi bi-person-badge"></i> {getAge()} years old </span>
                <span><i className="bi bi-person-badge"></i> {getAge()} years old </span>
                 <span><i className="bi bi-person-badge"></i> {getAge()} years old </span>
                <p className="">

                </p>
              </div>
              <div className="ml-4 mt-6 md:mt-0 md:pt-0 dark:bg-gray-900 bg-blue-200 md:basis-3/4 rounded-lg ">
              <h2 className="font-title font-bold mt-4">Personal Information</h2>
              
              </div>
            </div>

          </div>

          <Footer />
      </div>
  );
};