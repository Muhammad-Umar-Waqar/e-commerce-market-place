import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest){
  try {
          // const { trackingNumber, carrier} = req.body;
            // 2. Fetch Live Tracking Details using trackingNumber
            // const trackingDetails = await axios.get(`https://api.goshippo.com/tracks/${carrier}/${trackingNumber}`, {
            const trackingDetails = await axios.get(`https://api.goshippo.com/tracks/shippo/SHIPPO_TRANSIT`, {
              headers: {
                "Authorization": `ShippoToken ${process.env.SHIPPO_API_KEY}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            });
      
            // Combine all details in response
            const combinedData = {
              trackingDetails: trackingDetails.data,
          };
      
            // Send back all details
            return NextResponse.json(combinedData, { status: 200 });
        } catch (error: any) {
          console.error("Error fetching data:", error);
        return NextResponse.json(
          { error: "Failed to fetch data" , details: error.message },
          { status: 400 }
        );
        }
      
}