import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navegação Simples */}
      <header className="px-6 h-16 flex items-center border-b border-slate-100">
        <span className="text-xl font-bold tracking-tighter text-blue-600">
          FinOp.
        </span>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Next.js 16 + Tailwind v4 Live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Gestão financeira de{" "}
            <span className="text-blue-600">alta performance</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Arquitetura baseada em Partial Prerendering (PPR) e Streaming
            Assíncrono, otimizada para entregar uma experiência de alta
            performance com latência mínima..
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 font-semibold" asChild>
              <Link href="/dashboard">
                Acessar Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="px-8 font-semibold bg-[#020617] text-white border border-[#020617] hover:bg-white hover:text-[#020617] dark:bg-white dark:text-[#020617] dark:hover:bg-[#020617] dark:hover:text-white transition-all duration-300 shadow-custom"
            >
              <a
                href="https://github.com/AvelinoTeixeira/finop_enterprise"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Documentação
              </a>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold">Ultra Rápido</h3>
              <p className="text-slate-600">
                Renderização parcial (PPR) garante carregamento em
                milissegundos.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold">Analytics Avançado</h3>
              <p className="text-slate-600">
                Gráficos interativos com processamento de dados em tempo real.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold">Segurança Enterprise</h3>
              <p className="text-slate-600">
                Arquitetura baseada em Server Actions para proteção total dos
                dados.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-slate-200 text-center text-slate-500 text-sm">
        © 2026 FinOp Enterprise. Todos os direitos reservados.
      </footer>
    </div>
  );
}
