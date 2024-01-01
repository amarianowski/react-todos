export default function PricingCard({ card }) {
  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{card.name}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {card.price}
          <small className="text-body-secondary fw-light">/mo</small>
        </h1>

        <ul className="list-unstyled mt-3 mb-4">
          {card.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button
          type="button"
          className="w-100 btn btn-lg btn-outline-primary"
          disabled
        >
          {card.button}
        </button>

        <small>Not available. This is not a real webpage</small>
      </div>
    </div>
  );
}
