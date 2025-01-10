import { z } from "zod";

export const dotSchema = z
  .object({
    x: z.number(),
    y: z.number(),
    id: z.number(),
    name: z.string(),
    status: z.boolean(),
    value: z.any().optional(),
    options: z
      .array(
        z.object({
          label: z.string(),
          value: z.any(),
        })
      )
      .optional(),
    type: z.enum(["single", "multi"]),
  })
  .refine(
    (data) => {
      // If type is 'single', value should not be an array and should have a single value.
      if (data.type === "single" && Array.isArray(data.value)) {
        return false; // 'single' type should not have an array in value
      }

      // If type is 'multi', value should be an array.
      if (data.type === "multi" && !Array.isArray(data.value)) {
        return false; // 'multi' type should have an array in value
      }

      // Validate options for 'multi' type should be present
      if (data.type === "multi" && !data.options?.length) {
        return false; // 'multi' should have options
      }

      return true;
    },
    {
      message: "Invalid combination of type, value, and options",
      path: ["value"],
    }
  );

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
