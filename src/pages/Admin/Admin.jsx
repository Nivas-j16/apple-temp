import MainLayout from "../../components/layout/MainLayout";

function Admin() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to Apple Temp Admin Panel
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold">
              Templates
            </h2>

            <p className="text-3xl font-bold mt-4">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold">
              Orders
            </h2>

            <p className="text-3xl font-bold mt-4">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold">
              Customers
            </h2>

            <p className="text-3xl font-bold mt-4">
              0
            </p>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Admin;