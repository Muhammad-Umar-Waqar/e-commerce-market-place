// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { carrier, trackingNumber } = req.body;

//   if (!carrier || !trackingNumber) {
//     return res.status(400).json({ message: "Carrier and Tracking Number are required" });
//   }

//   try {
//     const response = await axios.get(
//       `https://api.goshippo.com/tracks/${carrier}/${trackingNumber}/`,
//       {
//         headers: {
//           Authorization: `ShippoToken  shippo_test_9963812e4b73c909e3712983995385d68dec5481`, // Replace with your Shippo API key
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );

//     res.status(200).json(response.data);
//   } catch (error: any) {
//     console.error("Error tracking shipment:", error.response?.data || error.message);
//     res.status(500).json({ message: "Failed to track shipment", error: error.response?.data });
//   }
// }
