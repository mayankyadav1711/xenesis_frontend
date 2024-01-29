import React, { useState } from "react";
import logocus from "./images/logoCus.png";
import loginbg from "./images/loginbg.png";
import homecenter from "./images/homecenter.jpg";

const Account_setup = () => {
    const [profilePic, setProfilePic] = useState("0001");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");

    const changeProfileImage = () => {
        const newImage = profilePic === "0001" ? "0002" : "0001";
        setProfilePic(newImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="relative flex items-center justify-center w-full h-full min-h-[100vh] md:py-10 py-12 overflow-y-scroll">
            <div className="fixed top-0 left-0 w-full h-full min-h-[100vh] scale-100">
                <img
                    src={loginbg}
                    alt="Background 1"
                    className="h-full min-h-[calc((797/1463)*100vw)] w-full object-cover block sm:hidden lg:block image1-class"
                />

                {/* Image for mobile screens (hidden on larger screens) */}
                <img
                    src={homecenter}
                    alt="Background 2"
                    className="h-full min-h-[calc((797/1463)*100vw)] w-full  object-cover block sm:block lg:hidden image2-class"
                />
            </div>
            {/* Link to Home Div */}
            <a
                href="/"
                className="absolute top-5 left-5 flex flex-col items-center cursor-pointer hover:scale-[1.15] z-30 transition-all duration-300">
                <i className="bi bi-house-door-fill text-xl text-deepBlue-100 bg-neon-100 px-3 py-2 rounded-full"></i>
                <p className="mt-1 h-8 text-deepBlue-100 bg-neon-100 font-semibold rounded-md px-2 py-1 hidden md:block">
                    Home
                </p>
            </a>
            <div className="flex items-center lg:justify-end md:pt-0 pt-5 justify-center w-[80%] h-full">
                <form
                    onSubmit={handleSubmit}
                    className="form max-w-[500px] w-full lg:w-[90%] h-full md:px-10 sm:px-7 px-8 lg:py-12 sm:py-8 py-10 backdrop-blur-md bg-slate-800 bg-opacity-15 shadow-inner border-solid border-x-4  border-neon-100 z-10 rounded-xl">
                    <h1 className="text-white form-header-text text-center md:text-3xl sm:text-2xl text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-yellow-300 mb-10  flex justify-center items-center gap-3">
                        <img
                            src={logocus}
                            alt=""
                            className="sm:w-[70px] sm:h-[70px] w-[55px] h-[55px] shadow-white"
                        />
                        Enter Personal Details
                    </h1>
                    <div class="w-full flex flex-col items-center gap-8 mb-2">
                        <div class="flex group relative w-full justify-center -mb-2">
                            <img
                                src="https://storage.fleek.zone/4fd5a424-208b-4a62-a92c-49af4b184f6a-bucket/Avatars/0001.png"
                                alt=""
                                class="sm:w-32 w-24 sm:h-32 h-24 bg-slate-500/50 rounded-full cursor-pointer"
                                id="profile-img"
                                onclick="changeProfileImage()"
                            />
                            <input
                                type="text"
                                id="profilePic"
                                name="profilePic"
                                value="0001"
                                hidden
                            />
                        </div>
                        <div class="flex group relative w-full justify-center font-semibold">
                            <input
                                type="text"
                                id="name"
                                name="firstname"
                                spellCheck="false"
                                class="peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-neon-100 border-b-[1px] border-neon-100
                        invalid:border-pink-300 invalid:text-red-400 focus:invalid:border-pink-300"
                                placeholder=" "
                                tabIndex="1"
                            />
                            <label
                                for="name"
                                class="absolute left-0 -top-4 text-neon-100 text-sm transition-all duration-300
                        peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white">
                                Name
                            </label>
                        </div>
                        <div class="flex group relative w-full justify-center">
                            <input
                                type="text"
                                id="mobile"
                                name="mobileNo"
                                spellCheck="false"
                                class="peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-white border-b-[1px] border-neon-100
                        invalid:border-pink-300 invalid:text-red-400 focus:invalid:border-pink-300"
                                placeholder=" "
                                minLength="10"
                                maxLength="10"
                                tabIndex="2"
                                onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                            />
                            <label
                                for="mobile"
                                class="absolute left-0 -top-4 text-neon-100 text-sm transition-all duration-300
                        peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white">
                                Mobile
                            </label>
                        </div>

                        {/* <!-- Datalist For College --> */}
                        <div class="flex group relative w-full justify-center -mb-4">
                            <div class="peer relative w-full">
                                <input
                                    list="college-name"
                                    size="4"
                                    name="college"
                                    id="college"
                                    autocomplete="off"
                                    spellCheck="false"
                                    class="peer bg-transparent w-full pr-3 pl-1 py-2 transition-all duration-300 outline-none text-neon-100 border-b-[1px] border-neon-100"
                                    placeholder="Select Your College"
                                />
                                <datalist
                                    id="college-name"
                                    class="absolute top-9 left-0 h-0 w-fit opacity-0 peer-focus:!h-28 overflow-y-scroll peer-focus:opacity-100 transition-all duration-300 ">
                                    <option
                                        value="LDRP ITR"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        LDRP ITR
                                    </option>
                                    <option
                                        value="VSITR"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        VSITR
                                    </option>
                                    <option
                                        value="Ahmedabad institute of Technology"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Ahmedabad institute of Technology
                                    </option>
                                    <option
                                        value="Amiraj"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Amiraj
                                    </option>
                                    <option
                                        value="Central Institute"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Central Institute
                                    </option>
                                    <option
                                        value="LD"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        LD
                                    </option>
                                    <option
                                        value="LJ"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        LJ
                                    </option>
                                    <option
                                        value="Narnarayan Shastri"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Narnarayan Shastri
                                    </option>
                                    <option
                                        value="SAL"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        SAL
                                    </option>
                                    <option
                                        value="Rai"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Rai
                                    </option>
                                    <option
                                        value="Silver Oak"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Silver Oak{" "}
                                    </option>
                                    <option
                                        value="VGEC"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        VGEC
                                    </option>
                                    <option
                                        value="IIT Ram"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        IIT Ram
                                    </option>
                                    <option
                                        value="Nirma"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Nirma
                                    </option>
                                    <option
                                        value="Indus"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Indus
                                    </option>
                                    <option
                                        value="Khyati"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Khyati
                                    </option>
                                    <option
                                        value="Hasmukh Goswami"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Hasmukh Goswami
                                    </option>
                                    <option
                                        value="Universal Institute"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Universal Institute
                                    </option>
                                    <option
                                        value="Ahmedabad university"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Ahmedabad university
                                    </option>
                                    <option
                                        value="Apollo"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Apollo
                                    </option>
                                    <option
                                        value="Adani"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Adani
                                    </option>
                                    <option
                                        value="Asia Pacific"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Asia Pacific
                                    </option>
                                    <option
                                        value="Anant Institute"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Anant Institute
                                    </option>
                                    <option
                                        value="K.B Raval"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        {" "}
                                        K.B Raval
                                    </option>
                                    <option
                                        value="RC Technical"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        RC Technical
                                    </option>
                                    <option
                                        value="Shri NM Gopani"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Shri NM Gopani
                                    </option>
                                    <option
                                        value="Government Polytechnic for Girls"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Government Polytechnic for Girls
                                    </option>
                                    <option
                                        value="GLS"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        GLS
                                    </option>
                                    <option
                                        value="RB"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        RB
                                    </option>
                                    <option
                                        value="Amrut Mody"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Amrut Mody
                                    </option>
                                    <option
                                        value="Somlalit"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Somlalit
                                    </option>
                                    <option
                                        value="GEC Gandhinagar"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        GEC Gandhinagar
                                    </option>
                                    <option
                                        value="GIT"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        GIT
                                    </option>
                                    <option
                                        value="Shankarsingh Vaghela"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Shankarsingh Vaghela
                                    </option>
                                    <option
                                        value="PDPU"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        PDPU
                                    </option>
                                    <option
                                        value="DAIICT"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        DAIICT
                                    </option>
                                    <option
                                        value="Venus"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Venus
                                    </option>
                                    <option
                                        value="Saraswati"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Saraswati
                                    </option>
                                    <option
                                        value="Arihant"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Arihant
                                    </option>
                                    <option
                                        value="FD Institute"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        FD Institute
                                    </option>
                                    <option
                                        value="Jain Institute"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Jain Institute
                                    </option>
                                    <option
                                        value="Excel"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Excel
                                    </option>
                                    <option
                                        value="RRU"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        RRU
                                    </option>
                                    <option
                                        value="Shri Jairambhai Patel"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Shri Jairambhai Patel
                                    </option>
                                    <option
                                        value="Chaudhary"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Chaudhary
                                    </option>
                                    <option
                                        value="Old GNLU"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Old GNLU
                                    </option>
                                    <option
                                        value="S.V.KSV"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        S.V.KSV
                                    </option>
                                    <option
                                        value="Grow More"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Grow More
                                    </option>
                                    <option
                                        value="Samarth"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Samarth
                                    </option>
                                    <option
                                        value="Sabar"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Sabar
                                    </option>
                                    <option
                                        value="Alpha"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Alpha
                                    </option>
                                    <option
                                        value="KIT"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        KIT
                                    </option>
                                    <option
                                        value="Swami Narayan"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Swami Narayan
                                    </option>
                                    <option
                                        value="Ganpat"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Ganpat
                                    </option>
                                    <option
                                        value="GPERI"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        GPERI
                                    </option>
                                    <option
                                        value="Satsangi"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Satsangi
                                    </option>
                                    <option
                                        value="Merchant"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Merchant
                                    </option>
                                    <option
                                        value="SK Patel"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        SK Patel
                                    </option>
                                    <option
                                        value="Tatva "
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        Tatva
                                    </option>
                                    <option
                                        value="GEC Palanpur"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        GEC Palanpur
                                    </option>
                                    <option
                                        value="GEC Patan"
                                        class="bg-gray-600 first-of-type:rounded-t last-of-type:rounded-b text-orange-300 text-sm px-3 py-2 cursor-pointer transition-colors duration-200">
                                        GEC Patan
                                    </option>
                                </datalist>
                            </div>

                            <label
                                for="college"
                                class="absolute left-0 -top-4 text-white text-sm transition-all duration-300
                        peer-focus:text-sm peer-focus:-top-4 peer-invalid:text-red-400
                        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white">
                                College Name
                            </label>
                        </div>

                        <input
                            type="submit"
                            value="Register"
                            tabIndex="4"
                            className="w-fit bg-neon-100 text-deepBlue-100 hover:shadow-2xl 3d-button hover:-translate-y-2 hover:border-neon-100  hover:saturate-200 outline-none mt-5 xl:px-16 lg:px-12 sm:px-10 px-9 py-1.5 text-[#f0e2ea] xl:text-lg lg:text-md font-semibold cursor-pointer transition-all duration-200 focus:-translate-y-1 hover:ring hover:ring-yellow-100 rounded-md"
                            />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Account_setup;
