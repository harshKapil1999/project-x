"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

const jobs = [
  { label: "Full Stack Developer", value: "Full Stack Developer" },
  { label: "Specialist Infrastructure", value: "Specialist Infrastructure" },
  { label: "Javascript Developer", value: "Javascript Developer" },
  { label: "Ruby on Rails Engineer", value: "Ruby on Rails Engineer" },
  { label: "Manager Technology Java", value: "Manager Technology Java" },
  { label: "Senior/Java Developer", value: "Senior/Java Developer" },
  { label: "Senior Product Manager", value: "Senior Product Manager" },
  { label: "Tech lead / Senior Software Engineer", value: "Tech lead / Senior Software Engineer" },
  { label: "Cloud Platform System Engineer", value: "Cloud Platform System Engineer" },
  { label: "Database engineer, Hadoop", value: "Database engineer, Hadoop" },
] as const

const FormSchema = z.object({
  job: z.string({
    required_error: "Please select a job.",
  }),
})

export function ComboboxForm({ data, setData }: any) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(Data: z.infer<typeof FormSchema>) {
    setData({
      ...data,
      jD: Data.job,
    })
    console.log(data);
    /* toast({
      title: "You selected the following job:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    }) */
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Job</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        " justify-between w-full",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? jobs.find(
                            (job) => job.value === field.value
                          )?.label
                        : "Select job"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command className="w-full">
                    <CommandInput
                      placeholder="Search Job..."
                      className="h-9"
                    />
                    <CommandEmpty>No jobs found.</CommandEmpty>
                    <CommandList>
                    <CommandGroup>
                    
                      {jobs.map((job) => (
                        <CommandItem
                          value={job.label}
                          key={job.value}
                          onSelect={() => {
                            form.setValue("job", job.value)
                          }}
                        >
                          {job.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              job.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    
                    </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the job type that will be used in the dashboard for further analysis.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className=" w-full rounded-full" type="submit">Proceed with the selected job</Button>
      </form>
    </Form>
  )
}
