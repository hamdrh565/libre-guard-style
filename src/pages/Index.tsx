import { Button } from "@/components/ui/button";
import { Droplets, ShieldCheck, Hourglass, HandCoins, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-libre-patch.jpg";
import { useCallback } from "react";

const Index = () => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  }, []);

  return (
    <div>
      <header className="w-full border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#top" className="font-semibold text-lg">Libre Guard</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:text-primary transition-colors">Benefits</a>
            <a href="#how" className="hover:text-primary transition-colors">How it works</a>
          </div>
          <Button asChild variant="hero" size="sm">
            <a href="https://YOUR_TEMU_AFFILIATE_LINK" aria-label="Shop now on TEMU" data-affiliate>
              Shop on TEMU
            </a>
          </Button>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section
          className="container mx-auto grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24 interactive-glow"
          onMouseMove={handleMouseMove}
        >
          <article>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Protect Your Freestyle Libre Sensor with Stylish & Secure Patches
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-prose">
              Keep your sensor safe from water, sweat, and accidental peeling — while looking great.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="https://YOUR_TEMU_AFFILIATE_LINK" aria-label="Shop now on TEMU" data-affiliate>
                  Shop Now on TEMU
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Replace https://YOUR_TEMU_AFFILIATE_LINK with your affiliate URL.
              </p>
            </div>
          </article>

          <aside className="relative">
            <img
              src={heroImage}
              alt="Freestyle Libre sensor patch on arm — waterproof and secure"
              className="w-full h-auto rounded-xl border shadow"
              loading="eager"
              decoding="async"
            />
          </aside>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="container mx-auto py-12 md:py-20">
          <header className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">Why You'll Love These Patches</h2>
            <p className="text-muted-foreground mt-2 max-w-prose">
              Designed for active lifestyles and everyday comfort.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <Droplets className="text-primary" />
              <h3 className="font-semibold mt-4">Waterproof & Sweatproof</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Shower, swim, and work out without worry.
              </p>
            </article>

            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="text-primary" />
              <h3 className="font-semibold mt-4">Comfortable & Hypoallergenic</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Gentle on skin with breathable materials.
              </p>
            </article>

            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <Hourglass className="text-primary" />
              <h3 className="font-semibold mt-4">Lasts up to 14 Days</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Strong adhesive helps keep your sensor secure longer.
              </p>
            </article>

            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <HandCoins className="text-primary" />
              <h3 className="font-semibold mt-4">Easy to Apply & Remove</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Simple peel-and-stick with clean removal.
              </p>
            </article>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="container mx-auto py-12 md:py-20">
          <header className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>
            <p className="text-muted-foreground mt-2 max-w-prose">
              A quick, three-step process to protect your Freestyle Libre sensor.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Peel", desc: "Remove the backing from the patch.", step: 1 },
              { title: "Apply", desc: "Place over your sensor and smooth out.", step: 2 },
              { title: "Protect", desc: "Enjoy secure wear for up to 14 days.", step: 3 },
            ].map((item) => (
              <article key={item.step} className="rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary text-foreground grid place-items-center font-semibold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{item.desc}</p>
                <div className="mt-4 text-primary inline-flex items-center gap-2">
                  <CheckCircle2 className="text-primary" />
                  <span>Quick & simple</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="container mx-auto py-12 md:py-20">
          <div className="rounded-2xl border bg-gradient-to-tr from-secondary to-accent p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to Secure Your Sensor?</h2>
            <p className="text-muted-foreground mt-2">
              Click below to shop the best Freestyle Libre sensor patches on TEMU.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" size="xl">
                <a href="https://YOUR_TEMU_AFFILIATE_LINK" aria-label="Shop now on TEMU" data-affiliate>
                  Shop Now on TEMU
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-6 text-center text-xs text-muted-foreground">
          <p>
            As a TEMU affiliate, I may earn from qualifying purchases at no extra cost to you.
          </p>
          <p className="mt-2">
            Replace product images and descriptions later in this page where needed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
