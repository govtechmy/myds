"use client";

import { Button } from "@govtechmy/myds-react/button";
import {
    PhoneIcon,
    EmailIcon,
    FacebookIcon,
    InstagramIcon,
    PinIcon,
    TwitterXIcon,
    TiktokIcon,
} from "@govtechmy/myds-react/icon";

export default function ContactUsTemplate() {
    return (
        <div className="bg-bg-gray-50 min-h-screen">
            <div className="max-w-full px-6 py-10 border-b border-outline-200 text-center">
                <h1 className="font-boldtext-center font-poppins text-[2rem]/10 font-semibold sm:text-hmd">Contact Us</h1>
            </div>

            <div className="max-w-4xl px-4 mx-auto py-16 grid grid-cols-1 xl:grid-cols-[40%_60%] gap-12 items-start justify-center">
                <div className="space-y-4.5 lg:py-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground-primary text-txt-primary">
                        Office
                    </p>
                    <h2 className="py-2 text-xl font-semibold">Ministry of Digital</h2>
                    <p className="text-sm text-black-700">
                        Aras 13, 14 &amp; 15, Blok Menara, Menara Usahawan
                        <br />
                        No. 18, Persiaran Perdana, Presint 2
                        <br />
                        Pusat Pentadbiran Kerajaan Persekutuan
                        <br />
                        62000 Putrajaya, Malaysia
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6 ">
                        <Button
                            variant="default-outline"
                            size="medium"
                            className="rounded-full "
                            asChild
                        >
                            <a
                                href="https://goo.gl/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PinIcon className="mr-2 text-txt-primary" />
                                <p className="text-txt-primary">Google Maps</p>
                            </a>
                        </Button>
                        <Button
                            variant="default-outline"
                            size="medium"
                            className="rounded-full"
                            asChild
                        >
                            <a
                                href="https://waze.com/ul"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PinIcon className="mr-2 text-txt-primary" />
                                <p className="text-txt-primary">Waze</p>
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-outline-200 shadow-lg">
                    <iframe
                        title="Google Map"
                        className="rounded-lg border border-outline-200 shadow-md w-full aspect-video"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://maps.google.com/maps?width=800&height=450&hl=en&q=${encodeURIComponent(
                            "4, Lebuh Bestari, Presint 2, 62100 Putrajaya, Wilayah Persekutuan Putrajaya"
                        )}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    />
                </div>
            </div>

            <div className="bg-surface-white border-t border-outline-200 py-8">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12">
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_auto] xl:items-stretch divide-y xl:divide-y-0 xl:divide-x divide-washed-100 border-washed-100 xl:border-x">
                        <a
                            href="tel:+603-8000 example"
                            className="flex items-center gap-4.5 px-6 py-8 min-h-[96px]"
                        >
                            <div className="flex size-[42px] items-center justify-center rounded-full bg-brand-50 p-[9px] text-foreground-primary bg-bg-washed">
                                <PhoneIcon className="text-txt-primary" />
                            </div>
                            <div className="space-y-1 font-semibold">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
                                    Telephone
                                </p>
                                <p className="text-lg text-foreground font-bold">+603-8000 example</p>
                            </div>
                        </a>

                        <a
                            href="mailto:example@digital.gov.my"
                            className="flex items-center gap-4.5 px-6 py-8 min-h-[96px]"
                        >
                            <div className="flex size-[42px] items-center justify-center rounded-full bg-brand-50 p-[9px] text-foreground-primary bg-bg-washed">
                                <EmailIcon className="text-txt-primary" />
                            </div>
                            <div className="space-y-1 font-semibold">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
                                    E-mail
                                </p>
                                <p className="text-lg text-foreground font-bold">
                                    example@digital.gov.my
                                </p>
                            </div>
                        </a>

                        <div className="grid grid-cols-4 divide-x divide-washed-100">
                            {[
                                { icon: <FacebookIcon className="text-txt-primary" />, label: "Facebook", url: "#" },
                                { icon: <InstagramIcon className="text-txt-primary" />, label: "Instagram", url: "#" },
                                { icon: <TwitterXIcon className="text-txt-primary" />, label: "X", url: "#" },
                                { icon: <TiktokIcon className="text-txt-primary" />, label: "Tiktok", url: "#" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-2 py-6 md:gap-3"
                                >
                                    <div className="flex size-[42px] items-center justify-center rounded-full bg-bg-washed">
                                        {s.icon}
                                    </div>
                                    <span className="text-sm text-black-700">{s.label}</span>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
