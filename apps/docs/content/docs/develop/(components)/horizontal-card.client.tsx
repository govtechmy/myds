"use client";

import HorizontalCard from "@/public/HorizontalCard";

interface Feature {
  id: number;
  title: string;
  desc: string;
  image: string;
  open: string;
  support?: string; // optional
}

export function FeaturesHorizontalCard() {
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

  return (
    <section className="flex flex-row justify-center px-[18px] py-12">
      <div className="w-full">
        <div>
            <HorizontalCard>
              {features.map((feature) => (
                <div key={feature.id}>
                  <div
                    className="flex-shrink-0 px-2"
                    style={{ width: "334px", height: "354px" }}
                  >
                    <div
                      className="relative top-0 flex h-full w-full cursor-pointer flex-col items-center overflow-hidden rounded-2xl shadow-2xl md:left-40"
                      // onClick={() => setCurrentFeatureIndex(index)}
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
                </div>
              ))}
            </HorizontalCard>
        </div>
      </div>
    </section>
  );
}