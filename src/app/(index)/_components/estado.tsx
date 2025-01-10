"use client";

import * as z from "zod";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "../page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormSection from "@/components/shared/form-section";
import Dot from "@/components/shared/dot";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { DotProps } from "@/utils/types";
import { DAMAGE_MAPS } from "@/utils/constants";

const Estado: React.FC<{
  form: UseFormReturn<z.infer<typeof formSchema>>;
}> = ({ form }) => {
  // const handleToggleDot = (damageMapId: string, dot: DotProps) => {
  //   const value = dot.value === undefined ? dot.id : undefined;

  //   const currentDots = form.getValues("dots");
  //   const updatedDamage = currentDots[damageMapId] || [];
  //   const updatedDotsForDamage = updatedDamage.map((d: DotProps) =>
  //     d.id === dot.id ? { ...d, status: !d.status, value } : d
  //   );

  //   form.setValue("dots", {
  //     ...currentDots,
  //     [damageMapId]: updatedDotsForDamage,
  //   });
  // };

  const handle = (dot: DotProps, damageMapId: string) => {
    const currentDots = form.getValues("dots");
    const updatedDamage = currentDots[damageMapId] || [];

    const updatedDotsForDamage = updatedDamage.map((d: DotProps) =>
      d.id === dot.id
        ? {
            ...dot,
            active: dot.options?.some((option) => option.active),
          }
        : d
    ) as DotProps[];

    form.setValue("dots", {
      ...currentDots,
      [damageMapId]: updatedDotsForDamage,
    });
  };

  return (
    <FormSection label="Estado da Viatura">
      <FormField
        control={form.control}
        name="dots"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Tabs defaultValue={DAMAGE_MAPS[0].id}>
                <TabsList>
                  {DAMAGE_MAPS.map((damageMap) => (
                    <TabsTrigger key={damageMap.id} value={damageMap.id}>
                      {damageMap.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="border rounded-lg flex justify-center mt-2">
                  {DAMAGE_MAPS.map((damageMap) => (
                    <TabsContent key={damageMap.id} value={damageMap.id}>
                      <div className="relative flex items-center justify-center min-w-[380px] w-[380px]">
                        {/* image */}
                        <img
                          className="min-w-[380px] w-[380px] select-none pointer-events-none"
                          src={damageMap.config.image}
                          alt={damageMap.label}
                        />
                        {/* dots */}
                        {field.value?.[damageMap.id]?.map((dot: DotProps) => (
                          <Dot
                            key={dot.id}
                            dot={dot}
                            // onToggle={() =>
                            //   console.log("handleToggleDot(damageMap.id, dot)")
                            // }
                            onSelect={(newDot) => handle(newDot, damageMap.id)}
                            // onSelect={(value, dotEstimate) =>
                            //   handleSelectOption(
                            //     dot,
                            //     damageMap.id,
                            //     value,
                            //     dotEstimate
                            //   )
                            // }
                          />
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </FormControl>
          </FormItem>
        )}
      />
    </FormSection>
  );
};

export default Estado;
