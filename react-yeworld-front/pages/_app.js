import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const Yeworld = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Yeworld</title>
      </Head>
      <Component />
    </>
  );
};

Yeworld.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Yeworld);
