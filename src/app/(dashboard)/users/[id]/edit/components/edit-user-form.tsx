"use client";

import { setPermissionsByUserId } from "@/actions/permission-actions";
import { updateUserById } from "@/actions/user-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditUserFormProps {
  id: string;
  role?: string;
  permissions?: string[];
}

const items = ["create-blog", "show-lead-capture"];

export function EditUserForm({
  id,
  role = "user",
  permissions = [],
}: EditUserFormProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const formSchema = z.object({
    role: z.string().min(1, {
      message: "Role is required",
    }),
    permissions: z.array(z.string()).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: role,
      permissions: permissions,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const resultRole = await updateUserById(id, values.role);
      if (!resultRole.success) {
        toast.error(resultRole.message);
        return;
      }
      const resultPermissions = await setPermissionsByUserId(
        id,
        values.permissions ?? [],
      );
      if (!resultPermissions.success) {
        toast.error("Failed to update permissions, only role updated");
      }
      router.push("/users");
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="permissions"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Permission</FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item}
                  control={form.control}
                  name="permissions"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-center gap-2"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              const current = field.value ?? []; // if undefined, fallback to []
                              if (checked) {
                                field.onChange([...current, item]);
                              } else {
                                field.onChange(
                                  current.filter((v) => v !== item),
                                );
                              }
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit">
          {isPending ? "Updating..." : "Update User"}
        </Button>
      </form>
    </Form>
  );
}
