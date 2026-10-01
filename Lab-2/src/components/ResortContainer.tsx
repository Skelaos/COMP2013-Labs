import ResortCard from "./ResortCard";
import type { ResortListing } from "../data/data";

interface ResortContainerList {
  data: ResortListing[];
}

export default function ResortContainer({ data }: ResortContainerList) {
  return (
    <div className="ResortContainer">
      {data.map((listing) => (
        <ResortCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
