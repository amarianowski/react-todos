import { pricingFeatures as features } from "../utils/pricingFeatures";
import { pricingHeaders as headers } from "../utils/pricingHeaders";

export default function PricingTable() {
  return (
    <div className="table-responsive p-5 mx-5">
      <table className="table text-center">
        <thead>
          <tr>
            <th style={{ width: "34%" }}></th>
            {features.map((f) => (
              <th key={f.name} style={{ width: "22%" }}>
                {f.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {headers.map((header) => (
            <tr key={header.id}>
              <th scope="row" className="text-start">
                {header.name}
              </th>
              {features.map((feature) => (
                <td key={feature.name}>
                  {feature[header.id] ? <i className="bi bi-check2"></i> : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
