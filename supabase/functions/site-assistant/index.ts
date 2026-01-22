import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ChatMsg = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the website assistant for Gissat, an environmental consultancy in Uganda (est. 1991).

CRITICAL STYLE RULES:
- Keep responses to 2-3 sentences MAX
- Use bullet points only when listing 3+ items
- Always end with a relevant section link when applicable

SECTION LINKS (use markdown format):
- About us → [View About](#about)
- Our sectors → [View Sectors](#sectors)  
- Services we offer → [View Services](#services)
- Project examples → [View Projects](#projects)
- Meet the team → [View Team](#team)
- Our clients → [View Clients](#clients)
- Career opportunities → [View Careers](#careers)
- Get a quote / Contact → [Contact Us](#contact)

SITE KNOWLEDGE:
- Sectors: Mining, Infrastructure, Oil & Gas, Industry, Built Environment, Power & Energy
- Services: EIA/SIA, ISO 14001, Permitting, Compliance Monitoring, Environmental Audits, Air Quality
- Projects: Anderita Beach Hotel, Onomo Hotel Kampala, Latitude 0 Degrees, Vocational Dev Centre

For quotes/pricing: Direct to [Contact Us](#contact) and ask about their project type.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = (await req.json().catch(() => ({}))) as { messages?: ChatMsg[] };
    const safeMessages = Array.isArray(messages) ? messages.slice(-12) : [];

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...safeMessages],
      }),
    });

    if (!aiResp.ok) {
      const t = await aiResp.text().catch(() => "");
      return new Response(
        JSON.stringify({ error: "AI gateway error", status: aiResp.status, details: t.slice(0, 500) }),
        {
          status: aiResp.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const json = await aiResp.json();
    const reply = (json?.choices?.[0]?.message?.content as string | undefined) ?? "";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("site-assistant error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
