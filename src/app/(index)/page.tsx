// Page Form

"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Image from "next/image";

import Informacoes from "./_components/informacoes";
import Estado from "./_components/estado";
import Fotografias from "./_components/fotografias";
import Personalizacao from "./_components/personalizacao";
import Orcamento from "./_components/orcamento";
import { damageMapsType, DotProps, dotSchema } from "@/utils/types";
import { FormEvent } from "react";
import { zohoRefreshToken } from "@/helpers/zoho";
import { DAMAGE_MAPS } from "@/utils/constants";

export const formSchema = z.object({
  numero_or: z.number(),
  matricula: z.string(),
  kms: z.string(),
  data_proxima_itv: z.coerce.date(),
  fim_de_garantia: z.coerce.date(),
  contrato_manutencao: z.string(),
  nivel_combustivel: z.string(),
  //
  dots: z.record(z.array(dotSchema)),
  //
  iluminacao_frente: z.array(z.string()).nonempty("Please at least one item"),
  iluminacao_tras: z.array(z.string()).nonempty("Please at least one item"),
  tapetes: z.array(z.string()).nonempty("Please at least one item"),
  climatizacao: z.array(z.string()).nonempty("Please at least one item"),
  escovas_limpa_vidros: z
    .array(z.string())
    .nonempty("Please at least one item"),
  chapas_matricula: z.string(),
  pneus_alinhamento_direcao: z
    .array(z.string())
    .nonempty("Please at least one item"),
  lavagem: z.array(z.string()).nonempty("Please at least one item"),
  passaporte_servico: z.string(),
  injecao: z.array(z.string()).nonempty("Please at least one item"),
  anti_roubo_rodas: z.string(),
  colete_triangulo: z.array(z.string()).nonempty("Please at least one item"),
  pneu_suplente: z.string(),
  antena: z.string(),
  observacoes: z.string(),
  //
  imagens: z.array(z.instanceof(File)),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: {
      numero_or: 999,
      data_proxima_itv: new Date(),
      fim_de_garantia: new Date(),
      dots: DAMAGE_MAPS.reduce(
        (acc: Record<string, DotProps[]>, damageMap: damageMapsType) => {
          acc[damageMap.id] = damageMap.config.dots.map((dot) => dot);
          return acc;
        },
        {}
      ),
      iluminacao_frente: [],
      iluminacao_tras: [],
      tapetes: [],
      climatizacao: [],
      escovas_limpa_vidros: [],
      pneus_alinhamento_direcao: [],
      lavagem: [],
      injecao: [],
      colete_triangulo: [],
    },
  });

  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   try {
  //     console.log(values);
  //     toast.success("noice");
  //   } catch (error) {
  //     console.error("Form submission error", error);
  //     toast.error("Failed to submit the form. Please try again.");
  //   }
  // };

  const teste = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const x = await zohoRefreshToken();
    console.log(x);
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <Image
        src="https://previewengine-accl.zoho.com/image/WD/egevp6a62ccb0ace842bf95e1dc2bedbfc5e0"
        alt="logo_hyundai"
        width={300}
        height={150}
        loading="lazy"
        className="pb-20 mx-auto"
      />
      <Form {...form}>
        <form onSubmit={(e) => teste(e)} className="space-y-20">
          <Informacoes form={form} />
          <Estado form={form} />
          <Orcamento form={form} />
          <Personalizacao form={form} />
          <Fotografias form={form} />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
