import Footer from "@/components/Footer";

export default async function HomePage() {
  return (
    <>
      <main className="border-otl-divider divide-otl-gray-200 flex min-h-screen flex-col divide-y">
        <div className="grow"></div>
        <Footer
          ministry="Kementerian Digital"
          descriptionWithNewlines={`Aras 13, 14 dan 15, Blok Menara, Menara Usahawan
No. 18, Persiaran Perdana, Presint 2
Pusat Pentadbiran Kerajaan Persekutuan
62000 Putrajaya, Malaysia.`}
        />
      </main>
    </>
  );
}
