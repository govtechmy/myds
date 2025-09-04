"use client";

import { useState } from "react";
import HorizontalCard from "@/public/HorizontalCard";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@govtechmy/myds-react/dialog";

interface Feature {
  id: number;
  title: string;
  desc: string;
  image: string;
  open: string;
  support?: string; // optional
}

export function FeaturesCarousel() {
  const features: Feature[] = [
    {
      id: 1,
      image: "/assets/content4/state1.png",
      title: "Pengalaman Mesra Pengguna",
      open: "/assets/content4/pengalaman_mesra.png",
      desc: "Samada anda menggunakan MyGOV Malaysia untuk melakukan semakan atau permohonan, MyGOV Malaysia menawarkan pengalaman interaksi yang intuitif dengan antaramuka yang kemas dan intuitif.",
    },
    {
      id: 2,
      image: "/assets/content4/state2.png",
      title: "Akaun Berasaskan",
      support: "/mydigitalid.png",
      open: "/assets/content4/mygov_mobile.png",
      desc: "Untuk menggunakan MyGOV Malaysia, anda hanya perlu menggunakan MyDigital ID iaitu sistem pengenalan diri rakyat Malaysia yang sah dan selamat untuk kegunaan dalam talian.",
    },
    {
      id: 3,
      image: "/assets/content4/state3.jpg",
      title: "Daripada lesen ke peperiksaan, semak semuanya di sini",
      open: "/assets/content4/lesen.png",
      desc: "MyGOV Malaysia dapat menghantar notifikasi penting khusus untuk individu seperti amaran bencana yang dihantar terus kepada anda.",
    },
    {
      id: 4,
      image: "/assets/content4/state4.png",
      title: "Terima notifikasi yang relevan dengan anda",
      open: "/assets/content4/notifikasi.png",
      desc: "MyGOV Malaysia dapat menghantar notifikasi penting khusus untuk individu seperti amaran bencana yang dihantar terus kepada anda.",
    },
    {
      id: 5,
      image: "/assets/content4/state5.png",
      title: "... dan pelbagai fungsi akan datang",
      open: "/assets/content4/features_lain.png",
      desc: "MyGOV Malaysia sedang giat membangunkan pelbagai fungsi baharu yang akan dilancarkan pada masa hadapan, seperti permohonan dan pembayaran.",
    },
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  return (
    <section className="flex flex-row justify-center px-[18px] py-12">
      <div className="w-full">
        <Dialog>
          
            {/* Carousel Track */}
            <HorizontalCard>
              {features.map((feature, index) => (
                <DialogTrigger key={feature.id}>
                  <div
                    className="flex-shrink-0 px-2"
                    style={{ width: "334px", height: "354px" }}
                  >
                    <div
                      className="relative top-0 flex h-full w-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl shadow-2xl md:left-40"
                      onClick={() => setCurrentFeatureIndex(index)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative h-full w-full bg-white">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 334px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
              ))}
            </HorizontalCard>
          

          <DialogBody className="w-full md:!max-w-[800px]">
            <DialogClose>
              <button
                className="absolute right-4 top-4 rounded-lg border border-[#E4E4E7] p-1.5 text-gray-500 hover:text-gray-800"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </DialogClose>

            <DialogHeader className="pb-0">
            </DialogHeader>

            <DialogContent>
              <div className="w-full flex flex-col items-center justify-center gap-8 md:flex-row">
                <div>
                  <img
                    src={features[currentFeatureIndex].open}
                    alt={features[currentFeatureIndex]?.title ?? ""}
                    width={222}
                    height={275}
                  />
                </div>

                <div>
                  <h2 className="mb-4 text-base font-semibold">
                    {features[currentFeatureIndex]?.title ?? ""}
                  </h2>
                  <p className="mt-4 font-normal max-w-sm">
                    {features[currentFeatureIndex]?.desc ?? ""}
                  </p>
                </div>
              </div>
            </DialogContent>
            
            <DialogFooter className="pt-0"></DialogFooter>
          </DialogBody>
        </Dialog>
      </div>
    </section>
  );
}