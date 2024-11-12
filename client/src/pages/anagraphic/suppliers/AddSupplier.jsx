import React, { useEffect, useState } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addClient, RESET } from "../../../app/features/clientSlice";

const AddSupplier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isSuccess } = useSelector((state) => state.client);

  const [formData, setFormData] = useState({
    nominative: "",
    email: "",
    mobilePhone: "",
    telephone: "",
    fax: "",
    vatNo: "",
    taxCode: "",
    cap: "",
    address: "",
    city: "",
    province: "",
    iban: "",
    paymentMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addClient(formData));
    if (isSuccess) {
      navigate("/clients");
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Add Suppliers</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Nominative
              </label>
              <input
                type="text"
                name="nominative"
                value={formData.nominative}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Mobile Phone
              </label>
              <input
                type="text"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter mobile phone"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Telephone
              </label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter telephone"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Fax</label>
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter fax"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">VAT No</label>
              <input
                type="text"
                name="vatNo"
                value={formData.vatNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter Vat Number"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Tax Code</label>
              <input
                type="text"
                name="taxCode"
                value={formData.taxCode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter fiscal code"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">CAP</label>
              <input
                type="text"
                name="cap"
                value={formData.cap}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter CAP"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Province</label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter province"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">IBAN</label>
              <input
                type="text"
                name="iban"
                value={formData.iban}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter IBAN"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">
                Payment Mode
              </label>
              <input
                type="text"
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter payment mode"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded mr-3 hover:bg-green-600"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddSupplier;
