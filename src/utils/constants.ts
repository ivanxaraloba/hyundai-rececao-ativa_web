import { configDamageMaps } from "@/configs/damage-maps";
import { damageMapsType } from "./types";

export const OPTIONS_STATE_VEHICLE = {
  iluminacao_frente: [
    "Luz Diurna Drt",
    "Luz Diurna Esq",
    "Pisca Esq",
    "Mínimo Esq",
    "Pisca Drt",
    "Mínimo Drt",
    "Farol Nevoeiro Drt",
    "Farol Nevoeiro Esq",
  ],
  iluminacao_tras: [
    "Sem Danos",
    "Luz Presenças Esq",
    "Luz Presença Drt",
    "Pisca Esq",
    "Pisca Drt",
    "Stop Esq",
    "Stop Drt",
    "Luz Marcha atrás Esq",
    "Luz Marcha atrás Drt",
    "Luz de Nevoeiro",
  ],
  tapetes: ["-", "Tapete Mala"],
  climatizacao: [
    "Limpeza Condutas",
    "Desinfeção por Ozono",
    "Limpeza Condutas e Desinfeção por Ozono",
  ],
  escovas_limpa_vidros: [
    "OK",
    "Escovas Frt",
    "Escova Traseira",
    "Escovas Frt e Escova Traseira",
  ],
  chapas_matricula: [
    "Sem Danos",
    "Chapa Matrícula Frente",
    "Chapa Matrícula Traseira",
    "Ambas Chapas de Matrículas",
  ],
  pneus_alinhamento_direcao: [
    "Sem Danos",
    "4 Pneus",
    "Pneus Frente",
    "Pneus Trás",
    "Rotação Pneus",
    "Alinhamento Direção",
  ],
  lavagem: ["Simples", "Completa", "Limpeza Estofos"],
  passaporte_servico: ["OK", "Em falta"],
  injecao: [
    "Aditivo Combustível",
    "Limpeza Sistema Injeção",
    "Aditivo Combustível e Limpeza Sistema Injeção",
  ],
  anti_roubo_rodas: ["OK", "Em falta"],
  colete_triangulo: [
    "OK",
    "Colete em falta",
    "Triângulo em falta",
    "Colete e Triângulo em falta",
  ],
  pneu_suplente: [
    "OK",
    "Pneu suplente substituir",
    "Kit Anti-furto fora de validade",
    "Pneu suplente substituir e Kit Anti-furto fora de validade",
  ],
  antena: ["OK", "Em falta"],
};

export const DAMAGE_MAPS: damageMapsType[] = [
  {
    id: "all",
    label: "Todos",
    config: configDamageMaps.ALL,
  },
  {
    id: "teste1",
    label: "Todos ( TESTE )",
    config: configDamageMaps.TESTE1,
  },
  {
    id: "glass",
    label: "Vidros",
    config: configDamageMaps.GLASS,
  },
];
