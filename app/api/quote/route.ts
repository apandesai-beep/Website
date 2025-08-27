import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, description, urgency } = body

    // Validate required fields
    if (!name || !email || !phone || !serviceType) {
      return NextResponse.json({ error: "Name, email, phone, and service type are required" }, { status: 400 })
    }

    // Generate a quote ID
    const quoteId = `REQ-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Here you would typically:
    // 1. Save quote request to database
    // 2. Send confirmation email to customer
    // 3. Notify sales team
    // 4. Calculate preliminary pricing based on service type

    console.log("Quote request:", {
      quoteId,
      name,
      email,
      phone,
      serviceType,
      description,
      urgency,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return NextResponse.json(
      {
        success: true,
        quoteId,
        message: "Quote request received! We will contact you within 2 hours with a detailed estimate.",
        estimatedResponse: urgency === "emergency" ? "30 minutes" : "2 hours",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Failed to process quote request. Please try again." }, { status: 500 })
  }
}
