import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";

const CallToAction = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.Body} />
    {/* <PrismicText  field={slice.primary.buttonText} /> */}
    <img src={slice.primary.backgroundImage.url} alt={slice.primary.backgroundImage.alt} />
  </section>
);

export default CallToAction;
