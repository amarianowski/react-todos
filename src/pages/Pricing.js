import PricingCards from "../components/PricingCards";
import PricingTable from "../components/PricingTable";

export default function Pricing() {
  return (
    <div className="p-3">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center w-50">
        <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
        <p class="fs-5 text-body-secondary">
          This is our pricing page. Please be aware that this website is built
          for educational and demonstration purposes only. It is not a real
          website. You are not able to choose a plan and pay for it.
        </p>
      </div>
      <PricingCards />
      <h2 className="display-6 text-center mb-4">Compare plans</h2>
      <PricingTable />
    </div>
  );
}
