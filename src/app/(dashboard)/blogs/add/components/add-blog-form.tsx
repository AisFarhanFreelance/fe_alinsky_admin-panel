"use client";

import { addBlog } from "@/actions/blog-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { H1Plugin } from "@platejs/basic-nodes/react";
import { useRouter } from "next/navigation";
import { Plate, usePlateEditor } from "platejs/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Editor, EditorContainer } from "@/components/ui/editor";
import { FixedToolbar } from "@/components/ui/fixed-toolbar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { H1Element } from "@/components/ui/heading-node";
import { Input } from "@/components/ui/input";
import { ToolbarButton } from "@/components/ui/toolbar";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  subtitle: z.string().min(1, {
    message: "Subtitle is required",
  }),
});

export function AddBlogForm() {
  const [content, setContent] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await addBlog({
        title: values.title,
        subtitle: values.subtitle,
        content: content,
      });

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }

      router.push("/blogs");
    });
  }

  const editor = usePlateEditor({
    plugins: [H1Plugin.withComponent(H1Element)],
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subtitle</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormLabel>Content</FormLabel>
        <Plate
          editor={editor}
          onChange={({ value }) => {
            setContent(JSON.stringify(value));
          }}
        >
          <div className="border border-gray-200 rounded-lg mb-4">
            <FixedToolbar className="justify-start rounded-t-lg">
              <ToolbarButton onClick={() => editor.tf.h1.toggle()}>
                H1
              </ToolbarButton>
            </FixedToolbar>
            <EditorContainer>
              <Editor variant="fullWidth" />
            </EditorContainer>
          </div>
        </Plate>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add Blog"}
        </Button>
      </form>
    </Form>
  );
}
