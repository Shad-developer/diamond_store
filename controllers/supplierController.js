const Supplier = require("../models/supplierModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// Create new client
module.exports.addNewSupplier = asyncHandler(async (req, res) => {
  try {
    const { user } = req;
    const isUser = await User.findById(user._id);

    if (!isUser) {
      return res.status(404).json({ error: true, message: "User not found" });
    }

    const {
      nominative,
      email,
      mobilePhone,
      telephone,
      fax,
      vatNo,
      taxCode,
      address,
      city,
      province,
      cap,
      iban,
      paymentMode,
    } = req.body;

    const newSupplier = new Supplier({
      nominative,
      email,
      mobilePhone,
      telephone,
      fax,
      vatNo,
      taxCode,
      address,
      city,
      province,
      cap,
      iban,
      paymentMode,
    });

    const savedSupplier = await newSupplier.save();
    res.status(201).json({ error: false, message:"Supplier Added Successful", supplier: savedSupplier });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});


// // Get all clients
// module.exports.getAllClients = asyncHandler(async (req, res) => {
//   try {
//     const clients = await Client.find();
//     res.json({ error: false, clients });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: true, message: "Failed to fetch clients" });
//   }
// });

// // Get client by ID
// module.exports.getClientById = asyncHandler(async (req, res) => {
//   try {
//     const client = await Client.findById(req.params.id);
//     if (!client) {
//       return res.status(404).json({ error: true, message: "Client not found" });
//     }
//     res.json({ error: false, client });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: true, message: "Failed to fetch client" });
//   }
// });

// // Update a client
// module.exports.updateClient = asyncHandler(async (req, res) => {
//   try {
//     const updatedClient = await Client.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedClient) {
//       return res.status(404).json({ error: true, message: "Client not found" });
//     }
//     res.json({ error: false, message:"Client Updated", client: updatedClient });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: true, message: "Failed to update client" });
//   }
// });

// // Delete a client
// module.exports.deleteClient = asyncHandler(async (req, res) => {
//   try {
//     const deletedClient = await Client.findByIdAndDelete(req.params.id);
//     if (!deletedClient) {
//       return res.status(404).json({ error: true, message: "Client not found" });
//     }
//     res.json({ error: false, message: "Client deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: true, message: "Failed to delete client" });
//   }
// });
