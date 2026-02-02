'use client';

import React from "react";
import BudgetList from './_components/BudgetList';

const Budgets = () => {
  return (
    <div className="p-10">
      <h2 className="fon-bold text-3xl">My Budgets</h2>
      <BudgetList />
    </div>
  )
}

export default Budgets;
