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
        <>
            <div className="bg-bg-gray-50 border-b border-outline-200">
                <div className="max-w-full px-6 py-10 text-center">
                    <h1 className="text-center font-poppins text-[2rem] font-semibold sm:text-hmd">
                        Contact Us
                    </h1>
                </div>
            </div>

            <main className="divide-y divide-washed-100">
                <section className="bg-bg-gray-50">
                    <div className="gap-6 border-washed-100 py-12 lg:py-[84px] xl:mx-auto xl:max-w-7xl xl:grid xl:grid-cols-12 xl:border-x">
                        <div className="col-span-10 col-start-2 flex items-center justify-center">
                            <div className="flex flex-col gap-12 sm:flex-row px-4 sm:px-0">
                                <div className="space-y-4.5 sm:w-1/3 lg:py-16">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
                                        Office
                                    </p>

                                    <div className="space-y-2">
                                        <p className="text-xl font-semibold">Ministry of Digital</p>
                                        <p className="text-sm text-txt-black-700">
                                            Aras 13, 14 &amp; 15, Blok Menara, Menara Usahawan
                                            <br />
                                            No. 18, Persiaran Perdana, Presint 2
                                            <br />
                                            Pusat Pentadbiran Kerajaan Persekutuan
                                            <br />
                                            62000 Putrajaya, Malaysia
                                        </p>
                                    </div>

                                    <div className="flex gap-2 pt-3">
                                        {[
                                            {
                                                name: "Google Maps",
                                                href: "https://www.google.com/maps/dir//Menara+Usahawan",
                                            },
                                            {
                                                name: "Waze",
                                                href: "https://www.waze.com/en/live-map/directions/menara-usahawan-persiaran-perdana-18-putrajaya",
                                            },
                                        ].map(({ name, href }) => (
                                            <Button
                                                key={name}
                                                variant="default-outline"
                                                size="medium"
                                                className="rounded-full"
                                                asChild
                                            >
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <PinIcon className="mr-2" />
                                                    <span className="font-medium">{name}</span>
                                                </a>
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <iframe
                                    title="Google Map"
                                    className="rounded-[32px] border border-outline-200 shadow-[0_30px_100px_-10px_#4C53614D] max-sm:aspect-square sm:w-2/3"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://maps.google.com/maps?width=800&height=450&hl=en&q=${encodeURIComponent(
                                        "Menara Usahawan, Persiaran Perdana, Presint 2, 62100 Putrajaya"
                                    )}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-white">
                    <div className="xl:mx-auto xl:max-w-7xl">
                        <div className="flex w-full flex-col divide-washed-100 border-washed-100">
                            <div className="grid w-full flex-auto grid-cols-2 divide-washed-100 px-0 max-md:divide-y md:divide-x">
                                {[
                                    {
                                        icon: <PhoneIcon className="size-6" />,
                                        title: "Telephone",
                                        desc: "+603-8000 example",
                                        href: "tel:+603-8000 example",
                                    },
                                    {
                                        icon: <EmailIcon className="size-6" />,
                                        title: "E-mail",
                                        desc: "example@digital.gov.my",
                                        href: "mailto:example@digital.gov.my",
                                    },
                                ].map(({ icon, title, desc, href }) => (
                                    <a
                                        key={title}
                                        href={href}
                                        className="group flex gap-4.5 border-washed-100 px-6 py-8 max-md:col-span-2 md:py-[34px]"
                                    >
                                        <div className="size-[42px] rounded-full bg-brand-50 p-[9px] text-foreground-primary">
                                            {icon}
                                        </div>
                                        <div className="space-y-1 font-semibold">
                                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
                                                {title}
                                            </p>
                                            <p className="text-lg text-foreground group-hover:underline">
                                                {desc}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="grid flex-none grid-flow-row grid-cols-4 divide-x divide-washed-100 px-0 max-md:divide-y">
                                {[
                                    { icon: <FacebookIcon className="size-6" />, label: "Facebook", url: "#" },
                                    { icon: <InstagramIcon className="size-6" />, label: "Instagram", url: "#" },
                                    { icon: <TwitterXIcon className="size-6" />, label: "X", url: "#" },
                                    { icon: <TiktokIcon className="size-6" />, label: "Tiktok", url: "#" },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-txt-black-700 hover:text-foreground hover:underline max-md:col-span-2"
                                    >
                                        <div className="col-span-1 flex flex-none flex-col items-center gap-2 py-6 md:gap-3 xl:w-[100px]">
                                            <div className="flex size-[42px] items-center justify-center rounded-full bg-brand-50 text-foreground-primary">
                                                {social.icon}
                                            </div>
                                            {social.label}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
