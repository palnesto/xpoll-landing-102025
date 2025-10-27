import { StandardWidthLayout } from "@/App";
import { usePartnerModal } from "@/store/partnerModal";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CustomModal } from "../custom-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
type PartnerForm = {
  name: string;
  email: string;
  description?: string;
};

export const ContactUs = () => {
  const { isOpen, setOpen, draft, setDraft, clearDraft } = usePartnerModal();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<PartnerForm>({
    defaultValues: draft,
    mode: "onBlur",
  });

  // persist draft while typing
  const w = watch();
  useEffect(() => {
    setDraft(w);
  }, [w.name, w.email, w.description]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (data: PartnerForm) => {
    // simulate I/O if you want: await new Promise(r=>setTimeout(r,300));
    console.log("[Partner Modal] submit:", data);
    clearDraft();
    reset({ name: "", email: "", description: "" });
    setOpen(false);
  };

  return (
    <StandardWidthLayout>
      <div className="mx-auto w-full py-16 lg:py-24 2xl:py-32 flex flex-col gap-10 lg:flex-row items-center justify-between text-center">
        <div className="lg:text-left w-full">
          <h1 className="text-[22px] font-extrabold md:text-4xl lg:text-[25px] xl:text-3xl 2xl:text-[40px] lg:leading-tight font-manrope">
            The World’s First Post‑Web <br className="hidden xl:block" /> Civic
            Intelligence Marketplace
          </h1>

          <div className="mt-10 2xl:mt-5">
            <p className="text-[84px] font-medium font-poppins text-[#185CFF] select-none md:text-[112px] 2xl:text-[140px]">
              1.2M<span className="align-top">+</span>
            </p>
            <p className="text-lg md:text-2xl 2xl:text-3xl text-[#292D33]">
              verified votes analyzed
            </p>
          </div>
        </div>

        <div className="lg:text-right flex flex-col lg:items-end w-full">
          <h2 className="text-sm font-medium md:text-xl lg:text-base xl:text-[22px] 2xl:text-[27px] text-[#5E5E5E] font-poppins">
            Powering evolving civic intelligence with real data
          </h2>
          <p className="pt-4 2xl:pt-10 text-sm md:text-lg lg:text-sm xl:text-lg 2xl:text-2xl text-[#717171]">
            Transparent polls, on‑chain verification, and{" "}
            <span className="text-[#0264FF]">AI‑driven</span>
            <br className="hidden 2xl:block" /> analysis built for{" "}
            <span className="font-medium">
              institutions, protocols, and communities.
            </span>
          </p>

          <div className="pt-12 flex flex-col gap-4 lg:flex-row w-fit mx-auto lg:mx-0">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-[#0264FF] px-10 py-3 lg:text-sm 2xl:text-xl text-[#0264FF] transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
            >
              Join the movement
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-[#0264FF] px-10 py-3 lg:text-sm 2xl:text-xl text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/60"
            >
              Partner with us
            </button>
          </div>
        </div>
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title="Partner with XPOLL"
        onSubmit={handleSubmit(onSubmit)}
        submitButtonText="Submit"
        submitButtonClass="bg-[#0264FF] rounded-full"
        needX
        isSubmitting={isSubmitting}
        contentContainerClass="w-full"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent Enter from closing without validation
          }}
          className="space-y-5 pt-2"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description (optional)</Label>
            {/* Use shadcn Textarea if available, otherwise use a plain textarea */}
            {Textarea ? (
              <Textarea
                id="description"
                rows={4}
                placeholder="Briefly describe your goals or partnership idea"
                {...register("description")}
              />
            ) : (
              <textarea
                id="description"
                rows={4}
                className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Briefly describe your goals or partnership idea"
                {...register("description")}
              />
            )}
          </div>

          {/* The modal's own Submit/Cancel buttons are used; no button here */}
        </form>
      </CustomModal>
    </StandardWidthLayout>
  );
};
