import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/productContainer/ProductContainer";
import Footer from "../../../src/components/footer/Footer";

export default function Product() {
  const { query, isReady } = useRouter();
  const [product, setProduct] = useState({});

  const apiUrl = process.env.apiUrl;
  const id = query.id;

  useEffect(() => {
    if (id != undefined) {
      fetch(`${apiUrl}/nfts/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [isReady]);

  return Object.keys(product).length == 0 ? (
    <div>Loading</div>
  ) : (
    <>
      <Header />
      <ProductContainer
        name={product.name}
        owner={product.owner}
        price={product.price}
        currency={product.currency}
        likes={product.likes}
        details={product.details}
        source={product.source}
        auction_end={product.auction_end}
        bids={product.bids}
      />
      <Footer />
    </>
  );
}
