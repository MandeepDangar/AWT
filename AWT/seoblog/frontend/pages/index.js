import Layout from "../components/Layout";
import Link from "next/link";
import React from "react";
const Index = () => {
  return (
    <Layout>
      <h2>Index Page</h2>
      <Link href="/signup" legacyBehavior>
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
