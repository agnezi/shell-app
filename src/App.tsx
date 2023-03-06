import React, { Suspense, lazy } from "react";

const FirsHome = lazy(() => import("first-app/Home") as any);

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Teste</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FirsHome />
      </Suspense>
    </div>
  );
};

export default App;
