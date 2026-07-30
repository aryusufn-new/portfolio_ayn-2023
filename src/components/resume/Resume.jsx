import React from "react";
// import {  AiFillInstagram, } from "react-icons/ai";
import { AiFillInstagram, AiOutlineGlobal } from "react-icons/ai";


const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  NOC project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  PT Dutakom Wibawa Putra
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Agustus 2025 - Now
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  -RnD PPPoE Server menggunakan Accel-PPP di VM maupun Bare-metal<br></br>
                  -Integrasi MikroTik client ke sistem billing berbasis RADIUS & troubleshooting<br></br>
                  -RnD pengiriman data Accounting RADIUS ke endpoint aplikasi billing via script MikroTik<br></br>
                  -Pemanfaatan MikroTik API untuk otomasi dan manajemen jaringan<br></br>
                  -RnD script MikroTik untuk instalasi dan aktivasi fitur Container<br></br>
                  -Setup & konfigurasi PPPoE Server dan Hotspot Server pada MikroTik<br></br>
                </p>
              </div>
            </div>
                  <br></br>
                <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Provisioning NOC
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  PT Sumber Data Indonesia
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Maret 2024 - Juli 2025
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  -Penanganan tiket gangguan jaringan dari Customer Service & koordinasi dengan vendor<br></br>
                  -Aktivasi pelanggan retail & corporate via OLT ZTE dan Switch Extreme<br></br>
                  -Troubleshooting & konfigurasi perangkat (MikroTik, ONT ZTE/Huawei, OLT, Switch Extreme)<br></br>
                  -Konfigurasi Access Point Ruijie Cloud dan Ubiquiti<br></br>
                  -Monitoring jaringan pelanggan via NMS (The Dude, Cacti)<br></br>
                  -Instalasi NVR & CCTV Hikvision<br></br>
                  -Pembuatan laporan harian, mingguan, dan bulanan maintenance pelanggan<br></br>
                </p>
              </div>
            </div>
                        <br></br>
                <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  IT Support - Internship
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Dinas Perhubungan Kabupaten Kediri
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2022 - Agustus 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  -Membangun website profil resmi Dinas Perhubungan Kabupaten Kediri (masih aktif digunakan)
                  -Instalasi & konfigurasi router di lingkungan kantor<br></br>
                  -Entri data administratif<br></br>
                  {/* -Menganalisa program yang tidak sesuai dengan prosedur.<br></br>
                  -Mengumpulkan data yang diperlukan untuk membangun sistem informasi.<br></br> */}
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  S1 Sistem Informasi
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Universitas Terbuka
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2025 - Now
                </span>
                {/* <p className=" text-[.9rem] text-justify text-gray-500">
                  
                </p> */}
              </div>
            </div>
            <br></br>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Diploma 3 Manajemen Informatika, PSDKU Kediri
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Politeknik Negeri Malang
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 - Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  IPK 3.69 dari 4.00
                </p>
              </div>
            </div>
            <br></br>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
            Business
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                      Sewa HT Kediri Raya
                    </h1>
                    <div className="flex items-center gap-3 mt-2">
                      {/* Instagram */}
                      <a href="https://www.instagram.com/sewaht.kediriraya/" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                      </a>

                      {/* Website */}
                      <a href="https://sewahtkediriraya.ayngroup.id" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGlobal className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                      </a>
                    </div>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Kota Kediri
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  24 Februari 2023 - Now
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  lebih dari 1000 user mulai dari WO, Organisasi, Instansi, Fotografer dll.
                </p>
              </div>
            </div>
            <br></br>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  AYNETWORK.ID 
                </h1>
                <div className="flex items-center gap-3 mt-2">
                      {/* Instagram */}
                      <a href="https://www.instagram.com/aynetwork.id/" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                      </a>

                      {/* Website */}
                      <a href="https://aynetwork.id" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGlobal className="h-[1.8rem] w-[1.8rem] hover:scale-125" />
                      </a>
                    </div>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Kota Kediri
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  24 Februari 2021 - Now
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  -Pengelola jaringan internet lokal sebagai mitra ISP. Mengimplementasikan solusi network automation berbasis n8n, GenieACS, dan MikroTik API."<br></br>
                  -Mitra / Subnet PT Jaringan Lintas Utara.<br></br>
                </p>
              </div>
            </div>
            <br></br>
            
            <div className=" relative">
              {/* design */}
              {/* <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div> */}
              {/* design */}
              {/* <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  MIPA
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  SMAN 5 TARUNA BRAWIJAYA JAWA TIMUR
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2017 - Year 2020
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Nilai Rata - rata 86,33
                </p>
              </div> */}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
