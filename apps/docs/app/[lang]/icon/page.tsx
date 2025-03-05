import SearchBarIcons from "@/components/icon/Searchbar";
import { iconDataList } from "@/components/icon/IconDataList";

export default function Hello() {
  return (
    <div className="container">
      <div className="from-primary-700 via-primary-300 to-warning-200 my-4 rounded-lg bg-gradient-to-r py-24 text-gray-800">
        <h1 className="mx-auto max-w-2xl text-center text-5xl">
          Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
        </h1>
      </div>
      <SearchBarIcons iconDataList={iconDataList}></SearchBarIcons>
    </div>
  );
}
