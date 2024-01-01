import PricingCard from "./PricingCard";
import { pricingCards } from "../utils/pricingCards";

export default function PricingCards() {
  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center p-5">
      {pricingCards.map((card, index) => (
        <div className="col" key={index}>
          <PricingCard card={card} />
        </div>
      ))}
    </div>
  );
}
