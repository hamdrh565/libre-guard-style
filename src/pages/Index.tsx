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
          <a href="#top" className="font-semibold text-lg story-link">حماية ليبري</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:text-primary transition-colors story-link">المزايا</a>
            <a href="#how" className="hover:text-primary transition-colors story-link">طريقة الاستخدام</a>
          </div>
          <Button asChild variant="hero" size="sm" className="pulse">
            <a href="https://YOUR_TEMU_AFFILIATE_LINK" aria-label="تسوّق الآن على تيمو" data-affiliate>
              تسوّق على تيمو
            </a>
          </Button>
        </nav>
      </header>

      <main id="top">
        {/* قسم البطل */}
        <section
          className="container mx-auto grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24 interactive-glow"
          onMouseMove={handleMouseMove}
        >
          <article className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              احمِ مستشعر فري ستايل ليبري بلصقات أنيقة وثابتة
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-prose">
              حافظ على مستشعرك آمنًا من الماء والعرق والتقشير العرضي — مع مظهر عصري أنيق.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="xl" className="hover-scale">
                <a href="https://YOUR_TEMU_AFFILIATE_LINK" aria-label="تسوّق الآن على تيمو" data-affiliate>
                  تسوّق الآن على تيمو
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                استبدل https://YOUR_TEMU_AFFILIATE_LINK برابطك التابع لتيمو.
              </p>
            </div>
          </article>

          <aside className="relative animate-scale-in">
            <img
              src={heroImage}
              alt="لاصقة مستشعر فري ستايل ليبري على الذراع — مقاومة للماء وثابتة"
              className="w-full h-auto rounded-xl border shadow"
              loading="eager"
              decoding="async"
            />
          </aside>
        </section>

        {/* قسم المزايا */}
        <section id="benefits" className="container mx-auto py-12 md:py-20">
          <header className="mb-10 animate-enter">
            <h2 className="text-3xl font-semibold tracking-tight">لماذا ستعجبك هذه اللصقات</h2>
            <p className="text-muted-foreground mt-2 max-w-prose">
              مصممة لنمط حياة نشط وراحة يومية.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale animate-fade-in">
              <Droplets className="text-primary" />
              <h3 className="font-semibold mt-4">مقاومة للماء والعرق</h3>
              <p className="text-sm text-muted-foreground mt-2">
                استحم، اسبح، وتدرّب دون قلق.
              </p>
            </article>

            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale animate-fade-in">
              <ShieldCheck className="text-primary" />
              <h3 className="font-semibold mt-4">مريحة ولطيفة على البشرة</h3>
              <p className="text-sm text-muted-foreground mt-2">
                خامات تسمح بالتنفس ومناسبة للبشرة الحساسة.
              </p>
            </article>

            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale animate-fade-in">
              <Hourglass className="text-primary" />
              <h3 className="font-semibold mt-4">تدوم حتى 14 يومًا</h3>
              <p className="text-sm text-muted-foreground mt-2">
                لاصق قوي يساعد على تثبيت المستشعر لفترة أطول.
              </p>
            </article>

            <article className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow hover-scale animate-fade-in">
              <HandCoins className="text-primary" />
              <h3 className="font-semibold mt-4">سهلة التركيب والإزالة</h3>
              <p className="text-sm text-muted-foreground mt-2">
                قِصّ ولصق بسيط مع إزالة نظيفة.
              </p>
            </article>
          </div>
        </section>

        {/* طريقة الاستخدام */}
        <section id="how" className="container mx-auto py-12 md:py-20">
          <header className="mb-10 animate-enter">
            <h2 className="text-3xl font-semibold tracking-tight">طريقة الاستخدام</h2>
            <p className="text-muted-foreground mt-2 max-w-prose">
              ثلاث خطوات سريعة لحماية مستشعر فري ستايل ليبري.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "انزع", desc: "أزل الغلاف الخلفي للّصقة.", step: 1 },
              { title: "ألصق", desc: "ضعها فوق المستشعر وملّس الحواف.", step: 2 },
              { title: "احمِ", desc: "استمتع بثبات يدوم حتى 14 يومًا.", step: 3 },
            ].map((item) => (
              <article key={item.step} className="rounded-xl border bg-card p-6 shadow-sm animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary text-foreground grid place-items-center font-semibold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{item.desc}</p>
                <div className="mt-4 text-primary inline-flex items-center gap-2">
                  <CheckCircle2 className="text-primary" />
                  <span>سريعة وبسيطة</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* دعوة إجراء سفلية */}
        <section className="container mx-auto py-12 md:py-20">
          <div className="rounded-2xl border bg-gradient-to-tr from-secondary to-accent p-10 text-center animate-enter">
            <h2 className="text-2xl md:text-3xl font-semibold">جاهز لحماية مستشعرك؟</h2>
            <p className="text-muted-foreground mt-2">
              اضغط أدناه للتسوّق وشراء أفضل لصقات مستشعر فري ستايل ليبري من تيمو.
            </p>
            <div className="mt-6">
              <Button asChild variant="hero" size="xl" className="hover-scale">
                <a href="https://YOUR_TEMU_AFFILIATE_LINK" aria-label="تسوّق الآن على تيمو" data-affiliate>
                  تسوّق الآن على تيمو
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-6 text-center text-xs text-muted-foreground">
          <p>
            بصفتي شريكًا في برنامج تيمو، قد أحصل على عمولة من المشتريات المؤهلة دون أي تكلفة إضافية عليك.
          </p>
          <p className="mt-2">
            يمكنك لاحقًا استبدال الصور والأوصاف في هذه الصفحة بسهولة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
