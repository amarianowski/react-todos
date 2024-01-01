import { Helmet } from "react-helmet-async";

export default function SEO({ title }) {
  return (
    <Helmet>
      <title>RT - {title}</title>
    </Helmet>
  );
}
