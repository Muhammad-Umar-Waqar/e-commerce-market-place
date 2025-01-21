import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const { addressFrom, addressTo, parcels, orderId, totalAmount } = await req.json();

    // Validate required fields
    if (!addressFrom || !addressTo || !parcels) {
      return NextResponse.json(
        { error: "Missing required fields: addressFrom, addressTo, parcels" },
        { status: 400 }
      );
    }

    // Call Shippo API
    const shippoResponse = await fetch("https://api.goshippo.com/shipments/", {
      method: "POST",
      headers: {
        Authorization: `ShippoToken shippo_test_9963812e4b73c909e3712983995385d68dec5481`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address_from: addressFrom,
        address_to: addressTo,
        parcels,
        async: false,
      }),
    });

    // Handle Shippo API errors
    if (!shippoResponse.ok) {
      const errorData = await shippoResponse.json();
      console.error("Shippo API Error:", errorData);
      return NextResponse.json({ error: "Failed to create shipment", details: errorData }, { status: 500 });
    }

    // Extract data from Shippo API response
    const shipmentData = await shippoResponse.json();

    // Prepare response back to the client
    const responsePayload = {
      orderId,
      totalAmount,
      trackingNumber: shipmentData.object_id,
      eta: shipmentData.eta || "3-5 business days",
      status: "Shipment created successfully!",
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/shippoOrder:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the shipment", details: error.message },
      { status: 500 }
    );
  }
}
