import { TabsContent, TabsList, TabsTrigger } from "@/components/myds";

export function TabsContentExample({ lang = "eng" }: { lang?: "eng" | "bm" }) {
  return lang == "eng" ? (
    <>
      <TabsContent value="1" className="py-6">
        {`A novel is a long work of fiction that presents a complete story with
        characters, plot, and setting. It typically encompasses various themes
        such as love, family, life struggles, and societal challenges. Novels
        allow readers to immerse themselves in new worlds through the author's
        imagination.`}
      </TabsContent>

      <TabsContent value="2" className="py-6">
        A short story is a brief work of fiction that can be read in one
        sitting. Despite its concise format, it still contains engaging plots
        and impactful characters. This compact format requires precise writing
        to effectively deliver its message.
      </TabsContent>

      <TabsContent value="3" className="py-6">
        Poetry is a creative form of writing that uses beautiful and rhythmic
        language to convey feelings and ideas. Each line of poetry is carefully
        chosen to create a deep impact on the reader, whether through rhyme,
        metaphor, or symbolism.
      </TabsContent>

      <TabsContent value="4" className="py-6">
        Drama is a work written for stage performance. It contains dialogue
        between characters and clear stage directions. Drama can evoke various
        emotions in the audience, from comedy to tragedy, while delivering
        meaningful social messages.
      </TabsContent>
    </>
  ) : (
    <>
      <TabsContent value="1" className="py-6">
        Novel merupakan karya fiksyen panjang yang memaparkan kisah yang lengkap
        dengan watak, plot dan latar. Ia biasanya mengandungi pelbagai tema
        seperti cinta, keluarga, perjuangan hidup dan cabaran masyarakat.
      </TabsContent>

      <TabsContent value="2" className="py-6">
        Cerpen adalah karya fiksyen pendek yang boleh dibaca dalam satu waktu.
        Walaupun ringkas, cerpen tetap mempunyai plot yang menarik dan
        watak-watak yang berkesan.
      </TabsContent>

      <TabsContent value="3" className="py-6">
        Puisi adalah bentuk penulisan kreatif yang menggunakan bahasa indah dan
        berirama untuk menyampaikan perasaan dan idea. Setiap baris puisi
        dipilih dengan teliti untuk memberi kesan yang mendalam.
      </TabsContent>

      <TabsContent value="4" className="py-6">
        Drama adalah karya yang ditulis untuk dipersembahkan di pentas. Ia
        mengandungi dialog antara watak-watak dan arahan pentas yang jelas.
        Drama boleh membawa pelbagai emosi kepada penonton.
      </TabsContent>
    </>
  );
}

export function TabsListExample({ lang = "eng" }: { lang?: "eng" | "bm" }) {
  return lang === "eng" ? (
    <>
      <TabsList>
        <TabsTrigger value="1">Novel</TabsTrigger>
        <TabsTrigger value="2">Short Story</TabsTrigger>
        <TabsTrigger value="3">Poetry</TabsTrigger>
        <TabsTrigger value="4">Drama</TabsTrigger>
      </TabsList>
    </>
  ) : (
    <TabsList>
      <TabsTrigger value="1">Novel</TabsTrigger>
      <TabsTrigger value="2">Cerpen</TabsTrigger>
      <TabsTrigger value="3">Puisi</TabsTrigger>
      <TabsTrigger value="4">Drama</TabsTrigger>
    </TabsList>
  );
}
