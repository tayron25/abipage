"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  subject: z.string().min(3, "El asunto debe tener al menos 3 caracteres."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export type FormState = {
  message: string;
  errors: Record<string, string[]> | null;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState, 
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, corrige los errores en el formulario.",
      success: false,
    };
  }
  
  const { name, email, subject, message } = validatedFields.data;

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log("Nuevo mensaje de contacto:");
  console.log("Nombre:", name);
  console.log("Email:", email);
  console.log("Asunto:", subject);
  console.log("Mensaje:", message);

  return {
    message: `¡Gracias, ${name}! Tu mensaje ha sido enviado. Te contactaré pronto.`,
    success: true,
    errors: null,
  };
}
