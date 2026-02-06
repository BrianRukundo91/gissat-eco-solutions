import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMsg = { role: "user" | "assistant"; content: string };

const QUICK_PROMPTS = [
  "What services do you offer?",
  "Which sectors do you serve?",
  "Show me project examples",
  "I need a quote",
];

export default function ChatbotWidget() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      role: "assistant",
      content: "Hi! I can answer questions about Gissat (services, sectors, projects, careers), or help you request a quote via the query form.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, messages.length]);

  const navigateTo = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  // Map section names to routes
  const sectionRoutes: Record<string, string> = {
    "services": "/services",
    "sectors": "/sectors",
    "projects": "/projects",
    "team": "/team",
    "about": "/about",
    "careers": "/careers",
    "contact": "/contact",
    "clients": "/clients",
  };

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    if (/(quote|pricing|cost|budget|contact|talk to|email|phone|send a query)/i.test(trimmed)) {
      navigateTo("/contact");
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
      toast({ title: "Chatbot error", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (content: string) => {
    // Convert markdown links [text](#section) to clickable route links
    let formatted = content.replace(
      /\[([^\]]+)\]\(#([^)]+)\)/g,
      (match, text, section) => {
        const route = sectionRoutes[section.toLowerCase()] || `/${section}`;
        return `<a href="${route}" class="text-primary underline hover:no-underline font-medium" data-route="${route}">${text}</a>`;
      }
    );
    return formatted.replace(/\n/g, "<br/>");
  };

  // Handle link clicks within chat messages
  const handleMessageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.dataset.route) {
      e.preventDefault();
      navigateTo(target.dataset.route);
    }
  };

  if (!open) {
    return (
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2">
        <span className="hidden sm:inline bg-primary text-primary-foreground text-sm font-medium px-3 py-2 rounded-full shadow-lg animate-pulse">
          Chat with us!
        </span>
        <Button size="icon" className="h-12 w-12 sm:h-12 sm:w-12 rounded-full shadow-lg" onClick={() => setOpen(true)} aria-label="Open chat">
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-50 w-full sm:w-auto">
      <Card className="w-full sm:w-[min(92vw,360px)] rounded-none sm:rounded-lg shadow-lg border border-border">
        <CardHeader className="py-3 bg-primary rounded-none sm:rounded-t-lg">
          <div className="flex items-center justify-between gap-3">
            <CardTitle className="text-base text-primary-foreground">Gissat Assistant</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-primary-foreground hover:bg-primary/80"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2 mb-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigateTo("/contact")}
            >
              Open Query Form
            </Button>
          </div>

          <ScrollArea className="h-72 pr-2">
            <div className="space-y-2">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm"
                        : "max-w-[80%] rounded-2xl rounded-bl-sm bg-muted text-foreground px-3 py-2 text-sm leading-relaxed"
                    }
                    onClick={handleMessageClick}
                    dangerouslySetInnerHTML={{ __html: formatMessage(m.content) }}
                  />
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-muted text-muted-foreground px-3 py-2 text-sm animate-pulse">
                    Typing…
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          <div className="mt-3 grid gap-2">
            <div className="grid grid-cols-2 gap-1.5">
              {QUICK_PROMPTS.map((p) => (
                <Button
                  key={p}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto py-1.5 px-2 whitespace-normal text-left justify-start"
                  onClick={() => send(p)}
                  disabled={isLoading}
                >
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
    </div>
  );
}
