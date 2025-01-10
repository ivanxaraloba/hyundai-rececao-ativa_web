"use client";

import * as z from "zod";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "../page";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import FormSection from "@/components/shared/form-section";

const Informacoes: React.FC<{
  form: UseFormReturn<z.infer<typeof formSchema>>;
}> = ({ form }) => {
  return (
    <FormSection label="Informações Viatura">
      <FormField
        control={form.control}
        name="numero_or"
        render={({ field }) => (
          <FormItem>
            <FormLabel>N.º OR</FormLabel>
            <FormControl>
              <Input
                placeholder="Auto-Filled"
                disabled
                type="number"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="matricula"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Matrícula</FormLabel>
            <FormControl>
              <Input placeholder="Matrícula" type="text" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="kms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kms</FormLabel>
            <FormControl>
              <Input placeholder="Kms" type="text" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="data_proxima_itv"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Data Próxima ITV</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="fim_de_garantia"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Fim de Garantia</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="contrato_manutencao"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contrato Manutenção</FormLabel>
            <FormControl>
              <Input placeholder="Contrato Manutenção" type="text" {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="nivel_combustivel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nível Combustível</FormLabel>
            <FormControl>
              <div className="">
                <Image
                  src="https://previewengine-accl.zoho.com/image/WD/7q02g1a99f819e5f641c5a8cfd73b67fbafcd"
                  alt="nivel_combustivel_1"
                  width={200}
                  height={100}
                  loading="lazy"
                  className=""
                />
                <RadioGroup
                  className="flex gap-4"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">0</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">1/4</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="option-three" />
                    <Label htmlFor="option-three">1/2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-four" id="option-four" />
                    <Label htmlFor="option-four">3/4</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-five" id="option-five" />
                    <Label htmlFor="option-five">1</Label>
                  </div>
                </RadioGroup>
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </FormSection>
  );
};

export default Informacoes;
