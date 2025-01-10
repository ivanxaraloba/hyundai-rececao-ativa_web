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
import { FileUploader } from "@/components/shared/file-uploader";

const Fotografias: React.FC<{
  form: UseFormReturn<z.infer<typeof formSchema>>;
}> = ({ form }) => {
  return (
    <FormSection label="Submissão de Fotografias">
      <FormField
        control={form.control}
        name="imagens"
        render={({ field }) => (
          <div className="space-y-6">
            <FormItem className="w-full">
              <FormLabel>Imagens</FormLabel>
              <FormControl>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  maxFileCount={10}
                  maxSize={4 * 1024 * 1024}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </div>
        )}
      />
    </FormSection>
  );
};

export default Fotografias;
