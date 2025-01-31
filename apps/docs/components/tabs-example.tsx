import { TabsContent, TabsList, TabsTrigger } from "@/components/myds";

export function TabsContentExample() {
  return (
    <>
      <TabsContent value="1" className="py-6">
        Proton is a Malaysian automotive company and automobile corporation
        active in automobile design, manufacturing, distribution, and sales.
        Established in 1983, Proton was initially a joint venture between the
        Malaysian government and Mitsubishi Motors. The company is known for
        producing a range of vehicles, including sedans, hatchbacks, and SUVs,
        and has played a significant role in the development of Malaysia's
        automotive industry. Proton's cars are popular for their affordability,
        reliability, and innovative features, making them a preferred choice for
        many Malaysians.
      </TabsContent>
      <TabsContent value="2" className="py-6">
        Perodua is a Malaysian automobile manufacturer that specializes in
        compact cars and vehicles. Established in 1992, Perodua has become one
        of the leading automotive brands in Malaysia, known for its high-quality
        vehicles, innovative designs, and affordable prices. The company offers
        a range of cars, including hatchbacks, sedans, and SUVs, catering to
        various customer needs and preferences. Perodua's vehicles are popular a
        top choice for many Malaysian drivers.
      </TabsContent>
      <TabsContent value="3" className="py-6">
        Toyota is a Japanese multinational automotive manufacturer that produces
        a wide range of vehicles, including cars, trucks, and hybrids. Founded
        in 1937, Toyota has grown to become one of the largest automakers in the
        world, known for its high-quality vehicles, innovative technologies, and
        commitment to sustainability. The company offers a diverse lineup of
        cars, from compact sedans to luxury SUVs, catering to a global customer
        base. Toyota's vehicles are renowned for their reliability, durability,
        and advanced safety features, making them a popular choice among drivers
        worldwide.
      </TabsContent>
      <TabsContent value="4" className="py-6">
        Lamborghini is an Italian luxury sports car manufacturer that produces
        some of the most iconic and high-performance vehicles in the world.
        Founded in 1963, Lamborghini has become synonymous with cutting-edge
        design, superior engineering, and unparalleled performance. The
        company's lineup includes a range of supercars and hypercars, known for
        their distinctive styling, powerful engines, and lightning-fast speeds.
        Lamborghini's cars are coveted by automotive enthusiasts and collectors
        for their exclusivity, craftsmanship, and sheer driving pleasure.
      </TabsContent>
    </>
  );
}

export function TabsListExample() {
  return (
    <>
      <TabsList>
        <TabsTrigger value="1">Proton</TabsTrigger>
        <TabsTrigger value="2">Perodua</TabsTrigger>
        <TabsTrigger value="3">Toyota</TabsTrigger>
        <TabsTrigger value="4">Lamborghini</TabsTrigger>
      </TabsList>
    </>
  );
}
