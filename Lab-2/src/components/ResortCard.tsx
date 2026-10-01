import type { ResortListing } from "../data/data";

export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  let ratingColor = "green";
  if (rating < 4) {
    ratingColor = "red";
  }
  return (
    <div className="ResortCard">
      <img src={pic} width="150px"></img>
      <h2>{country}</h2>
      <p>
        <i>{location}</i>
      </p>
      <p style={{ color: ratingColor }}>★{rating}</p>
      <p>${price}/night</p>
    </div>
  );
}
