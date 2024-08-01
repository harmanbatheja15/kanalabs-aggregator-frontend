"use client";
import React, { useState } from "react";
import { Pagination, Typography } from "antd";
import TokenBalance from "@/app/Component/TokenBalance";
import PickRoute from "@/app/Component/PickRoute";
const TransactionHistory = () => {
  const App: React.FC = () => <Pagination defaultCurrent={5} total={50} />;

  return (
    <div>
      <PickRoute />
    </div>
  );
};

export default TransactionHistory;
