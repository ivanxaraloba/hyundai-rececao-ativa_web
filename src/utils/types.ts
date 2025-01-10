import { z } from "zod";

export const dotSchema = z.object({
  x: z.number(),
  y: z.number(),
  id: z.number(),
  name: z.string(),
  active: z.boolean(),
  options: z
    .array(
      z.object({
        label: z.string(),
        value: z.any(),
        active: z.boolean(),
      })
    )
    .optional(),
});

export type DotProps = z.infer<typeof dotSchema>;

export type configDamageMapsType = Record<
  "ALL" | "GLASS" | "TESTE1",
  {
    image: string;
    dots: DotProps[];
  }
>;

export type damageMapsType = {
  id: string;
  label: string;
  config: configDamageMapsType[keyof configDamageMapsType];
};
