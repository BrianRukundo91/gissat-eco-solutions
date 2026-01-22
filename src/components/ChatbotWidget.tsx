import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMsg = {
  role: "user" | "assistant";
  content: string;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "assistant",
      content:
        "Hi! I can answer questions about Gissat (services, sectors, projects, careers), or help you request a quote via the query form.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages.length]);

  const quickPrompts = useMemo(
    () => [
      "What services do you offer for Environmental Impact Assessment (EIA)?",
      "Which sectors do you serve?",
      "Show me an example project similar to a hotel development.",
      "I need a quote for compliance monitoring.",
    ],
    [],
  );

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    // lightweight keyword routing to contact form
    if (/(quote|pricing|cost|budget|contact|talk to|email|phone|send a query)/i.test(trimmed)) {
      // don't block the AI reply; just help the user get there.
      scrollToId("contact");
    }

    const nextUser: ChatMsg = { role: "user", content: trimmed };
    const history = [...messages, nextUser];
    setMessages(history);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("site-assistant", {
        body: { messages: history },
      });

      if (error) throw error;
      const answer = (data?.reply as string | undefined) ?? "Sorry — I couldn't generate a reply.";
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    } catch (e) {
      console.error(e);
      toast({
        title: "Chatbot error",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <Card className="w-[min(92vw,380px)] shadow-lg">
          <CardHeader className="py-3">
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-base">Gissat Assistant</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close chat">
                <X />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2 mb-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  scrollToId("contact");
                  setOpen(false);
                }}
              >
                Open Query Form
              </Button>
            </div>

            <ScrollArea className="h-80 pr-3">
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[85%] rounded-lg bg-primary text-primary-foreground px-3 py-2 text-sm"
                          : "max-w-[85%] rounded-lg bg-secondary text-secondary-foreground px-3 py-2 text-sm"
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-lg bg-secondary text-secondary-foreground px-3 py-2 text-sm">
                      Typing…
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            </ScrollArea>

            <div className="mt-3 grid gap-2">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((p) => (
                  <Button key={p} variant="outline" size="sm" onClick={() => send(p)} disabled={isLoading}>
                    {p}
                  </Button>
                ))}
              </div>

              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, sectors, projects…"
                  disabled={isLoading}
                  aria-label="Chat message"
                />
                <Button type="submit" disabled={isLoading || !input.trim()} aria-label="Send">
                  <Send />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          <MessageCircle />
        </Button>
      )}
    </div>
  );
}
