import Layout from "../components/Layout";
import React from "react";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <h2>Signup Page</h2>
      <Link href="/" legacyBehavior>
        <a href="/">Home</a>
      </Link>
    </Layout>
  );
};

export default Signup;
