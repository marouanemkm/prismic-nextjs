import React from "react";
import { createClient } from "../../prismicio";

const ProductPage = ({ page, params }: any) => {


  return (
    <div>
      <h1 className="test">{page.data.title}</h1>
    </div>
  );
};

export default ProductPage;

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", `page${params.id}`);

  return {
    props: { page, params },
  };
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}
