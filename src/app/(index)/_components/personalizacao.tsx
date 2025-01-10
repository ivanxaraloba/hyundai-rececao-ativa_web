"use client";

import * as z from "zod";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "../page";

import React from "react";

import FormSection from "@/components/shared/form-section";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OPTIONS_STATE_VEHICLE } from "@/utils/constants";
import { Textarea } from "@/components/ui/textarea";

export default function Personalizacao({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
  return (
    <FormSection label="Personalização">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="iluminacao_frente"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Iluminação Dianteira</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="iluminacao_tras"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Iluminação Traseira</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="tapetes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tapetes</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="climatizacao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Climatização</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="escovas_limpa_vidros"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Escovas Limpa Vidros</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="chapas_matricula"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Chapas de Matricula</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Selecionar --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                      <SelectItem key={index} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="pneus_alinhamento_direcao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pneus & Alinhamento Direção</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="lavagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lavagem</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"React"}>
                          React
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
                        <MultiSelectorItem value={"Svelte"}>
                          Svelte
                        </MultiSelectorItem>
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="passaporte_servico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passaporte Serviço</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Selecionar --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                      <SelectItem key={index} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="injecao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Injeção</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="anti_roubo_rodas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anti-Roubo Rodas</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Selecionar --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                      <SelectItem key={index} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="colete_triangulo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colete e Triângulo</FormLabel>
                <FormControl>
                  <MultiSelector
                    values={field.value}
                    onValuesChange={field.onChange}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="-- Selecionar --" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                          <MultiSelectorItem key={index} value={el}>
                            {el}
                          </MultiSelectorItem>
                        ))}
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <FormField
            control={form.control}
            name="pneu_suplente"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pneu Suplente / KIT anti Furto</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Selecionar --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                      <SelectItem key={index} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6">
          <FormField
            control={form.control}
            name="antena"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Antena</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Selecionar --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {OPTIONS_STATE_VEHICLE[field.name].map((el, index) => (
                      <SelectItem key={index} value={el}>
                        {el}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <FormField
        control={form.control}
        name="observacoes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Observações</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Adicione observações extras que achar relevantes"
                className="resize-none"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </FormSection>
  );
}
