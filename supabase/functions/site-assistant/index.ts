import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ChatMsg = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are the official website assistant for Gissat (environmental consultancy in Uganda, established 1991, based in Muyenga, Kampala).

Goals:
- Answer questions about the website sections: Home, About, Sectors, Services, Projects, Team, Clients, Careers, Contact.
- Identify keywords and explain the relevant topic clearly.
- If the user asks for a quote, pricing, how to get started, or wants to reach the team, direct them to use the Query Form in the Contact section (anchor: #contact) and ask what project details they have.

Site context (summary):
- About: environmental consultancy since 1991; mission/vision/values; experience across 500+ projects.
- Sectors: Mining & Minerals, Infrastructure, Oil & Gas, Industry, Built Environment, Power & Energy.
- Services (examples): Environmental Management Systems (ISO 14001), Permitting & Licensing, Monitoring & Compliance, Environmental Impact Assessment (EIA/SIA), Noise & Acoustics, Environmental Audits, Environmental Management Plans, Air Quality Assessment.
- Projects (examples): Anderita Beach Hotel compliance audit; Onomo Hotel Kampala ESIA; Latitude 0 Degrees Kampala; Vocational Development Centre compliance audit.
- Careers: why join; culture; general application.

Style:
- Be concise but informative.
- Use bullet points when listing services/sectors.
- When giving examples, mention at least 1 relevant project from the list above if it matches.
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
