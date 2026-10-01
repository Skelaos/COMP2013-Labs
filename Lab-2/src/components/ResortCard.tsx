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
      <img src={pic} width="150px"></img>
      <h2>{country}</h2>
      <p>
        <i>{location}</i>
      </p>
      <p style={{ color: rating > 4.0 ? "green" : "red" }}>★{rating}</p>
      <p>${price}/night</p>
    </div>
  );
}
