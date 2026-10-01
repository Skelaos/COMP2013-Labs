import type { ResortListing } from "../data/data";

export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  return (
    <div className="ResortCard">
      <img src={pic} width="100px"></img>
      <h2>{country}</h2>
      <h2>{location}</h2>
      <h2>★{rating}</h2>
      <h2>${price}/night</h2>
    </div>
  );
}
