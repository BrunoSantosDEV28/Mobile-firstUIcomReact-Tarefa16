import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductDetails from "../components/ProductDetails";
import SellerInfo from "../components/SellerInfo";
import UserComments from "../components/UserComments";
import UserQuestions from "../components/UserQuestions";
import RelatedProducts from "../components/RelatedProducts";
import { Container, Grid } from "@mui/material";

const ProductPage = ({
  product,
  seller,
  comments,
  questions,
  relatedProducts,
}) => {
  return (
    <Container>
      <Header />
      <Menu />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <ProductDetails product={product} />
          <SellerInfo seller={seller} />
          <UserComments comments={comments} />
          <UserQuestions questions={questions} />
        </Grid>
        <Grid item xs={12} md={4}>
          <RelatedProducts relatedProducts={relatedProducts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
