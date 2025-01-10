"use client";

import * as z from "zod";
import { UseFormReturn } from "react-hook-form";
import { formSchema } from "../page";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FormSection from "@/components/shared/form-section";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { DotProps } from "@/utils/types";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Orcamento({
  form,
}: {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}) {
  const dots = form.watch("dots") || {};

  const checkedDots = Object.keys(dots).reduce((acc: any, key) => {
    const filtered = dots[key].filter((dot) => dot.status === true);
    if (filtered.length > 0) acc[key] = filtered;
    return acc;
  }, {});

  const removeDot = (stateKey: string, dotId: number) => {
    const updatedStateDots = {
      ...dots,
      [stateKey]: dots[stateKey].map((dot) =>
        dot.id === dotId ? { ...dot, status: !dot.status } : dot
      ),
    };
    form.setValue("dots", updatedStateDots);
  };

  return (
    <FormSection label="Orçamento">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Observação</TableHead>
            <TableHead>Área</TableHead>
            <TableHead>Orçamento</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(checkedDots).map((state) => {
            const stateActiveDots = checkedDots[state];
            return stateActiveDots.map((dot: DotProps, index: number) => (
              <TableRow key={index}>
                <TableCell>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="size-7"
                    onClick={() => removeDot(state, dot.id)}
                  >
                    <X className="size-4" />
                  </Button>
                </TableCell>
                <TableCell>
                  <Input type="text" value={state} disabled />
                </TableCell>
                <TableCell>
                  <Input type="text" value={dot.value} disabled />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
              </TableRow>
            ));
          })}
        </TableBody>
      </Table>
    </FormSection>
  );
}
